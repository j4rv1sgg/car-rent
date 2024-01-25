import { useEffect, useState } from "react";
import { getNotAviableCarList, getAviableCarList, getLogs } from "@/services/cars";
import CarCard from "../Home/CarCard";
import CreateCarForm from "./CreateCarForm";

export default function index() {
  const [carAviableList, setAviableCarList] = useState([])
  const [carNotAviableList, setNotAviableCarList] = useState([])
  const [logs, setLogs] = useState([])

  const setup = async () => {
    setAviableCarList(await getAviableCarList())
    setNotAviableCarList(await getNotAviableCarList())
    setLogs(await getLogs())

  }
  useEffect(() => {
    setup()
  }, [])

  return (
    <div>
      <p className="font-bold text-2xl">Add car</p>

      <CreateCarForm />

      <div>
        <p className="font-bold text-2xl">Available cars:</p>
        {
          carAviableList.map(car => <CarCard car={car} key={car.id} />)
        }
        <p className="font-bold text-2xl">Not available cars:</p>
        {
          carNotAviableList.map(car => <CarCard car={car} key={car.id} />)
        }
      </div>
      <div>
        Logs:
        {logs?.map(item => {
          return <p>{item.timestamp} = {item.description}</p>
        })}
      </div>
    </div>
  )
}
