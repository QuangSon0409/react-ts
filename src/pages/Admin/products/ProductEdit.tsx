import { SubmitHandler, useForm } from "react-hook-form";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getById } from "../../../api/product";
import { ICate } from "../../../interface/category";
type IProduct = {
  _id?: string | number;
  name: string;
  price: number;
};
type Props = {
  onUpdate: (product: IProduct) => void;
  category: ICate[];
};

const ProductEdit = ({ onUpdate, category }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { id } = useParams();
  const navigate = useNavigate();
  const getProduct = async () => {
    const data = await getById(id);
    reset(data.data);
  };
  useEffect(() => {
    getProduct();
  }, []);
  const onSubmit = (data: any) => {
    console.log(data);

    onUpdate(data);
    navigate("/admin/products");
  };
  return (
    <div>
      <h2 className="text-center text-black-500 text-[20px]">Product Edit</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <label className="mb-3 block text-base font-medium text-[#07074D]">
            First Name
          </label>
          <input
            className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            type="text"
            placeholder="Name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="mb-5">
          <label className="mb-3 block text-base font-medium text-[#07074D]">
            Price
          </label>
          <input
            className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            type="number"
            placeholder="Price"
            {...register("price", { required: true })}
          />
          {errors.price && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="mb-5">
          <label className="mb-3 block text-base font-medium text-[#07074D]">
            Original_Price
          </label>
          <input
            className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            type="number"
            placeholder="Original_Price"
            {...register("originalPrice", { required: true })}
          />
          {errors.originalPrice && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="mb-5">
          <label className="mb-3 block text-base font-medium text-[#07074D]">
            Description
          </label>
          <input
            className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            type="text"
            placeholder="Description"
            {...register("description", { required: true })}
          />
          {errors.description && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="mb-5">
          <label className="mb-3 block text-base font-medium text-[#07074D]">
            Image
          </label>
          <input
            className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            type="text"
            placeholder="Image"
            {...register("image", { required: true })}
          />
          {errors.image && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <div className="mb-5">
          <label className="mb-3 block text-base font-medium text-[#07074D]">
            CategoryId
          </label>
          <select
            {...register("categoryId")}
            className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          >
            {category.map((item) => {
              return (
                <option key={item._id} value={item._id}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
        <button className="rounded bg-[#14dabc] mt-5 text-white px-4 py-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductEdit;
