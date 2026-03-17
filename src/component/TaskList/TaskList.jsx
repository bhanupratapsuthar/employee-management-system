import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {

  if (!data || !data.tasks) return <h1>Loading...</h1>;

  return (
    <div
      id='tasklist'
      className='h-[50%] overflow-x-auto flex items-center justify-start py-5 gap-5 whitespace-nowrap w-full mt-10'
    >
      {data.tasks.map((task) => {
        if (task.newTask) return <NewTask key={task.title} data={task} />;
        if (task.active) return <AcceptTask key={task.title} data={task} />;
        if (task.completed) return <CompleteTask key={task.title} data={task} />;
        if (task.failed) return <FailedTask key={task.title} data={task} />;
        return null;
      })}
    </div>
  )
}

export default TaskList