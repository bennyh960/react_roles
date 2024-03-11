import { useState, useEffect } from "react";

const token = "dsaldsajdsad";

const checkTokenValidity = (token: string) => {
  return true;
};

const decodeToken = (token: string) => {
  return {
    userName: "Admin01",
    roles: ["user"],
  };
};

type user = {
  userName: string;
  roles: string[];
};

const useAuth = () => {
  const [user, setUser] = useState<user | null>(null);

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
