import React from 'react'

const FailedTask = ({data}) => {
  return (
        <div className='shrink-0 h-full w-100 bg-slate-400 p-5 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 text-sm rounded-md'>{data.category}</h3>
                <h4 className='text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
            <p className='text-white text-sm mt-2'>{data.description}</p>
            <div className='mt-10 '>
                <button className='w-full text-2xl py-3 bg-green-700 rounded-md'>Failed</button>
            </div>
        </div>  
    )
}

export default FailedTask