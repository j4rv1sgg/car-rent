export const getCarById = async (carId) => {
  const res = await fetch(`https://wyp-aut-wwsis.onrender.com/api/car/${carId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
  return await res.json()
}