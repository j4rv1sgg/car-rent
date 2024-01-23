import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export default function CarCard() {
  const navigate = useNavigate();
  return (
    <Card
      className="w-[380px] h-[350px] border-4 cursor-pointer"
      onClick={() => {
        navigate("");
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
