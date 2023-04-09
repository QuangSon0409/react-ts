import { useEffect, useState } from "react";
import Product from "../../components/product";
import IProduct from "../../interface/product";
import axios from "axios";
import { getProduct } from "../../api/product";
import { Pagination } from "antd";
// import { getAllProducts } from "../../api/product";

const Homepage = () => {
  const [products, setProduct] = useState<IProduct[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const fetchProduct = async () => {
    const { data } = await getProduct();
    console.log(data);

    setProduct(data);
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const indexOfLastProduct = currentPage * 2;
  const indexOfFirstProduct = indexOfLastProduct - 2;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  return (
    <>
      <h1 className="uppercase mt-6 mb-3 pl-5">Điện Thoại Nổi Bật</h1>
      <div className="grid grid-cols-4 gap-5">
        {currentProducts.map((product) => (
          <Product key={product._id} data={product} />
        ))}
      </div>
      <div className="flex  justify-center ">
        <Pagination
          current={currentPage}
          onChange={handlePageChange}
          pageSize={2}
          total={products.length}
        />
      </div>
    </>
  );
};

export default Homepage;
