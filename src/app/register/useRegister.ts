import { useState } from "react";
import { useForm } from "react-hook-form";
import { CredentialsResolver } from "@/utils/validators";

//custtom hook
export const useRegister = () => {
  const [loading, setLoading] = useState(false);

  //useForm config
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: CredentialsResolver,
    mode: "onChange",
  });

  //submit function
  const onSubmit = async (data: any) => {
    handleLoading();
    const { email, password } = data;
    //api call
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: email,
          email,
          password,
        }),
      });
      if (res.status === 201) {
        console.log("User created successfully.");
      }
      if (res.status === 409) {
        console.log("User/email already exists.");
      }
    } catch (err) {
      console.log(err);
    }
  };

  //fake api call function
  function handleLoading() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setValue("email", "");
      setValue("password", "");
    }, 5000);
  }
  return {
    handleSubmit,
    onSubmit,
    register,
    errors,
    loading,
  };
};
