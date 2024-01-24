import { useEffect, useState } from "react";
import { getNotAviableCarList, getAviableCarList } from "@/services/cars";
import CarCard from "../Home/CarCard";

export default function index() {
  const [carAviableList, setAviableCarList] = useState([])
  const [carNotAviableList, setNotAviableCarList] = useState([])

  const setup = async () => {
    setAviableCarList(await getAviableCarList())
    setNotAviableCarList(await getNotAviableCarList())

  }
  useEffect(() => {
    setup()
  }, [])

  return (
    <div className="font-bold text-2xl">
      <div>
        <p>Available cars:</p>
        {
          carAviableList.map(car => <CarCard car={car} key={car.id} />)
        }
        <p>Not available cars:</p>
        {
          carNotAviableList.map(car => <CarCard car={car} key={car.id} />)
        }
      </div>
    </div>
  )
}
