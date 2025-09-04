import React from 'react'

export default function page() {
  return (
    <div className='min-h-screen bg-gray-300 text-black'>
      <div className='flex justify-center items-center pt-20'>
        <h1 className='text-5xl font-bold text-black'>Contact Us</h1>
      </div>
      <div className='flex justify-center items-center pt-10'>
        <form className='bg-white p-6 rounded-lg shadow-md w-full max-w-md'>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>Name</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='name' type='text' placeholder='Your Name' />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>Email</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='email' type='email' placeholder='Your Email' />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='message'>Message</label>
            <textarea className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='message' rows='4' placeholder='Your Message'></textarea>
          </div>
          <div className='flex items-center justify-between'>
            <button className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>Send Message</button>
          </div>
        </form>
      </div>
    </div>

  )
}
