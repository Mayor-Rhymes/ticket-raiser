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
import { createTicketSchema, statusArr } from "@/lib/schemas/ticketSchema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateTicket() {
  
  const navigate = useNavigate();
  const createTicket = useMutation({
    mutationFn: (newTicket: typeof createTicketSchema) => {
      return axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/tickets`, newTicket, {withCredentials: true})
    },
    onSuccess: () => {
      navigate("/");
    }
  })

  const form = useForm<z.infer<typeof createTicketSchema>>({
    resolver: zodResolver(createTicketSchema),
    defaultValues: {
      title: "",
      description: "",
      // status: "open",
    },
  });

  const onSubmit = (values: z.infer<typeof createTicketSchema>) => {
    // console.log(values);
    createTicket.mutate(values as any);

  };

  return (
    <div className="flex justify-center mt-20">
      <Card className="lg:w-[700px]">
        <CardHeader>
          <CardTitle className="text-center font-bold ">
            Create a Ticket
          </CardTitle>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
            >
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter ticket title" {...field} />
                    </FormControl>
                    <FormDescription>
                      This should be as descriptive and as brief as possible.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter description"
                        {...field}
                      ></Textarea>
                    </FormControl>
                    <FormDescription>Ticket Description</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* <FormField
                disabled={true}
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a status to submit" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {statusArr.map((status, index) => (
                          <SelectItem key={index} value={status}>
                            {status}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Choose the appropriate status for your ticket.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}

              <Button type="submit" className="py-4">
                Create
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
