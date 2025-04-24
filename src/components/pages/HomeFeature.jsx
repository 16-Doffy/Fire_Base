import React from "react";

const HomeFeature = () => {
  return (
    <>
      <div className="row">
        {/* Cột trái */}
        <div className="flex-1">
          <h1 className="text-3xl p-5">Tổng hợp blog mới nhất</h1>
          <div className="flex flex-wrap gap-5">
            {["/img/m1.png", "/img/m2.png", "/img/m3.jpg", "/img/m4.png"].map(
              (src, index) => (
                <img
                  key={index}
                  src={src}
                  alt=""
                  className="w-100 m-auto h--50 object-cover rounded-xl"
                />
              )
            )}
          </div>
        </div>

        {/* Cột phải */}
        <div className="flex-1">
          <h1 className="text-3xl p-5">Bài viết nổi bật</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                src: "/img/r1.jpg",
                title: "Tấn công mã độc tống tiền gia tăng, Thủ tướng",
              },
              {
                src: "/img/r2.jpg",
                title: "Chuyên gia cảnh báo xu hướng hacker mới",
              },
              {
                src: "/img/r3.jpg",
                title: "Doanh nghiệp cần tăng cường bảo mật dữ liệu",
              },
              {
                src: "/img/r4.jpg",
                title: "Hệ thống công cộng trở thành mục tiêu",
              },
              {
                src: "/img/r5.jpg",
                title: "Phòng chống mã độc: vai trò của AI",
              },
              {
                src: "/img/r6.jpg",
                title: "Ngành an ninh mạng cần nhân lực chất lượng cao",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative w-full h-48 overflow-hidden rounded-xl"
              >
                <img
                  src={item.src}
                  alt=""
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute bottom-20 left-0 right-0 bg-opacity-60 font-bold text-black text-5xl  p-2 text-center">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFeature;
