import React from 'react' 

const App = () => {
  return (
    <>
      <div className='h-screen w-screen flex justify-center items-center bg-teal-600'>
        <div className='h-3/6 w-[30%] flex flex-col justify-around items-center bg-slate-100 rounded-md shadow-2xl'>
          <h1>LOGIN</h1>
          <form className=' h-[80%] w-[80%] flex flex-col justify-center items-center gap-3' >
            <input type="text" name="name" id="name" placeholder='Enter name' className='rounded-md w-full text-center p-2 border-solid border-2 border-opacity-75 hover:border-teal-700'/>
            <input type="email" name="email" id="email" placeholder='Enter email' className='rounded-md w-full text-center p-2 border-solid border-2 border-opacity-75 hover:border-teal-700'/>
            <input type="tel" name="phone" id="phone" placeholder='Enter phone' className='rounded-md w-full text-center p-2 border-solid border-2 border-opacity-75 hover:border-teal-700'/>
            <input type="password" name="pass" id="pass" placeholder='Enter password' className='rounded-md w-full text-center p-2 border-solid border-2 border-opacity-75 hover:border-teal-700'/>
            <button type="submit" className='w-full bg-teal-600 text-slate-100 p-2 rounded-md active:opacity-75'> Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App