import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export default function CarCard({ car, profile }) {
  const navigate = useNavigate();

  return (
    <Card
      className="w-[380px] h-[350px] border-4 cursor-pointer"
      onClick={() => {
        navigate(`/car-details/${car.id}`);
      }}
    >
      <CardContent>
        <img
          src={`https://wyp-aut-wwsis.onrender.com/api/car/${car.id}/image`}
          alt=""
        />
        <CardTitle>{ car.name }</CardTitle>
      </CardContent>
      <CardFooter>
        <p>
          Price: { car.price }$/day
          <br/>
          { !profile ? car.available ? 'Available' : 'Is not available' : '' }
        </p>
      </CardFooter>
    </Card>
  );
}
