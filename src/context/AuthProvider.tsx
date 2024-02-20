import { useState, useEffect } from 'react';
import AuthContext from './AuthContext';
import Cookies from 'js-cookie';

export default function AuthProvider ({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const checkAuth = async () => {
    setIsLoggedIn(Boolean(Cookies.get('session')))
  };
  useEffect(() => {
    checkAuth()
  }, [])


  return (
    <AuthContext.Provider value={{ isLoggedIn, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

