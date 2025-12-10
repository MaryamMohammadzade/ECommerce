import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { setCookie } from "../../../utils/helpers/cookie";
import useStore from "../../../store";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import signupApi from "../../../utils/apis/auth/signupApi";

const signupSchema = z.object({
  name: z.string().min(3, "At Least 3 Character!"),
  email: z.string().min(1, "it cant be empty!").email("enter a valid email"),
  password: z.string().min(1, "it cant be empty!"),
  gender: z.enum(["boy", "girl"]),
  avatar: z.string().optional(),
})

const SignupForm = () => {
  const { setState, access_token } = useStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(signupSchema) });

useEffect(() => {
  if (access_token) {
    toast.warn("you are already logged in!");
    setTimeout(() => navigate("/dashboard"), 500);
  }
}, []);


  const handleSignup = async (data) => {
    data.avatar = `https://avatar.iran.liara.run/public/${data.gender}`;

    const result = await signupApi(data);
    if (result?.status == 200 || result?.status == 201) {
      const access_token = result?.data?.access_token;
      const refresh_token = result?.data?.refresh_token;

      await setCookie("credential", {
        access_token: access_token,
        refresh_token: refresh_token,
      });
      setState({ access_token: access_token, refresh_token: refresh_token });

      toast.success("Signed up successfully , redirecting to Login...");
      setTimeout(() => navigate("/login"), 1000);
    } else toast.error("Could Not Signup!");
  };

  return (
    <form
      onSubmit={handleSubmit(async (data) => await handleSignup(data))}
      className="border-2 rounded-xl shadow-md p-4  lg:w-[30%] w-[80%]">
      <fieldset disabled={isSubmitting} className="flex flex-col gap-4">
        
        <input {...register("avatar")} className="hidden" />

        <input
          {...register("name")}
          className={`${
            errors?.email?.message ? "border-red-400" : "border-slate-400"
          } w-full py-2 px-4 border-2 focus:border-slate-600 rounded-md`}
          type="text"
          autoComplete="Sara"
          name="name"
          id="name"
          placeholder="Enter a name"
        />
        {errors?.name?.message && (
          <p className="text-red-600">{errors.name.message}</p>
        )}

        <input
          {...register("email")}
          className={`${
            errors?.email?.message ? "border-red-400" : "border-slate-400"
          } w-full py-2 px-4 border-2 focus:border-slate-600 rounded-md`}
          type="text"
          autoComplete="abc@email.com"
          name="email"
          id="email"
          placeholder="Enter email"
        />
        {errors?.email?.message && (
          <p className="text-red-600">{errors.email.message}</p>
        )}


        <input
          {...register("password")}
          className={`${
            errors?.password?.message ? "border-red-400" : "border-slate-400"
          } w-full py-2 px-4 border-2 focus:border-slate-600 rounded-md`}
          type="password"
          autoComplete="1234@"
          name="password"
          id="password"
          placeholder="Enter password"
        />
        {errors?.password?.message && (
          <p className="text-red-600">{errors.password.message}</p>
        )}
 
       <div className="flex flex-col">
          <div className="flex gap-4">
            <input
              {...register("gender")}
              type="radio"
              defaultChecked
              value="boy"
              name="gender"
              id="male"
            />
            <label htmlFor="male">Male</label>
          </div>
          <div className="flex gap-4">
            <input
              {...register("gender")}
              type="radio"
              value="girl"
              name="gender"
              id="female"
            />
            <label htmlFor="female">Female</label>
          </div>
        </div>

        <button
          className="w-full bg-slate-600 text-slate-50 rounded-md py-2 px-4"
          type="submit">
          {isSubmitting ? "Signing up..." : "SignUp"}
        </button>

        <Link className="text-center underline text-xs" to="/login">
          Have an Account? Login
        </Link>

      </fieldset>
    </form>
  );
};

export default SignupForm;
