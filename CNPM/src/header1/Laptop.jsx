import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Traveloka from '../assets/Logo1.png'; 
import Laugues from './Laugues'; 
import Suppor from './Suppor';
import Login from './Login';
import More from './More';

import UserInfo from './UserInfo';
import Register from './Register'
import { createRoot } from 'react-dom/client';

function Laptop() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState('');

  useEffect(() => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
          try {
              const userData = JSON.parse(storedUser);
              setUser(userData);
              setToken(userData.token); 
          } catch (error) {
              console.error('Error parsing user data from localStorage:', error);
          }
      }
  }, []);


  const handleLogout = () => {
      localStorage.removeItem('user');
      setUser(null);
      setToken('');
  };

  return (
    <div>
      <div className="fixed top-0 z-50 w-full bg-white shadow-md">
        <div className='container mx-auto'>
          <div className="mx-auto flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <a href='/'>
                <img src={Traveloka} alt="Traveloka" className='h-28 w-40 py-2 px-2' />
              </a>
            </div>

            <div className='flex justify-between items-center'>
              <Laugues />
              <a className='cursor-pointer hover:bg-slate-100 rounded-md py-2 px-2 text-sm font-medium'>Khuyến Mãi</a>
              <Suppor />
              <a className='cursor-pointer hover:bg-slate-100 rounded-md py-2 px-2 text-sm font-medium'>Hợp tác với chúng tôi</a>
              <a className='cursor-pointer hover:bg-slate-100 rounded-md py-2 px-2 text-sm font-medium'>Đã lưu</a>
              <a className='cursor-pointer hover:bg-slate-100 rounded-md py-2 px-2 text-sm font-medium'>Đặt chỗ của tôi</a>
              {user ? <UserInfo /> : <Login />}
              {/* <Register/> */}
            </div>
          </div>
          <div className="flex space-x-4 mt-2">
            <a className="cursor-pointer hover:bg-slate-100 text-slate-500 font-bold py-2 px-2 rounded">Khách sạn</a>
            <a className="cursor-pointer hover:bg-slate-100 text-slate-500 font-bold py-2 px-2 rounded">Vé máy bay</a>
            <a className="cursor-pointer hover:bg-slate-100 text-slate-500 font-bold py-2 px-2 rounded">Vé xe khách</a>
            <a className="cursor-pointer hover:bg-slate-100 text-slate-500 font-bold py-2 px-2 rounded">Đưa đón sân bay</a>
            <a className="cursor-pointer hover:bg-slate-100 text-slate-500 font-bold py-2 px-2 rounded">Cho thuê xe</a>
            <a className="cursor-pointer hover:bg-slate-100 text-slate-500 font-bold py-2 px-2 rounded">Hoạt động & Vui chơi</a>
            <More />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Laptop;
