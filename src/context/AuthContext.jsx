import React, { createContext, useContext, useState } from 'react';
import { ROLES, mockUsers } from '../data/mockUsers';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [currentRole, setCurrentRole] = useState(ROLES.STUDENT);
  const [users, setUsers] = useState(mockUsers);
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const currentUser = users[currentRole] || mockUsers[ROLES.STUDENT];

  const switchRole = (role) => {
    if (Object.values(ROLES).includes(role)) {
      setCurrentRole(role);
      setIsAuthenticated(true);
    }
  };

  const loginAs = (role, email = '') => {
    if (Object.values(ROLES).includes(role)) {
      setCurrentRole(role);
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const updateProfile = (updatedData) => {
    setUsers((prev) => ({
      ...prev,
      [currentRole]: {
        ...prev[currentRole],
        ...updatedData
      }
    }));
  };

  return (
    <AuthContext.Provider
      value={{
        currentRole,
        currentUser,
        isAuthenticated,
        switchRole,
        loginAs,
        logout,
        updateProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

