import { useState, useEffect } from 'react'
import { useSnackbar } from 'notistack'

function Comments() {
  const [comments, setComments] = useState([]);
  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    fetchComments()
  }, [])

  const fetchComments = () => {
    fetch('/api/getComments')
      .then(res => res.json())
      .then((data) => {
        if(!data.errcode) {
          setComments(data.data)
        }
      })
  }

  const handleSubmit = async (target) => {
    const data = new FormData(target)
    const [
      username,
      comments,
    ] = [...data.values()];
    const rawResponse = await fetch('/api/postComments', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, comments })
    });
    const response = await rawResponse.json();
    if (!response?.errcode) {
      target.reset()
      return fetchComments()
    }
    enqueueSnackbar(response.message, {
      variant:'error',
      autoHideDuration: 2000
    })
  }
  return (
    <div className='p-10'>
      <div className='flex items-center flex-col space-y-2 w-full m-auto'>
        {comments?.map(item => <SingleComment key={item.date} {...item} />)}
      </div>
      <div className="flex mx-auto items-center justify-center mt-10 mb-4 w-full">
        <form className="w-4/5 bg-white rounded-lg p-4 shadow-md"
          onSubmit={(e) => { e.preventDefault(); handleSubmit(e.target) }}
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-full px-3 mb-2 mt-2">
              <input
                type="text"
                name="username"
                className="py-1 border-b-2 px-2 focus:border-cyan-400"
                placeholder="输入昵称" />
              <textarea className="bg-gray-100 rounded border 
                  border-gray-400 leading-normal resize-none 
                  w-full h-20 py-2 px-3 font-medium placeholder-gray-700 
                  focus:outline-none focus:bg-white mt-2"
                name="body"
                placeholder='输入评论'
                required>
              </textarea>
            </div>
          </div>
          <div className="relative">
            <input
              type='submit'
              className="bg-white text-gray-700 font-medium py-1 px-4 
                      border border-gray-400 rounded-lg tracking-wide
                      hover:bg-gray-100 mr-0 block"
              value='提交评论' />
          </div>
        </form>
      </div>
    </div >
  )
}



function SingleComment({
  username,
  comments,
  ip,
  date,
  avatorUrl
}) {
  return (
    <div className='py-5 px-40 shadow-sm min-w-full'>
      <header className='flex items-center space-x-2 border-b-2 border-slate-300 py-2 '>
        <img className='w-8 h-8 rounded-full' src={avatorUrl} alt="random_avator" />
        <div className='font-bold text-lg'>{username}</div>
      </header>
      <main className='indent-2 p-2'>{comments}</main>
      <footer className='text-sm justify-end text-right'>
        <div className='text-emerald-600'>FROM: {ip}</div>
        <div className='text-gray-500'>AT: {date}</div>
      </footer>
    </div>
  )
}

export default Comments;