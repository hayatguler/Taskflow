import Navbar from '../components/Navbar'
import TaskForm from '../components/TaskForm'

function HomePage() {
    return (
        <>
            <Navbar />

            <main>
                <TaskForm />
            </main>
        </>
    )
}

export default HomePage