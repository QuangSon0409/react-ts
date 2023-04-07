import axios from "axios";
// import { IProduct } from "../interface/product";
import instance from "./instance";
type IProduct = {
  _id?: number | string;
  name: string;
  price: number;
};
export const getProduct = () => {
  return instance.get("/products");
};
export const addProduct = (product: any) => {
  return instance.post("/products", product);
};

export const getById = (id: string | number) => {
  return instance.get(`/products/${id}`);
};
export const deleteProduct = (id: string | number) => {
  return instance.delete(`/products/${id}`);
};

export const updateProduct = (product: IProduct) => {
  return instance.put(`products/${product._id}`, product);
};
