import React, { useEffect } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AuthAPI, userInfoLogin } from "../api/auth/authLogin";
// import { Input } from "@/components/ui/input";
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Vui lòng nhập tên đăng nhập",
  }),
  password: z.string().min(2, {
    message: "Vui lòng nhập mật khẩu",
  }),
});
import { useNavigate } from "react-router-dom";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../components/ui/form";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      navigate("/");
    }
  }, []);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    var userInformation: userInfoLogin = {
      username: values.username,
      password: values.password,
    };

    let response = await AuthAPI.login(userInformation);
    if (response) {
      let access_token = response.data.access_token;
      localStorage.setItem("access_token", access_token);
      console.log("CALL TRHIS");
      window.location.href = "/";
    }
  }

  return (
    <div className="container mx-auto w-full md:w-[600px] xl:w-[700px] flex flex-col h-screen justify-center  ">
      <div className="bg-[#63B8EB] rounded-md shadow-2xl p-4 ">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tên Đăng Nhập</FormLabel>
                  <FormControl>
                    <Input placeholder="Tên đăng nhập của bạn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Mật khẩu của bạn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Đăng Nhập
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Login;
