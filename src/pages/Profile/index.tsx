import {useEffect, useState} from "react";

import './index.css'
import {getCarByUser} from "@/services/cars.ts";
import CarCard from "@/pages/Home/CarCard.tsx";

export default function Profile() {
  const [userCar, setuserCar] = useState({})

  const setup = async () => {
    setuserCar(await getCarByUser())
  }

  useEffect(() => {
    setup()
  }, [])

  return (
    <div className="profile__container container">
      <CarCard car={userCar} profile={true} />
    </div>
  );
}
