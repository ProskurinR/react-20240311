import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useContext } from "react";

export const UserContext = React.createContext(null);

export function useUser(defaultUser = null) {
  const [user, setUser] = useState(defaultUser);

  const logout = useCallback(() => setUser(null), []);

  return {
    user,
    login: setUser,
    logout,
  };
}

export function useCurrentUser() {
  return useContext(UserContext);
}
