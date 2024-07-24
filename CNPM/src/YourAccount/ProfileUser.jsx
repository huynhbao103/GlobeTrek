import React from 'react';
import User from "../assets/User.png";
function ProfileUser() {
  const requestNotificationPermission = () => {
    // Kiểm tra nếu trình duyệt hỗ trợ Notifications API
    if (!("Notification" in window)) {
      alert("Trình duyệt của bạn không hỗ trợ thông báo.");
      return;
    }

    // Yêu cầu quyền nếu chưa được cấp
    if (Notification.permission === "granted") {
      showNotification();
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          showNotification();
        }
      });
    }
  };

  const showNotification = () => {
    const notification = new Notification("Thông báo từ trang web", {
      body: "Đây là nội dung thông báo.",
      icon: {User} // Thay thế bằng đường dẫn tới icon nếu có
    });

    notification.onclick = () => {
      window.open("http://localhost:5173"); // Thay thế bằng URL của trang web của bạn
    };
  };

  return (
    <div>
      <div className="bg-[rgba(174,249,231,0.5)] rounded-lg mb-6 p-4">
        <p className=''>
          Bạn muốn nhận thông báo đăng nhập mới và các hoạt động khác của
          <span
            className="font-bold text-[#4CA771] cursor-pointer"
            onClick={requestNotificationPermission}
          >
            {" "}Cho phép gửi thông báo trên máy tính?
          </span>
        </p>
      </div>
      <div className='bg-white rounded-md p-8 mt-4'>
        <h2 className="text-xl font-semibold mb-2">Dữ liệu cá nhân</h2>
        <hr className="mb-4" />
        <label className="block font-bold mb-2">Tên đầy đủ</label>
        <input type="text" placeholder="Huỳnh Quốc Bảo" className="w-full p-2 mb-4 border border-gray-300 rounded-md" />

        <label className="block font-bold mb-2">Tên trong hồ sơ</label>
        <input type="text" placeholder="Tên trong hồ sơ được rút ngắn từ họ tên của bạn" className="w-full p-2 mb-4 border border-gray-300 rounded-md" />

        <div className="flex justify-between mb-4">
          <div className="w-1/3 pr-2">
            <label className="block font-bold mb-2">Giới tính</label>
            <select className="w-full p-2 border border-gray-300 rounded-md">
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div className="w-2/3 pl-2">
            <label className="block font-bold mb-2">Ngày sinh</label>
            <div className="flex justify-between">
              <select className="w-1/3 p-2 border border-gray-300 rounded-md mr-2">
                <option>Ngày</option>
                {[...Array(31)].map((_, i) => (
                  <option key={i + 1}>{i + 1}</option>
                ))}
              </select>
              <select className="w-1/3 p-2 border border-gray-300 rounded-md mr-2">
                <option>Tháng</option>
                {['Tháng Một', 'Tháng Hai', 'Tháng Ba', 'Tháng Tư', 'Tháng Năm', 'Tháng Sáu', 'Tháng Bảy', 'Tháng Tám', 'Tháng Chín', 'Tháng Mười', 'Tháng Mười Một', 'Tháng Mười Hai'].map((month, index) => (
                  <option key={index}>{month}</option>
                ))}
              </select>
              <select className="w-1/3 p-2 border border-gray-300 rounded-md">
                <option>Năm</option>
                {[...Array(101)].map((_, i) => (
                  <option key={2000 + i}>{2000 + i}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <label className="block font-bold mb-2">Thành phố bạn đang ở</label>
        <input type="text" placeholder="Thành phố bạn đang ở" className="w-full p-2 mb-4 border border-gray-300 rounded-md" />

        <div className="flex justify-end gap-4">
          <button className="bg-gray-400 text-white py-2 px-4 rounded-md hover:bg-gray-300">Hủy</button>
          <button className="bg-[#4CA771] hover:bg-[#00875A] text-white py-2 px-4 rounded-md">Lưu</button>
        </div>
      </div>
    </div>
  );
}

export default ProfileUser;
