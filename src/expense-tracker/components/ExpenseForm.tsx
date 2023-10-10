import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be atleast 3 Character" })
    .max(300),
  amount: z
    .number()
    .min(0.01, { message: "Amount should be a number" })
    .max(100_000),
  category: z.string().min(5).max(555),
});
type expensFormData = z.infer<typeof schema>;
interface Props {
  categories: string[];
  onSubmit: (data: expensFormData) => void;
}
const ExpenseForm = ({ categories, onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<expensFormData>({
    resolver: zodResolver(schema),
  });
  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
      >
        <div className="mb-3">
          <label htmlFor="description" className="label-form">
            Description
          </label>
          <input
            {...register("description")}
            id="description"
            type="text"
            className="form-control"
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="label-form">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="text"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        {/* <div className="mb-3">
          <label htmlFor="category" className="label-form">
            Category
          </label>
          <input
            {...register("category")}
            id="category"
            type="text"
            className="form-control"
          />
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div> */}
        <div className="mb-3">
          <label htmlFor="amount" className="label-form">
            Category
          </label>
          <select className="form-select" {...register("category")}>
            <option value=""></option>
            {categories.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>
        <div className="mb-5">
          <button className="btn btn-primary"> Submit</button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
