import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IProduct } from "../interface/product";
import { addProduct } from "../api/product";
type Props = { onAdd: (product: IProduct) => void };
type HandleSubmit = {};
type TypeProduct = {
  name: string;
  price: number;
};
const ProductAdd = ({ onAdd }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onHandleSubmit: SubmitHandler<IProduct> = (data) => {
    onAdd(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <input
          type="text"
          placeholder="Name"
          {...register("name", { required: true })}
        />
        {errors.name && <span>This field is required</span>}
        <input type="text" placeholder="Price" {...register("price")} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ProductAdd;
