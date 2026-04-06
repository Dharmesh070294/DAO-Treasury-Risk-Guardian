import React, { createContext, useContext, useMemo, useState } from "react";
import { setAuthToken } from "../services/api";

type AuthContextType = {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const initialToken =
    typeof window !== "undefined" ? window.localStorage.getItem("token") : null;

  const [token, setToken] = useState<string | null>(initialToken);

  const value = useMemo(
    () => ({
      token,
      login: (newToken: string) => {
        setToken(newToken);
        setAuthToken(newToken);
      },
      logout: () => {
        setToken(null);
        setAuthToken(null);
      },
    }),
    [token]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}