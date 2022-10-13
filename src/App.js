import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'test',
            other: 'no-show',
            day: 'monday',
            reminder: true,
        },
        {
            text: 'Test4',
            day: 'Wednesday',
            reminder: false,
            id: 3,
        },
        {
            text: 'Task6',
            day: 'Thursday',
            reminder: true,
            id: 4,
        },
    ])

    return (
        <div className="container">
            <Header />
            <Tasks tasks={tasks} />
        </div>
    )
}

export default App
