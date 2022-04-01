import { useState } from 'react'
import { Link, Route, Routes, Navigate } from 'react-router-dom'
import Docs from './pages/docs'
import ParaTran from './pages/paraTran'
import Show from './pages/show'
import Comments from './pages/comments'

function App() {
  return (
    <div className='bg-slate-200 min-h-screen'>
      <header className='w-screen text-blue-400 bg-indigo-100 p-1 fixed h-16 shadow-sm'>
        <div>
          <div>中国知识产权法律法规汉英平行语料库</div>
          <div>Parallel Corpus of Chinese Intellectual Property Laws and Regulations</div>
        </div>
        <div className='flex justify-center space-x-20 text-2xl pt-4'>
          <div><Link to='/'>汉英平行</Link></div>
          <div><Link to='/translate'>翻译显化</Link></div>
        </div>
        <div className='right-10 top-4 absolute flex space-x-10'>
          <div >
            <Link to='/comment' title='留言板'>
              <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </Link>
          </div>
          <div>
            <Link to='/docs' title='说明书'>
              <svg className="h-6 w-6 text-blue-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </Link>
          </div>
        </div>
      </header>
      <main className='pt-16'>
        <Routes>
          <Route path='/' element={<ParaTran />} />
          <Route path='/translate' element={<Show />} />
          <Route path='/comment' element={<Comments />} />
          <Route path='/docs' element={<Docs />} />
          <Route path='*'element ={<Navigate replace to="/" />} />
        </Routes>
      </main>
      <footer>为您提供丰富的知识产权语料检索 电子科技大学</footer>
    </div>
  )
}

export default App
