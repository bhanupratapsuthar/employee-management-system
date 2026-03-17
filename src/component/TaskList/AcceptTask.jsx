import React from 'react'

const AcceptTask = ({data}) => {
  return (
        <div className='shrink-0 h-full w-100 bg-blue-400 p-5 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 text-sm rounded-md'>{data.category}</h3>
                <h4 className='text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
            <p className='text-white text-sm mt-2'>{data.description}</p>
            <div className='mt-10'>
                <button className='bg-green-500 text-xl px-5 py-3 rounded-md'>Accept Task</button>
            </div>
        </div>  
    )
}

export default AcceptTask