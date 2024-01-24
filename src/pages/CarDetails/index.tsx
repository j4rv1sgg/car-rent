import Header from "@/components/Header";
import {useEffect, useState} from "react";
import {getCarById} from "@/services/cars.ts";
import {useParams} from "react-router-dom";
import { Button } from "@/components/ui/button";
import {cn} from "@/lib/utils.ts";

import './index.css'

export default function index() {
  const [car, setCar] = useState({})
  const { id } = useParams()

  const onRent = () => {

  }

  const setup = async () => {
    setCar(await getCarById(id))
  }

  useEffect(() => {
    setup()
  }, [])

  return (
    <div>
      <Header/>
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

          <Button disabled={!car.available} onClick={onRent}>Rent</Button>
        </div>
      </div>
    </div>
  )
}
