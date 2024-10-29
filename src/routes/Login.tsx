import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createUserSchema,
  departmentArr,
  loginUserSchema,
} from "@/lib/schemas/ticketSchema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const form = useForm<z.infer<typeof loginUserSchema>>({
    resolver: zodResolver(loginUserSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginUserSchema>) => {
    console.log(values);
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="flex justify-center mt-20">
      <Card className="lg:w-[700px]">
        <CardHeader>
          <CardTitle className="text-center font-bold ">Login</CardTitle>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your email address or username"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      This should ideally be your work pc.
                    </FormDescription>
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
                      <div className="relative">
                        <Input
                          className="w-full"
                          type={passwordVisible ? "text" : "password"}
                          placeholder="Enter your password"
                          {...field}
                        />
                        {passwordVisible ? (
                          <EyeOff
                            onClick={() => setPasswordVisible(false)}
                            className="absolute top-2 cursor-pointer right-2"
                            size={16}
                          />
                        ) : (
                          <Eye
                            onClick={() => setPasswordVisible(true)}
                            className="absolute top-2 cursor-pointer right-2"
                            size={16}
                          />
                        )}
                      </div>
                    </FormControl>
                    <FormDescription>
                      Use a password you can remember
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />


              <Link to="forgot-password" className="text-gray-400 text-sm hover:text-black">Forgot Password?</Link>
              <Button type="submit" className="py-4">
                Login
              </Button>

              

              <p className="text-center">
                Don't have an account? <Link to="/signup" className="text-gray-600">Signup</Link>
              </p>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
