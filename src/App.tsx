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

  return (
    <>
       <Banner />
       <AddTask addTask={handleAddTask} />
       <Task clickTask={clickCheckTask} tasks={tasks} />
    </>
  )
}

export default App
