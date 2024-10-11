import React from 'react';

function MyContact() {
  return (
    <div className=' relative'>
      <div className=' container bg-gray-700 text-white mt-20'>
      <div className='text-center'>
      <div className='mt-4'>
        <h3 className='text-xl capitalize lg:text-3xl mb-5 font-bold font-poppins'>my  Project Links (Github & live Vercel)</h3>
        <ul className=' '>
          <li className=' bg-slate-400 py-2 px-3'>
            <p className=' capitalize  text-xl'>l built a reponsive You-tube clone .link is</p>
            <a href='https://project1.com' className='text-blue-500 hover:underline'>
            https://github.com/musharafgujjar7711/My-topnews
            </a>
          </li>
          <li>
            <a href='https://project2.com' className='text-blue-500 hover:underline'>
            https://github.com/musharafgujjar7711/My-first-project
            </a>
          </li>
          <li>
            <a href='https://project3.com' className='text-blue-500 hover:underline'>
            https://github.com/musharafgujjar7711/youtube-clone
            
            </a>
          </li>
        </ul>
      </div>
       
      <div className='mt-4'>
        <h3 className='text-xl'>Contact Information</h3>
        <p>Email: <a href='mailto:your.email@example.com' className='text-blue-500 hover:underline'>musharafgujjar7711@gmail.com</a></p>
        <p>Phone: <a href='tel:+1234567890' className='text-blue-500 hover:underline'>0323-7760620</a></p>
      </div>
      
     
    </div>
    </div>
    </div>
  );
}

export default MyContact;
