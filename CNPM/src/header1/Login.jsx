import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import GoogleSignIn from "./GoogleSignIn";
import LoginFB from './LoginFB';

const registeredUsers = [
  { email: "user@example.com", password: "password123" },
  { email: "0987654321", password: "password123" },
];

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  const [isRegistered, setIsRegistered] = useState(null);
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const closeModal = () => {
    setShowModal(false);
    setIsRegistered(null);
    setEmailOrPhone("");
    setShowPasswordInput(false);
    setPassword("");
    setConfirmPassword("");
  };

  const handleContinue = (e) => {
    e.preventDefault();
    const isUserRegistered = registeredUsers.some(
      (user) => user.email === emailOrPhone
    );
    setIsRegistered(isUserRegistered);
    setShowPasswordInput(true);
  };

  const handleChange = (e) => {
    setEmailOrPhone(e.target.value);
    setIsRegistered(null);
    setShowPasswordInput(false);
    setPassword("");
    setConfirmPassword("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = registeredUsers.find((user) => user.email === emailOrPhone);
    if (user && user.password === password) {
      localStorage.setItem("user", JSON.stringify({ email: emailOrPhone }));
      setUser({ email: emailOrPhone });
      setIsLoggedIn(true);
      alert("Đăng nhập thành công!");
      closeModal();
    } else {
      alert("Email hoặc mật khẩu không hợp lệ!");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Mật khẩu và xác nhận mật khẩu không khớp!");
      return;
    }
    registeredUsers.push({ email: emailOrPhone, password });
    localStorage.setItem("user", JSON.stringify({ email: emailOrPhone }));
    setUser({ email: emailOrPhone });
    setIsLoggedIn(true);
    alert("Đăng ký thành công!");
    closeModal();
  };

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
    setShowLogoutModal(false);
  };

  const cancelLogout = () => {
    setShowLogoutModal(false);
  };

  return (
    <>
      <div className="flex items-center justify-center pr-2">
        {!isLoggedIn ? (
          <button
            className="
              bg-white text-black
              md:px-6 md:py-2
              px-4 py-1
              rounded shadow hover:bg-slate-100
              sm:text-sm font-medium
              border border-[#4CA771]
              md:text-base text-xs
            "
            type="button"
            onClick={() => setShowModal(true)}
          >
            <FontAwesomeIcon icon={faUser} style={{ color: "#4CA771" }} /> Đăng Nhập / Đăng ký
          </button>
        ) : (
          <div className="flex items-center">
            <p className="text-black text-sm font-medium mr-4">
              Hello, {user.name || user.email}
            </p>
            <button
              className="bg-white text-black px-6 py-2 rounded shadow hover:bg-slate-100 text-sm font-medium border border-[#4CA771]"
              type="button"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div
            className="fixed inset-0 w-full h-full bg-black opacity-40"
            onClick={closeModal}
          />
          <div className="flex items-center justify-center min-h-screen px-4 py-8">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md z-10 relative transition-transform transform">
              <button
                className="absolute top-2 right-2 bg-transparent text-gray-500 hover:text-black"
                onClick={closeModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <h2 className="text-2xl font-bold mb-3">Đăng nhập / Đăng ký</h2>
              <form
                onSubmit={
                  isRegistered === null
                    ? handleContinue
                    : isRegistered
                    ? handleLogin
                    : handleRegister
                }
              >
                <p className="p-2 text-gray-700">Email/Số điện thoại di động</p>
                <input
                  type="text"
                  placeholder="Ví dụ: +84901234567 hoặc user@example.com"
                  className="w-full p-2 mb-4 border border-gray-500 rounded-md focus:border-blue-500"
                  value={emailOrPhone}
                  onChange={handleChange}
                />
                {isRegistered !== null && (
                  <p
                    className={`mb-2 ${
                      isRegistered ? "text-[#00875A]" : "text-[#FF5E1F]"
                    }`}
                  >
                    {isRegistered
                      ? "Email này đã được kết nối với tài khoản. Bạn có thể chỉ cần nhập mật khẩu của bạn dưới đây để đăng nhập."
                      : "Email này chưa được đăng ký. Vui lòng nhập mật khẩu để đăng ký."}
                  </p>
                )}
                {showPasswordInput && (
                  <>
                    <input
                      type="password"
                      placeholder="Mật khẩu"
                      className="w-full p-2 mb-4 border border-gray-500 rounded-md focus:border-blue-500"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                    {!isRegistered && (
                      <input
                        type="password"
                        placeholder="Xác nhận mật khẩu"
                        className="w-full p-2 mb-4 border border-gray-500 rounded-md focus:border-blue-500"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        autoComplete="new-password"
                      />
                    )}
                    {isRegistered && (
                      <a
                        href="#"
                        className="text-blue-500 font-bold text-center flex justify-center text-base mb-4"
                      >
                        Quên mật khẩu?
                      </a>
                    )}
                  </>
                )}
                <button
                  type="submit"
                  className={`w-full p-2 mb-4 ${
                    isRegistered === null
                      ? "bg-gray-100 text-slate-300 cursor-auto"
                      : isRegistered
                      ? "bg-blue-500 text-white"
                      : "bg-[#FF5E1F] text-white"
                  } rounded-md font-bold cursor-pointer`}
                  disabled={!emailOrPhone}
                >
                  {isRegistered === null
                    ? "Tiếp tục"
                    : isRegistered
                    ? "Đăng nhập"
                    : "Đăng ký"}
                </button>
              </form>
              <div className="bg-Login-register">
                <div className="flex justify-center items-center mb-4">
                  <hr className="border border-gray-300 w-20" />
                  <div className="px-1 text-sm">hoặc đăng nhập/đăng ký với</div>
                  <hr className="border border-gray-300 w-20" />
                </div>
                <div className="flex flex-col gap-2 mb-6">
                  <GoogleSignIn />
                  <LoginFB />
                </div>
                <div className="text-sm text-gray-600 text-center">
                  Bằng cách đăng ký, bạn đồng ý với{" "}
                  <a href="#" className="text-blue-500 font-bold">
                    Điều khoản & Điều kiện
                  </a>{" "}
                  của chúng tôi và bạn đã đọc{" "}
                  <a href="#" className="text-blue-500 font-bold">
                    Chính Sách Quyền Riêng Tư
                  </a>{" "}
                  của chúng tôi.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showLogoutModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div
            className="fixed inset-0 w-full h-full bg-black opacity-40"
            onClick={cancelLogout}
          />
          <div className="flex items-center justify-center min-h-screen px-4 py-8">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md z-10 relative transition-transform transform">
              <h2 className="text-2xl font-bold mb-3">Đang đăng xuất</h2>
              <p className="mb-4">
                Ôi không! Bạn sẽ bỏ lỡ rất nhiều điều khi đăng nhập: Điểm thưởng Traveloka, Pasenger Quick Pick, Thông báo giá vé, và những quyền lợi khác chỉ dành cho thành viên. Bạn có chắc vẫn muốn đăng xuất?
              </p>
              <div className="flex justify-end">
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
                  onClick={cancelLogout}
                >
                  Không
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                  onClick={confirmLogout}
                >
                  Có
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}