import React, { useEffect, useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const GoogleSignIn = () => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const userData = JSON.parse(storedUser);
            setUser(userData);
            setToken(userData.token);
        }
    }, []);

    const handleLoginSuccess = async (response) => {
        try {
            const { data } = await axios.post('http://localhost:5000/api/google-login', { tokenId: response.credential });
            localStorage.setItem('user', JSON.stringify(data));
            setUser(data);
            setToken(data.token);
             window.location.reload(); // Bỏ reload trang
            setError('');
            alert('Đăng nhập thành công!');
        } catch (error) {
            console.error('Đăng nhập thất bại:', error);
            setError('Đăng nhập thất bại! Vui lòng thử lại.');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
        setToken('');
    };

    return (
        <div className="flex items-center justify-center text-[#0194f3] ">
            {!user ? (
                <GoogleOAuthProvider clientId="655975498553-f4gr2g8qjss68qa9l71i78msg8fpsik7.apps.googleusercontent.com">
                    <GoogleLogin
                        onSuccess={handleLoginSuccess}
                        onError={() => setError('Đăng nhập thất bại!')}
                        render={({ onClick }) => (
                            <button
                                onClick={onClick}
                                className="flex w-full items-center justify-center px-4 py-2 bg-white cursor-pointer text-[#0194f3] rounded-md border border-[#0194f3] font-bold"
                            >
                                Đăng nhập bằng Google
                            </button>
                        )}
                    />
                </GoogleOAuthProvider>
            ) : (
                <div>
                    {/* <h1>Welcome, {user.name}!</h1>
                    <button onClick={handleLogout}>Logout</button> */}
                </div>
            )}
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
};

export default GoogleSignIn;
