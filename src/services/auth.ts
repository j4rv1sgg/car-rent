import Cookies from 'js-cookie';

export const login = (values) => {
  fetch("https://wyp-aut-wwsis.onrender.com/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
    .then((response) => response.json())
    .then((data) => Cookies.set("session", data.wypAutSession))
    .catch((error) => console.error("Error:", error));
}

export const register = (values) => {
  fetch("https://wyp-aut-wwsis.onrender.com/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
    .then((response) => response.json())
    .then((data) => Cookies.set("session", data.wypAutSession))
    .catch((error) => console.error("Error:", error));
}

export const checkAuth = async () => {
  if(Cookies.get('session') == undefined) {
    return {status: 401}
  }
  const response = await fetch("https://wyp-aut-wwsis.onrender.com/api/security/checkAuth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({wypAutSession: Cookies.get('session')}),
  })
  .catch((error) => console.error("Error:", error));
  return response
}

export const checkAdmin = () => {
  fetch("https://wyp-aut-wwsis.onrender.com/api/security/checkAdmin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({wypAutSession: Cookies.get('session')}),
  })
    .catch((error) => console.error("Error:", error));
}

