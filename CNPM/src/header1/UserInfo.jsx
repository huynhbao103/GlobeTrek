import React from 'react';

const UserInfo = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
        return <p>Chưa có người dùng đăng nhập</p>;
    }

    return (
        <div className='flex items-center'>
            <h2 className='cursor-pointer hover:bg-slate-100 rounded-md py-2 px-2 text-sm font-medium '>{user.name||user.email}</h2>
            <button className='bg-white text-black px-6 py-2 rounded shadow hover:bg-slate-100 text-sm font-medium border border-[#4CA771]' onClick={() => {
                localStorage.removeItem('user');
                window.location.reload();
            }}>Logout</button>
        </div>
    );
};

export default UserInfo;
