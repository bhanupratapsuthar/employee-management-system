import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const {userData, setUserData} = useContext(AuthContext)

    if(!userData) return <h1>Loading...</h1>

    const employees = userData.filter(user => user.role === 'employee')




  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded'>
        <div className='bg-red-400 mb-2 py-2 px-5 flex justify-between rounded'>
            <h2 className='w-1/5 text-lg font-medium'>Employee Name</h2>
            <h3 className='w-1/5 text-lg font-medium'>New Task</h3>
            <h5 className='w-1/5 text-lg font-medium'>Active Task</h5>
            <h5 className='w-1/5 text-lg font-medium'>Completed</h5>
            <h5 className='w-1/5 text-lg font-medium'>Failed</h5>

        </div>
        <div className='bg-[#1c1c1c] p-5 mt-5 rounded h-80 overflow-auto'>
            {employees.map((e, idx) => {


                return (
                    <div key={idx} className='border-2 border-emerald-500 rounded-lg mb-2 py-2 px-4 flex justify-between'>
                        <h2 className='w-1/5 text-white text-xl font-medium'>{e.firstName}</h2>
                        <h3 className='w-1/5 text-blue-400 text-lg font-medium'>{e.taskNumber.newTask}</h3>
                        <h5 className='w-1/5 text-yellow-400 text-lg font-medium'>{e.taskNumber.active}</h5>
                        <h5 className='w-1/5 text-white text-lg font-medium'>{e.taskNumber.completed}</h5>
                        <h5 className='w-1/5 text-red-400 text-lg font-medium'>{e.taskNumber.failed}</h5>

                    </div>
                )
            })}


        </div>
    </div>
    )
}

export default AllTask