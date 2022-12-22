import React, { createContext, useEffect, useState } from 'react';

const authContext = createContext();

const initToken = () => {
  localStorage.getItem('token');
};

function AuthContextProvider({ children }) {
  console.log('context');
  const [token, setToken] = useState(initToken);

  const setLocalToken = (tokenparam) => {
    setToken(tokenparam);
    localStorage.setItem('token', tokenparam);
  };

  // useEffect(() => {
  //   if (!token) {
  //     setToken(localStorage.getItem('token'));
  //   }
  // }, [token]);

  const value = {
    state: { token },
    action: { setLocalToken },
  };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
}

export { AuthContextProvider, authContext };
