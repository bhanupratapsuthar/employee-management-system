import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/LocalStorage'

const Header = (props) => {
  
  
  const logoutUser = () => {
    localStorage.removeItem('loggedInUser')
    props.changeUser(null);
    
  }

  return (
    <div className='h-16 flex items-end justify-between px-4'>
        <h1 className='text-white text-2xl font-medium'>Hello <br/> <span className='font-semibold'>{props.data?.firstName}</span></h1>
        <button onClick={logoutUser} className='bg-red-600 text-white px-4 py-2 text-lg font-medium rounded-md'>Logout</button>
    </div>
  )
}

export default Header