import React from 'react' 
import {Loader} from 'lucide-react'

const App = () => {
  return (
    <>
      <div className='h-screen w-screen flex justify-center items-center bg-slate-200'>
        <div className='h-3/6 w-[30%] flex flex-col justify-center items-center bg-slate-100 rounded-md shadow-2xl'>
          <h1>LOGIN</h1>
          <form className=' h-[80%] w-[80%] flex flex-col justify-center items-center gap-y-3' >
            <input type="text" name="name" id="name" placeholder='Enter username' className='rounded-md w-full text-center p-1 border-solid border-2 hover:border-zinc-300'/>
            {/* <input type="email" name="email" id="email" placeholder='Enter email' className='rounded-md w-full text-center p-2 border-solid border-2 border-opacity-75 hover:border-teal-700'/>
            <input type="tel" name="phone" id="phone" placeholder='Enter phone' className='rounded-md w-full text-center p-2 border-solid border-2 border-opacity-75 hover:border-teal-700'/> */}
            <input type="password" name="pass" id="pass" placeholder='Enter password' className='rounded-md w-full text-center p-1 border-solid border-2 active:border-zinc-300 hover:border-zinc-300'/>
            <button type="submit" className='w-full bg-blue-600 text-slate-100 p-1 rounded-md active:opacity-75 flex flex-row gap-4 justify-center'><Loader className="animate-spin" size={20} color="white" /> login</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App