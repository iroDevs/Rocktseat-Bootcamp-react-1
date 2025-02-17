import { useState } from 'react'

import AddTask from './components/AddTask/AddTask'
import Banner from './components/Banner/Banner'
import Task from './components/Tasks/Task'

interface task {
  id: number;
  texto: string;
  checked: boolean;
}


function App() {
  const [tasks, setTasks] = useState<task[]>([])


  function handleAddTask(task: string) {
    setTasks([...tasks, { id: tasks.length, texto: task, checked: false }])
  }

  function clickCheckTask(id: number) {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        task.checked = !task.checked
      }
      return task
    })

    setTasks(newTasks)
  }

  function handleDeleteTask(id: number) {
    const newTasks = tasks.filter(task => task.id !== id)
    setTasks(newTasks)
  }

  return (
    <>
       <Banner />
       <AddTask addTask={handleAddTask} />
       <Task clickTask={clickCheckTask} deleteTask={handleDeleteTask} tasks={tasks} />
    </>
  )
}

export default App
