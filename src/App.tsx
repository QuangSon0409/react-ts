import { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { addProduct, deleteProduct, getProduct } from "./api/product";

import Signin from "./pages/Client/Signin";
import Signup from "./pages/Client/Signup";
import UserLayout from "./components/layout/use";
import axios from "axios";
import Homepage from "./pages/Client/homepage";
import ProductDetail from "./pages/Client/ProductDetail";
import PrivateRouter from "./components/PrivateRouter";
import AdminLayout from "./pages/Admin/AdminLayout";
import Dashboard from "./pages/Admin/Dashbroad";
import ProductShow from "./pages/Admin/ProductShow";
type IProduct = {
  id: number;
  name: string;
  price: number;
  desc: string;
};
function App() {
  const [product, setProduct] = useState([]);
  const fetchProduct = async () => {
    const { data } = await getProduct();
    console.log(data);

    setProduct(data);
  };
  const oneHandleRemove = (id: number | string) => {
    deleteProduct(id).then(() => {
      setProduct(product.filter((item: IProduct) => item.id !== id));
    });
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Homepage />} />
          <Route path="product/:id" element={<ProductDetail />} />
        </Route>
        <Route
          path="/admin"
          element={
            <PrivateRouter>
              <AdminLayout />
            </PrivateRouter>
          }
        >
          <Route index element={<Dashboard />} />
          <Route
            path="products"
            element={
              <ProductShow products={product} onRemove={oneHandleRemove} />
            }
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
