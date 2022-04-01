import { useState } from 'react'
import { useSnackbar } from 'notistack'
import { circularProgressClasses } from '@mui/material';

function ParaTran() {
  const [results, setResults] = useState([]);
  const [key, setKey] = useState('');
  const { enqueueSnackbar } = useSnackbar()
  const handleSearch = (target) => {
    const data = new FormData(target);
    const [key] = [...data.values()];
    setKey(key);
    fetch(`/api/search/${key}`)
      .then(res => res.json())
      .then((data) => {
        if (data.errocde) {
          return enqueueSnackbar(data.message || 'unknow err', {
            variant: 'error',
            autoHideDuration: 2000
          })
        }
        setResults(data.data)
      })
  }
  return (
    <div className="flex">
      <div className="searchite px-10 py-5">
        <form onSubmit={e => { e.preventDefault(); handleSearch(e.target) }}>
          <div>
            <label className='block text-blue-500' htmlFor="">关键词：</label>
            <textarea type="text" name="key" />
          </div>
          <input
            type='submit'
            className="bg-white text-gray-700 font-medium py-1 px-4 
                      border border-gray-400 rounded-lg tracking-wide
                      hover:bg-gray-100 mr-0 block"
            value='提交' />
        </form>
      </div>
      <div className="results p-5 w-ful overflow-scrolll">
        <p className='text-blue-500 font-bold text-lg mb-3'>搜索结果：</p>
        {
          results.length ?
            results.map(({ _id, chin, eng }, index) => (
              <div key={_id} className='flex mt-2 bg-gray-300 py-3 px-4 rounded'>
                <div className='min-w-max text-gray-600'>第{index + 1}项：</div>
                <div>
                  {/* <div className='font-bold'>{chin}</div> */}
                  <HightLight skey={key} text={chin} />
                  <HightLight skey={key} text={eng} />
                  {/* <div className='mt-2'>{eng}</div> */}
                </div>
              </div>
            ))
            :
            <div className='text-center h-32 leading-10'><svg t="1648806977067" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2174" width="200" height="200"><path d="M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m278.058667 193.834667L279.168 790.058667A362.666667 362.666667 0 0 0 790.058667 279.168zM512 149.333333a362.666667 362.666667 0 0 0-278.058667 595.498667L744.832 233.941333A361.216 361.216 0 0 0 512 149.333333z" p-id="2175"></path></svg></div>
        }
      </div>
    </div>
  )
}

function HightLight({ skey, text }) {
  const slices = text.split(skey)

  if (slices.length === 1) {
    return (
      <div>{text}</div>
    )
  }

  return (
    <div>
      {slices.map((text, index) => {
        if (index === slices.length - 1) return <span key={index}>{text}</span>
        return <span key={index}>
          {text}<span className='bg-yellow-400'>{skey}</span>
        </span>
      })}
    </div>
  )
}

export default ParaTran;