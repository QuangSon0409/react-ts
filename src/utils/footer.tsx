import React from "react";

type Props = {};

const Footer = () => {
  return (
    <footer className="mt-[131px]">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4 mx-[100px]">
          <div>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-1">
                <a
                  href="#"
                  className="text-sm  hover:underline hover:text-red-500"
                >
                  Tìm cửa hàng
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="text-xs hover:underline hover:text-red-500"
                >
                  Tìm cửa hàng gần nhất
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="text-xs hover:underline hover:text-red-500"
                >
                  Mua hàng từ xa
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="text-xs hover:underline hover:text-red-500 "
                >
                  Gặp trực tiếp cửa hàng gần nhất (Zalo hoặc gọi điện){" "}
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#"
                  className="text-xs hover:underline hover:text-red-500 "
                >
                  Phương thức thanh toán{" "}
                </a>
              </li>
            </ul>
            <div className="grid grid-cols-4 mb-4">
              <img src="../../footer/1.png" alt="" />
              <img src="../../footer/2.png" alt="" />
              <img src="../../footer/3.png" alt="" />
              <img src="../../footer/4.png" alt="" />
              <img className="mt-4" src="../../footer/5.png" alt="" />
            </div>
          </div>
          <div>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-1">
                <a
                  href="#"
                  className="text-xs hover:underline hover:text-red-500"
                >
                  Gọi mua hàng: 1800.2044 (8h00 - 22h00)
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="text-xs hover:underline hover:text-red-500"
                >
                  Gọi khiếu nại: 1800.2063 (8h00 - 21h30)
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#"
                  className="text-xs hover:underline hover:text-red-500"
                >
                  Gọi bảo hành: 1800.2064 (8h00 - 21h00)
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="text-base hover:underline hover:text-red-500"
                >
                  {" "}
                  Đối tác dịch vụ bảo hành
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="#"
                  className="text-xs hover:underline hover:text-red-500"
                >
                  {" "}
                  Điện Thoại - Máy tính
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="text-lg hover:underline hover:text-red-500"
                >
                  {" "}
                  Trung tâm bảo hành uỷ quyền Apple
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="text-lg hover:underline hover:text-red-500"
                >
                  <img src="../../footer/dienthoaivui.png" alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-1">
                <a
                  href="#"
                  className="text-xs hover:underline hover:text-red-500"
                >
                  Mua hàng và thanh toán Online
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="text-xs hover:underline hover:text-red-500"
                >
                  Mua hàng trả góp Online
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="text-xs hover:underline hover:text-red-500"
                >
                  Tra thông tin đơn hàng
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="text-xs hover:underline hover:text-red-500"
                >
                  Tra điểm Smember
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="text-xs hover:underline hover:text-red-500"
                >
                  Tra thông tin bảo hành
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="font-extrabold text-xs hover:underline hover:text-red-500"
                >
                  Tra cứu hoá đơn VAT điện tử
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="text-xs hover:underline hover:text-red-500"
                >
                  Trung tâm bảo hành chính hãng
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="text-xs hover:underline hover:text-red-500"
                >
                  Quy định về việc sao lưu dữ liệu
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="text-xs hover:underline hover:text-red-500"
                >
                  Dịch vụ bảo hành điện thoại
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-1">
                <a
                  href="#"
                  className="text-xs hover:underline hover:text-red-500"
                >
                  Quy chế hoạt động
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="text-xs hover:underline hover:text-red-500"
                >
                  Chính sách Bảo hành
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="text-xs hover:underline hover:text-red-500"
                >
                  Liên hệ hợp tác kinh doanh
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="text-xs hover:underline hover:text-red-500"
                >
                  Khách hàng doanh nghiệp (B2B)
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="text-xs hover:underline hover:text-red-500"
                >
                  Ưu đãi thanh toán
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="text-xs hover:underline hover:text-red-500"
                >
                  Tuyển dụng
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#F8F8F8]">
        <div className="grid grid-cols-3 mx-auto w-full max-w-screen-xl mt-[74px]">
          <div>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-1">
                <a
                  href="#"
                  className="text-[10px] hover:underline hover:text-red-500"
                >
                  Điện thoại iPhone 13-Điện thoại iPhone 12-Điện thoại iPhone 11
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="text-[10px] hover:underline hover:text-red-500"
                >
                  Điện thoại iPhone 13 Pro Max - Điện thoại iPhone 11 Pro Max
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="text-[10px] hover:underline hover:text-red-500"
                >
                  iPhone cũ giá rẻ-iPhone 13 cũ-iPhone 12 cũ-iPhone 11 cũ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-1">
                <a
                  href="#"
                  className="text-[10px] hover:underline hover:text-red-500"
                >
                  Điện thoại iPhone-Điện thoại Samsung-Điện thoại Samsung A
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="text-[10px] hover:underline hover:text-red-500"
                >
                  Điện thoại OPPO-Điện thoại Xiaomi-Điện thoại Vivo-Điện thoại
                  Nokia
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="text-[10px] hover:underline hover:text-red-500"
                >
                  Samsung Fold 3-Samsung S22-Samsung A73Samsung A53
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-1">
                <a
                  href="#"
                  className="text-[10px] hover:underline hover:text-red-500"
                >
                  Laptop-Laptop HP-Laptop Dell-Laptop Acer
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="text-[10px] hover:underline hover:text-red-500"
                >
                  Microsoft Surface-Laptop Lenovo-Laptop Asus
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="text-[10px] hover:underline hover:text-red-500"
                >
                  Máy tính để bàn-Màn hình máy tính-Camera-Camera hành trình
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className=" mt-[15px] pb-[58px] text-[10px] text-center text-gray-500">
          Công ty TNHH Thương mại và dịch vụ kỹ thuật DIỆU PHÚC - GPĐKKD:
          0316172372 do sở KH & ĐT TP. HCM cấp ngày 02/03/2020. Địa chỉ: 350-352
          Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh, Việt Nam.
          Điện thoại: 028.7108.9666.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
