import React from 'react';
import SidebarMenu from './SidebarMenu'; // Import SidebarMenu
import ProfileUser from './ProfileUser';
import AddEmail from './AddEmail';
import AddPhone from './AddPhone';

const Settings = () => {
  return (
    <>
      <div className='w-full bg-[rgba(174,249,231,0.2)]'>
        <div className="flex max-w-[1280px] justify-center mx-auto flex-row items-start py-10 ">
          <SidebarMenu />
          <div className="w-full max-w-5xl ml-5 mx-auto  rounded-lg ">
            <h1 className="text-2xl font-bold mb-4">Cài đặt</h1>
        

              <ProfileUser/>

               <AddEmail/>
               <AddPhone/>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
