import { SubmitHandler, useForm } from "react-hook-form";
import IProduct from "../../../interface/product";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import { getCategory } from "../../../api/category";
type ICate = {
  _id?: string | number;
  name: string;
  price: number;
};
type Props = {
  onUpdate: (product: ICate) => void;
};

const CategoryEdit = ({ onUpdate }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { id } = useParams();
  const navigate = useNavigate();
  const getCate = async () => {
    const data = await getCategory(id);
    reset(data.data);
  };
  useEffect(() => {
    getCate();
  }, []);
  const onSubmit = (data: any) => {
    console.log(data);

    onUpdate(data);
    navigate("/admin/categories");
  };
  return (
    <div>
      <h2 className="text-center text-black-500 text-[20px]">Category Edit</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <label className="mb-3 block text-base font-medium text-[#07074D]">
            Category Name
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

        <button className="rounded bg-[#14dabc] mt-5 text-white px-4 py-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CategoryEdit;
