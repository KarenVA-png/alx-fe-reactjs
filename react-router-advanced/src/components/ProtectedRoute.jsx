import { Navigate } from "react-router-dom";

// Simulated authentication (set to false to test redirect)
const isAuthenticated = true;

export default function ProtectedRoute({ children }) {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
}
