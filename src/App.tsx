import AddTask from './components/AddTask/AddTask'
import Banner from './components/Banner/Banner'
import Task from './components/Tasks/Task'

function App() {

  return (
    <>
       <Banner />
       <AddTask />
       <Task tasks={[]} />
    </>
  )
}

export default App
