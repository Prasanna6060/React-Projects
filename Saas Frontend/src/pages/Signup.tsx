import { useForm } from "react-hook-form";
import { Mail, Lock, User, } from "lucide-react";

type FormValues = {
  name: string;
  email: string;
  password: string;
  role: "customer" | "technician" | "admin";
};

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("Signup Data:", data);
    // axios.post("/api/signup", data)
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto mt-10 p-6 border rounded-2xl shadow-lg space-y-4"
      >
        <h2 className="text-3xl font-semibold text-center mb-4">
          Create an Account
        </h2>

        <div className="flex items-center gap-2">
          <User className="text-gray-500" />
          <input
            placeholder="Full Name"
            {...register("name", { required: true })}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {errors.name && (
          <p className="text-red-500 text-sm ml-7">Name is required</p>
        )}

        <div className="flex items-center gap-2">
          <Mail className="text-gray-500" />
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        {errors.email && (
          <p className="text-red-500 text-sm ml-7">Email is required</p>
        )}

        <div className="flex items-center gap-2">
          <Lock className="text-gray-500" />
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true, minLength: 6 })}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm ml-7">Min 6 characters</p>
        )}

<div className="space-y-2">
        <p className="font-medium">Select Role:</p>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="customer"
              {...register("role", { required: true })}
              className="accent-blue-600"
            />
            <span>User</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="technician"
              {...register("role", { required: true })}
              className="accent-blue-600"
            />
            <span>Technician</span>
          </label>
        </div>
        {errors.role && <p className="text-sm text-red-500">Please select a role</p>}
      </div>
        
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700"
        >
          Sign Up
        </button>
      </form>
    </>
  );
}
