import { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  addProduct,
  deleteProduct,
  getProduct,
  updateProduct,
} from "./api/product";

import Signin from "./pages/Client/Signin";
import Signup from "./pages/Client/Signup";
import UserLayout from "./components/layout/use";
import axios from "axios";
import Homepage from "./pages/Client/homepage";
import ProductDetail from "./pages/Client/ProductDetail";
import PrivateRouter from "./components/PrivateRouter";
import AdminLayout from "./pages/Admin/AdminLayout";
import Dashboard from "./pages/Admin/Dashbroad";
import ProductShow from "./pages/Admin/products/ProductShow";
import ProductAdd from "./pages/Admin/products/ProductAdd";
import ProductEdit from "./pages/Admin/products/ProductEdit";
import CategoryShow from "./pages/Admin/categories/CategoryShow";
import {
  createCate,
  deleteCate,
  getAllCategory,
  updateCate,
} from "./api/category";
import CategoryAdd from "./pages/Admin/categories/CategoryAdd";
import CategoryEdit from "./pages/Admin/categories/CategoryEdit";
type IProduct = {
  _id?: number | string;
  name: string;
  price: number;
};
interface ICate {
  _id?: string | number;
  name: string;
}

function App() {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const fetchProduct = async () => {
    const { data } = await getProduct();
    console.log(data);

    setProduct(data);
  };
  const fetchCategory = async () => {
    const { data } = await getAllCategory();
    console.log(data);

    setCategory(data);
  };
  useEffect(() => {
    fetchProduct();
    fetchCategory();
  }, []);
  const oneHandleRemove = (id: number | string) => {
    deleteProduct(id).then(() => {
      setProduct(product.filter((item: IProduct) => item._id !== id));
    });
  };
  const oneHandleAdd = async (products: IProduct) => {
    const {
      data: { data },
    } = await addProduct(products);
    console.log(data);
    setProduct(data);
  };
  const onHandleEdit = async (products: IProduct) => {
    const response = await updateProduct(products);
    console.log("response", response.data.data);
    setProduct(response.data.data);
  };
  /** Categories */
  const oneHandleRemoveCate = (id: number | string) => {
    deleteCate(id).then(() => {
      setCategory(category.filter((item: ICate) => item._id !== id));
    });
  };
  const oneHandleAddCate = async (cate: ICate) => {
    const {
      data: { data },
    } = await createCate(cate);
    console.log(data);
    setCategory(data);
  };
  const onHandleEditCate = async (cate: ICate) => {
    const response = await updateCate(cate);
    console.log("response", response.data.data);
    setProduct(response.data.data);
  };

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
          <Route path="products">
            <Route
              index
              element={
                <ProductShow products={product} onRemove={oneHandleRemove} />
              }
            />
            <Route
              path="add"
              element={<ProductAdd onAdd={oneHandleAdd} category={category} />}
            />
            <Route
              path=":id/update"
              element={
                <ProductEdit onUpdate={onHandleEdit} category={category} />
              }
            />
          </Route>
          <Route path="categories">
            <Route
              index
              element={
                <CategoryShow
                  categories={category}
                  onRemove={oneHandleRemoveCate}
                />
              }
            />
            <Route
              path="add"
              element={<CategoryAdd onAdd={oneHandleAddCate} />}
            />
            <Route
              path=":id/update"
              element={<CategoryEdit onUpdate={onHandleEditCate} />}
            />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
