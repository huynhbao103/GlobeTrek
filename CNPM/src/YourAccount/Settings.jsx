import React, { useState } from 'react';
import SidebarMenu from './SidebarMenu'; // Import SidebarMenu
import Footer from '../footer/Footer';
import Header from '../header1/Header';

import AddEmail from './AddEmail';
import AddPhone from './AddPhone';
import UserAccount from './UserAccount';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('UserAccount'); // Trạng thái lưu tab hiện tại

  // Hàm xử lý việc chuyển đổi giữa các tab
  const renderContent = () => {
    switch (activeTab) {
      case 'UserAccount':
        return <UserAccount />;
      case 'email':
        return <AddEmail />;
      case 'phone':
        return <AddPhone />;
      default:
        return null;
    }
  };

  return (
    <>
    <Header/>
      <div className='w-full bg-[rgba(174,249,231,0.2)] mt-40'>
        <div className="flex max-w-[1280px] justify-center mx-auto flex-row items-start py-10">
          <SidebarMenu />
          <div className="w-full max-w-5xl ml-5 mx-auto rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Cài đặt</h1>
            <div className="flex mb-4">
              <button
                onClick={() => setActiveTab('UserAccount')}
                className={`py-2 px-4 mr-2 ${activeTab === 'UserAccount' ? 'bg-[#4CA771] text-white' : 'bg-white'}`}
              >
                Thông tin tài khoản
              </button>
              <button
                onClick={() => setActiveTab('email')}
                className={`py-2 px-4 mr-2 ${activeTab === 'email' ? 'bg-[#4CA771] text-white' : 'bg-white'}`}
              >
                Mật khẩu và bảo mật
              </button>
              <button
                onClick={() => setActiveTab('phone')}
                className={`py-2 px-4 ${activeTab === 'phone' ? 'bg-[#4CA771] text-white' : 'bg-white'}`}
              >
                Bản tin với khuyến mãi
              </button>
            </div>
            <div>
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Settings;
