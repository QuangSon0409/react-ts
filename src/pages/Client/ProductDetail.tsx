import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IProduct from "../../interface/product";

import { Interweave } from "interweave";
import axios from "axios";
import { getById } from "../../api/product";

const ProductDetail = () => {
  const [product, setProduct] = useState<IProduct>({} as IProduct);
  const { id } = useParams();
  const fetchProduct = async () => {
    if (id) {
      const { data } = await getById(id);
      setProduct(data);
      console.log(data);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <>
      <div className="border-b-2">
        <ul className="list-none h-8 flex items-center justify-start mx-auto max-w-[1024px] border-[#ccc] w-full text-sm cursor-pointer text-gray-400">
          <li className="mr-6">
            <a href="">Trang chủ</a>
          </li>
          <li className="mr-6">
            <a href="">Điện thoại</a>
          </li>
          <li className="mr-6">
            <a href="">SamSung</a>
          </li>
          <li className="mr-6">
            <a href="">{product.name}</a>
          </li>
        </ul>
      </div>
      <h2 className="ml-[250px] text-lg ml-24 py-4 font-semibold text-gray-800">
        {product.name}
      </h2>
      <hr className="" />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="lg:flex  lg:justify-between">
          <div className="flex-1 min-w-0">
            <img
              className=" w-[358px] object-cover lg:h-full lg:w-96"
              src={product.image}
              alt="Product Image"
            />
          </div>
          <div className=" flex lg:mt-0 lg:ml-10 ">
            <div className="max-w-2xl flex flex-col justify-between">
              <div className="mt-4">
                <span className="mt-1 text-2xl  font-semibold text-red-500">
                  {product.originalPrice}đ
                </span>{" "}
                <span className="mt-1 ml-1 text-sm font-semibold text-gray-500">
                  {product.price}đ
                </span>
                <p className=" text-sm font-sans text-black-600 mt-4">
                  Mô tả ngắn: Trước khi mua bất kỳ chiếc điện thoại nào, người
                  dùng cũng sẽ quan tâm đến thiết kế sản phẩm trước. Với phiên
                  bản A73, Samsung đã tạo nên một chiếc smartphone với vẻ ngoài
                  mang đến cảm giác sang trọng và tinh tế.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 ml-24 flex">
          <div className="flex -mx-2">
            <div className="w-[70px] h-[50] p-[15px]  border-solid rounded-lg border-2 border-[#D1D5DB] mx-[4px]">
              <img
                className="ml-[5px] mb-[2px] object-cover cursor-pointer"
                src="/start.png"
                alt="Thumbnail 1"
              />
              <img
                className="object-cover cursor-pointer"
                src="/tinhnang.png"
                alt="Thumbnail 1"
              />
            </div>
            <div className="w-[70px] h-[50] p-[5px] border-solid rounded-lg border-2 border-[#D1D5DB] mx-[4px]">
              <img
                className=" object-cover cursor-pointer"
                src="../phone.png"
                alt="Thumbnail 1"
              />
            </div>
          </div>
          <div className="mt-auto flex ml-[250px]">
            <button className="bg-[#FF3945]  text-[#FFFFFF] w-[240px] h-12 rounded-md hover:bg-white hover:border-[#FF3945] hover:text-[#FF3945] hover:border-2 ease-linear transition-all">
              <a href="/gio-hang">Mua ngay</a>
            </button>
            <div className="w-12 h-12 border-red-600 border-2 ml-5 rounded-md flex justify-center items-center cursor-pointer hover:bg-white group">
              <a href="/gio-hang">
                <img className="w-5 h-5" src="/cart.png" alt="" />
              </a>
            </div>
            <span className="w-16 text-sm ml-5 cursor-pointer">
              <a href="/gio-hang">Thêm vào giỏ hàng</a>
            </span>
          </div>
        </div>
        <div className="flex flex-col mt-10 bg-gray-100 p-4">
          <h1 className="text-center text-red-500 text-lg font-bold mb-4">
            ĐẶC ĐIỂM NỔI BẬT
          </h1>
          <ul>
            <li className="text-sm">
              Camera chất lượng, bắt trọn từng khoảng khắc - Cụm 4 camera với
              cảm biến chính lên đến 108 MP
            </li>
            <li className="text-sm">
              Thưởng thức không gian giải trí cực đỉnh - Màn hình lớn 6.7 inch,
              độ phân giải Full HD+, 120Hz mượt mà
            </li>
            <li className="text-sm">
              Cấu hình Galaxy A73 5G được nâng cấp mạnh với chip Snapdragon
              778G, RAM lên đến 8 GB
            </li>
            <li className="text-sm">
              Chiến game thoải mái không lo gián đoạn - Viên pin lớn 5000 mAh,
              hỗ trợ sạc nhanh 25 W
            </li>
          </ul>
        </div>
        <div className="mt-[20px]">
          <Interweave content={product.description} />
        </div>
        <button className="mt-[40px] ml-[400px] border-solid rounded-full border-2 border-black px-24 py-2">
          Xem Thêm
        </button>
      </div>
    </>
  );
};

export default ProductDetail;
