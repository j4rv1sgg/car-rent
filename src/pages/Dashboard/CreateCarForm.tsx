import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addCar } from "@/services/cars";

export default function CreateCarForm() {
  const imageInputRef = useRef(null);
  const form = useForm({
    defaultValues: {
      name: "",
      productYear: "",
      description: "",
      price: "",
    },
  });

  const onSubmit = (values) => {
    const formData = new FormData();

    formData.append("name", values.name)
    formData.append("productYear", parseInt(values.productYear))
    formData.append("description", values.description)
    formData.append("price", parseInt(values.price))
    formData.append("image", imageInputRef.current.files[0]);

    addCar(formData)

  };


  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-80 mb-16"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Car title</FormLabel>
              <FormControl>
                <Input placeholder="Title..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="productYear"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Production year</FormLabel>
              <FormControl>
                <Input placeholder="Production year" type="number" {...field} />
              </FormControl>
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
                <Input placeholder="Description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input placeholder="Price per day" type='number'{...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Input ref={imageInputRef} type="file" />
        <Button type="submit">Add car</Button>
      </form>
    </Form>
  );
}
