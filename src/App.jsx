import React, { useContext, useEffect, useState } from 'react'
import Login from './component/Auth/Login';
import EmployeeDashboard from './component/Dashboard/EmployeeDashboard';
import AdminDashboard from './component/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const {userData} = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser);
      setUser(parsedUser.role)
      setLoggedInUserData(parsedUser.data);
    }
  }, [])

  const handleLogin = (email, password) => {
  if (!userData) {
    alert("Data not loaded yet");
    return;
  }

  const user = userData.find(
    (e) => e.email === email && e.password === password
  );

  console.log("Found user:", user);

  if (!user) {
    alert("Invalid Credentials");
    return;
  }

  console.log("userData" , userData)

  setUser(user.role);
  setLoggedInUserData(user);

  localStorage.setItem(
    "loggedInUser",
    JSON.stringify({ role: user.role, data: user })
  );
};

  return (
    <>
      {!user 
        ? <Login handleLogin={handleLogin}/> 
        : user === 'admin'
          ? <AdminDashboard changeUser={setUser}/> 
          : user === 'employee'
            ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData}/>
            : null
      }

      {/* Remove this */}
      {/* props */}
    </>
  )
}

export default App