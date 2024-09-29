import React from 'react';

function MyContact() {
  return (
    <div className='mt-4 ml-10 md:ml-48 w-full'>
      <h2 className='text-2xl font-bold'>Contact Me</h2>
       
      <div className='mt-4'>
        <h3 className='text-xl'>Contact Information</h3>
        <p>Email: <a href='mailto:your.email@example.com' className='text-blue-500 hover:underline'>musharafgujjar7711@gmail.com</a></p>
        <p>Phone: <a href='tel:+1234567890' className='text-blue-500 hover:underline'>0323-7760620</a></p>
      </div>
      
      <div className='mt-4'>
        <h3 className='text-xl'>Project Links code</h3>
        <ul className='list-disc list-inside'>
          <li>
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
    </div>
  );
}

export default MyContact;
