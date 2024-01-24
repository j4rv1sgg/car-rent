import {useEffect, useState} from "react";
import {getCarById, rentCar} from "@/services/cars";
import {useParams} from "react-router-dom";
import { Button } from "@/components/ui/button";
import {cn} from "@/lib/utils.ts";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {rentSchema} from "@/types/user.types.ts";
import {zodResolver} from "@hookform/resolvers/zod";

import './index.css'

export default function index() {
  const [car, setCar] = useState({})
  const { id } = useParams()

  const form = useForm<z.infer<typeof rentSchema>>({
    resolver: zodResolver(rentSchema),
    defaultValues: {
      startDate: "",
      endDate: "",
    },
  });

  const onRent = async (values: z.infer<typeof rentSchema>) => {
    const data = {
      ...values,
      carId: Number(id),
    }
    await rentCar(data)
  }

  const setup = async () => {
    setCar(await getCarById(id))
  }

  useEffect(() => {
    setup()
  }, [])

  return (
    <div>
      <div className="car-details__container container">
        <div className="car-details__left">
          <img src={`https://wyp-aut-wwsis.onrender.com/api/car/${id}/image`}/>
        </div>
        <div className="car-details__right">
          <div className="car-details__title">{ car.name }</div>
          <div className="car-details__wrapper">
            <div className="car-details__price">Price: ${ car.price }</div>
            <div className={cn({
              "car-details__availability": true,
              "available": car.available,
            })}>{ car.available ? 'Available' : 'Is not available' }</div>
          </div>
          <div className="car-details__description">{ car.description }</div>

          <Dialog>
            <DialogTrigger>
              <Button disabled={!car.available}>Rent</Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Rent a car</DialogTitle>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onRent)} className="space-y-8">
                    <FormField
                      control={form.control}
                      name="startDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Start Date</FormLabel>
                          <FormControl>
                            <Input type="date" placeholder="Start Date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="endDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>End Date</FormLabel>
                          <FormControl>
                            <Input type="date" placeholder="End Date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit">Continue</Button>
                  </form>
                </Form>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}
