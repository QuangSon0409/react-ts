import { Link } from "react-router-dom";
import IProduct from "../interface/product";

type Props = {
  data: IProduct;
};
const Product = ({ data }: Props) => {
  return (
    <Link to={`/product/${data.id}`} className="block">
      <img
        alt="Art"
        src={data.images?.[0].base_url}
        className=" object-cover "
      />

      <h3 className="mt-4 text-sm font-semibold text-gray-900 sm:text-xl">
        {data.name}
      </h3>
      <p className="mt-2 text-[12px] flex">
        <p className="text-red-600 font-bold">
          {data.original_price} ₫
          <span className="text-gray-700 opacity-50 ml-2">{data.price} ₫</span>
        </p>
      </p>
      <p className="mt-2 text-[12px] flex">
        <p className="flex">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </p>
        <span className="text-gray-700 opacity-50 ml-2">10 đánh giá</span>
      </p>
    </Link>
  );
};

export default Product;
