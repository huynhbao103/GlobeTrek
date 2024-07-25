import React from "react";

const tourInfo = {
  giaVe: "Giá từ 722.850 VND",
  ngayKhaDung: "18 Jul 2024",
  thoiGian: "8 Hours 30 Minutes",
  diemDonKhach: "143 Trần Hưng Đạo, KP 7, TT Dương Đông, H.Phú Quốc, tỉnh Kiên Giang, Vietnam",
};

function TourInfo() {
  return (
    <div className="w-full ">
    <div className=" w-[80%] mx-auto pb-6">
      <h1 className="text-xl font-bold mb-4">Thông tin chung</h1>
      <div className="space-y-4">
        {Object.entries(tourInfo).map(([key, value], index) => (
          <div key={index} className="flex max-w-screen-md justify-between ">
            <span className="font-semibold">
              {key === "giaVe"
                ? "Giá vé"
                : key === "ngayKhaDung"
                ? "Ngày khả dụng"
                : key === "thoiGian"
                ? "Thời gian"
                : key === "diemDonKhach"
                ? "Điểm đón khách"
                : ""}
            </span>
            <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default TourInfo;
