// import React from 'react'
import './App.css'

function App() {

  return (
    <div className="flex justify-center min-h-[50vh] mt-12 tems-center">
      <div className='w-full max-w-xs bg-slate-900 p-7 rounded-lg'>
        <h1 className='text-3xl font-bold mb-5 text-blue-600'>Login</h1> 
        <p className='font-medium mb-4 text-slate-400'>
            Welcome, Please enter your details
        </p>
        <form action="">
          <div className="mb-6">
            <label htmlFor="email" className='block text-slate-300 text-sm font-bold mb-2'>
              Email
            </label>
            <input type="text" className='text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50' placeholder='example@gmail.com'/>
          </div>
          <div className="mb-6">
            <label htmlFor="password" className='block text-slate-300 text-sm font-bold mb-2'>
              Password
            </label>
            <input type="text" className='text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50' placeholder='*****'/>
          </div>
        </form>

      </div>
      
        
    </div>
  )
}

export default App
