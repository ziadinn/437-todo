import TodoItem from './components/TodoItem';
import AddTaskForm from './components/AddTaskForm';

function App() {
    const tasks = [
        { id: "todo-0", name: "Eat" },
        { id: "todo-1", name: "Sleep" },
        { id: "todo-2", name: "Repeat" }
    ];

    const taskList = tasks.map(task => (
        <TodoItem key={task.id} taskName={task.name} />
    ));

    return (
        <main className="m-4"> {/* Tailwind: margin level 4 on all sides */}
            <AddTaskForm />
            <section>
                <h1 className="text-xl font-bold">To do</h1>
                <ul>
                    {taskList}
                </ul>
            </section>
        </main>
    );
}

export default App;
