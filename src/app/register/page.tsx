"use client";
import Input from "@/components/Input";
import { useRegister } from "./useRegister";
import SubmitButton from "@/components/SubmitButton";
import FacebookButton from "@/components/FacebookButton";

const Register = () => {
  const { handleSubmit, onSubmit, register, errors, loading } = useRegister();
  return (
    <section className="flex w-full h-full m-auto flex-col justify-center items-center">
      <div className="absolute w-full sm:w-[640px] h-[480px] py-32 px-16 bg-gray-950">
        <div className="w-full h-full flex flex-col sm:flex-row gap-3">
          <FacebookButton />
          <div className="flex flex-col bg-gray-900 w-full h-full p-4">
            <h2 className="ml-2">Log In with awesome new thing</h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col mt-4 justify-center items-center gap-2"
            >
              <Input
                type="text"
                placeholder="username or email"
                {...register("email")}
                error={errors?.email?.message}
              />
              <Input
                type="password"
                placeholder="Password"
                {...register("password")}
                error={errors?.password?.message}
              />
              <SubmitButton loading={loading} />
            </form>
            <p className="cursor-pointer">Forgot your password?</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
