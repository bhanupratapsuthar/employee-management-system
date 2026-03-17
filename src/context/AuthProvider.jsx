import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    // localStorage.clear();

    const[userData, setUserData] = useState(null)

    useEffect(() => {
        setLocalStorage()
        const { employees, admin } = getLocalStorage()

        // add role to admin + employees
        const updatedEmployees = employees.map(emp => ({
          ...emp,
          role: "employee"
        }));
        
        const updatedAdmin = admin.map(adm => ({
          ...adm,
          role: "admin"
        }));
        
        setUserData([...updatedEmployees, ...updatedAdmin]);
        setUserData([...updatedAdmin, ...updatedEmployees]);
    }, [])


  return (
        <AuthContext.Provider value={{userData, setUserData}}>
            {children}
        </AuthContext.Provider>
  )
} 

export default AuthProvider