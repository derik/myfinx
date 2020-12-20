import React, { createContext, useEffect, useState } from "react";
import { auth } from "../apis/firebase";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    return auth.onAuthStateChanged(async (userAuth) => {
      console.log("setUser");
      setUser(userAuth);
    });
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
