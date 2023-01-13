import React, { createContext, useEffect, useState } from "react";
import { auth } from "../apis/firebase";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [authInfo, setAuthInfo] = useState({ user: null, loading: true });

  useEffect(() => {
    return auth.onAuthStateChanged(async (userAuth) => {
      setAuthInfo({
        user: userAuth,
        loading: false,
      });
    });
  }, []);

  return <UserContext.Provider value={authInfo}>{children}</UserContext.Provider>;
};

export default UserProvider;
