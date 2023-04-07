import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type Props = { onAdd: (cate: TypeInputs) => void };
type TypeInputs = {
  name: string;
};

const CategoryAdd = ({ onAdd }: Props) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onHandleSubmit = (data: any) => {
    onAdd(data);
    navigate("/admin/categories");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
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
export default CategoryAdd;
