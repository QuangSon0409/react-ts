import { ICate } from "../interface/category";
import instance from "./instance";

export const getAllCategory = () => {
  return instance.get("/categories");
};
export const getCategory = (id: string | number) => {
  return instance.get("/categories/" + id);
};
export const createCate = (category: ICate) => {
  return instance.post("/categories/", category);
};
export const deleteCate = (id: string | number) => {
  return instance.delete("/categories/" + id);
};
export const updateCate = (category: ICate) => {
  return instance.patch("/categories/" + category._id, category);
};
