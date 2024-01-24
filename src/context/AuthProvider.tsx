import React, { useState, useContext, useEffect } from 'react';
import AuthContext from './AuthContext';
import { checkAuth } from '@/services/auth';

export default function AuthProvider ({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const checkAuthorization = async () => {
    try {
      const response = await checkAuth();

      if (response.status === 200) {
        setIsLoggedIn(true);
      } else if (response.status === 401) {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    checkAuthorization()
  }, [])


  return (
    <AuthContext.Provider value={{ isLoggedIn, checkAuthorization }}>
      {children}
    </AuthContext.Provider>
  );
};

