import { useState, useEffect } from "react";

const token = "dsaldsajdsad";

const checkTokenValidity = (token: string) => {
  return true;
};

const decodeToken = (token: string): User | null => {
  return {
    userName: "Benny",
    pspName: "Bank Leumi",
    roles: ["manager"],
  };
};

type Roles = "admin" | "guest" | "manager";

type User = {
  userName: string;
  pspName: string;
  roles: Roles[];
};

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (token) {
      const isTokenValid = checkTokenValidity(token);
      const userData = isTokenValid ? decodeToken(token) : null;

      if (isTokenValid) {
        setUser(userData);
      } else {
        setUser(null);

        // Cookies.remove("token");
      }
    } else {
      setUser(null);
    }
  }, []);

  return { user };
};

export default useAuth;
