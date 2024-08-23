import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Create context
interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
interface AuthProviderProps {
  children: ReactNode;
}
// Provide context
export const AuthProvider = ({ children }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Mock function to simulate authentication
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  useEffect(() => {
    // Here you might check authentication status from an API or local storage
    // For this example, we'll just use a mock value
    const checkAuthStatus = () => {
      // Logic to determine if user is authenticated
    };
    checkAuthStatus();
  }, []);

  return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;
};

// Custom hook to use auth context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
