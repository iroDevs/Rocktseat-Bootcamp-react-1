import AddTask from './components/AddTask/AddTask'
import Banner from './components/Banner/Banner'
import Task from './components/Tasks/Task'

const tasks = [
  {
    id: 1,
    texto: 'Estudar React'
  },
  {
    id: 2,
    texto: 'Estudar TypeScript'
  },
  {
    id: 3,
    texto: 'Estudar Node'
  }
]

function App() {

  return (
    <>
       <Banner />
       <AddTask />
       <Task tasks={tasks} />
    </>
  )
}

export default App
