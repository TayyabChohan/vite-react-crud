import React from "react";
import { useForm } from "react-hook-form";

const HookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors,'sfsd')
  const mySubmit = (data: any) => console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit(mySubmit)} style={{ padding: "20%" }}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            {...register("name", { required: true, minLength: 3 })}
            id="name"
            type="text"
            className="form-control"
          />
          {errors.name?.type === "required" && <p>This is field is required</p>}
          {errors.name?.type === "minLength" && (
            <p>This is field must be minimum 3</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            {...register("age", { required: true, minLength: 3 })}
            id="age"
            type="number"
            className="form-control"
          />
          {errors.age?.type === "required" && <p>This is field is required</p>}
          {errors.age?.type === "minLength" && (
            <p>This is field must be minimum 3</p>
          )}
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </>
  );
};

export default HookForm;
