import React from 'react';

function MyInfo() {
  return (
    <div className='flex flex-col-reverse md:flex-row items-center justify-around pt-4'>
      <div className='p-2 w-full md:w-[430px] gap-8 flex flex-col'>
        <h1 className='capitalize font-bold text-4xl  text-blue-500 p-2 hover:bg-rose-100 cursor-pointer duration-300 hover:text-black rounded '>Hi, I'm Musharaf</h1>
        <p className='p-2 hover:bg-rose-100 cursor-pointer duration-300 hover:text-black rounded'>My name is Musharaf Hussain. I am a fresher web developer looking for a job. I have 2 years of experience.</p>
        <button className='w-[120px] capitalize p-3 rounded hover:bg-blue-600 font-bold bg-blue-700'>
          Contact Me
        </button>
      </div>
      <div className='flex justify-center md:mt-0 mt-4'>
        <img 
          src="https://img.freepik.com/premium-photo/cartoon-3d-character-developer-designer-working-laptop-web-app-development-deploy-frontend-backend-project-team-engineers-website_1029476-383476.jpg" 
          alt="Developer working on a laptop" 
          className="rounded-full"
          style={{ width: '200px', height: '200px', objectFit: 'cover' }} 
        />
      </div>
    </div>
  );
}

export default MyInfo;
