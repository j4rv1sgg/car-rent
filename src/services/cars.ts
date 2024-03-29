import Cookies from 'js-cookie';

export const getCarById = async (carId) => {
  const res = await fetch(`https://wyp-aut-wwsis.onrender.com/api/car/${carId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
  return await res.json()
}

export const getCarList = async () => {
  const res = await fetch('https://wyp-aut-wwsis.onrender.com/api/car/carList', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
  return await res.json()
}

export const rentCar = async (data) => {
  const payload = {
    ...data,
    wypAutSession: Cookies.get('session')
  }
  await fetch('https://wyp-aut-wwsis.onrender.com/api/reservation/create', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload)
  })
}

export const addCar = async (data) => {
  await fetch('https://wyp-aut-wwsis.onrender.com/api/car/create', {
    method: "POST",
    body: data
  })
}

export const getCarByUser = async () => {
  const res = await fetch('https://wyp-aut-wwsis.onrender.com/api/carByUser', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({wypAutSession: Cookies.get('session')})
  })
  return await res.json()
}

export const getAviableCarList = async () => {
  const res = await fetch('https://wyp-aut-wwsis.onrender.com/api/car/carAvailableList', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
  return await res.json()
}

export const getNotAviableCarList = async () => {
  const res = await fetch('https://wyp-aut-wwsis.onrender.com/api/car/carNotAvailableList', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
  return await res.json()
}
export const getLogs = async () => {
  const res = await fetch('https://wyp-aut-wwsis.onrender.com/api/logs', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
  return await res.json()
}