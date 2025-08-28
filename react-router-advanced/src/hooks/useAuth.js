import { useState } from "react";

// Very simple auth simulation hook
export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // change to false to test redirect

  return { isAuthenticated, login: () => setIsAuthenticated(true), logout: () => setIsAuthenticated(false) };
}
