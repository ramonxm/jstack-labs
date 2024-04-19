import { createContext, ReactNode } from "react";

export interface IAuthContext {
  signIn: () => void;
  signOut: () => void;
  isLogged: () => boolean;
}

export const AuthContext = createContext<IAuthContext | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const signIn = () => {
    localStorage.setItem("isAuthenticated", "true");
  };

  const signOut = () => {
    localStorage.removeItem("isAuthenticated");
  };

  const isLogged = () => localStorage.getItem("isAuthenticated") === "true";

  return (
    <AuthContext.Provider value={{ signIn, signOut, isLogged }}>
      {children}
    </AuthContext.Provider>
  );
}
