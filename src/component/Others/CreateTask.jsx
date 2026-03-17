import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
    const {userData, setUserData} = useContext(AuthContext)
    


    const [taskTitle, setTaskTitle] = useState('');
    const [date, setDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    const [newTask, setNewTask] = useState({})


    const submitHandler = (e) => {
        e.preventDefault();

        const task = {
            taskTitle, 
            description, 
            date, 
            category, 
            active: false, 
            newTask: true, 
            failed: false, 
            completed: false
        }


        const data = [...userData]
        
        data.forEach(function(e) {
            if(assignTo.toLowerCase() == e.firstName.toLowerCase()) {
                e.tasks.push(task);
                e.taskNumber.newTask += 1
            }
        })

        setUserData(data);
        
        localStorage.setItem('employees', JSON.stringify(data));
        console.log(data)

        setTaskTitle('');
        setAssignTo('');
        setCategory('');
        setDate('');
        setDescription('');
    }

  return (
    <div className='p-5 bg-[#1c1c1c] mt-3 rounded'>
        <form onSubmit={(e) => {submitHandler(e)}} className='text-white flex flex-wrap w-full items-start justify-between'>
            <div className='w-1/2'>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                    <input 
                        value={taskTitle} onChange={(e) => {
                            setTaskTitle(e.target.value)
                        }}
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' type="text" placeholder='Make a UI Design' />
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                    <input
                        value={date} onChange={(e) => {
                            setDate(e.target.value)
                        }}
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' type='date' />
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                    <input 
                        value={assignTo} onChange={(e) => {
                            setAssignTo(e.target.value)
                        }}
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' type="text" placeholder='employee name'/>
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                    <input 
                        value={category} onChange={(e) => {
                            setCategory(e.target.value)
                        }}
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' type="text" placeholder='design, dev, etc'/>
                </div>
            </div>
            <div className='w-2/5 flex flex-col items-start'>
                <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                <textarea 
                    value={description} onChange={(e) => {
                            setDescription(e.target.value)
                        }}
                    name="" id="" cols='30' rows='10' className='text-sm py-1 px-2 w-full rounded outline-none bg-transparent border border-gray-400'></textarea>
                <button className='bg-emerald-500 text-white py-3 px-5 hover:bg-emerald-600 rounded text-sm mt-4 w-full'>Create Task</button>
            </div>
        </form>
    </div>
  )
}

export default CreateTask