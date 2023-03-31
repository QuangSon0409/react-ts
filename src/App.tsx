import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { addProduct, deleteProduct, getProduct } from "./api/product";
import { IProduct } from "./interface/product";
import ProductAdd from "./pages/ProductAdd";

function App() {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    async function fetchProduct() {
      const { data } = await getProduct();
      console.log(data);
      setProduct(data);
    }
    fetchProduct();
  }, []);
  const removeProduct = (id: string | number) => {
    console.log(id);
    deleteProduct(id);
  };
  const onHandleAdd = async (data: IProduct) => {
    const product = await addProduct(data);
    console.log(product);
  };
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={products.map((item: IProduct, index) => (
            <div key={index}>
              {item.name}{" "}
              <button onClick={() => removeProduct(item._id)}>Xóa</button>
            </div>
          ))}
        />
        <Route
          path="/add"
          element={<ProductAdd onAdd={onHandleAdd}></ProductAdd>}
        />
        <Route path="/product" element={"Trang Sản Phẩm"} />
        <Route path="/signin" element={"Đăng Nhập"} />
        <Route path="/signup" element={"Đăng ký"} />
      </Routes>
    </div>
  );
}

export default App;
