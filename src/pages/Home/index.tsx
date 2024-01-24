import React, {useEffect, useState} from "react";
import CarCard from "./CarCard";
import {getCarList} from "@/services/cars.ts";

import './index.css'

export default function Home() {
  const [carList, setCarList] = useState([])

  const setup = async () => {
    setCarList(await getCarList())
  }

  useEffect(() => {
    setup()
  }, [])

  return (
    <div className="home__container container">
      {
        carList.map(car => <CarCard car={car} key={car.id} />)
      }
    </div>
  );
}
