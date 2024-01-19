import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CarCard() {
  return (
    <Card
      className="w-[380px] h-[350px] border-4 cursor-pointer"
      onClick={() => {
        console.log("asdf");
      }}
    >
      <CardContent>
        <img
          src="https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/vhs/Mercedes-Benz-S-Class_0.png"
          alt=""
        />
        <CardTitle>Mercedes S-Class</CardTitle>
      </CardContent>
      <CardFooter>
        <p>Price: 250$/day</p>
      </CardFooter>
    </Card>
  );
}
