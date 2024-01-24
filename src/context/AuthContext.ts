import { createContext } from 'react';

const AuthContext = createContext({isLoggedIn: false, checkAuthorization: null});

export default AuthContext;
