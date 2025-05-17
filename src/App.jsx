import { useState } from 'react';
import { nanoid } from 'nanoid';
import TodoItem from './components/TodoItem';
import AddTaskForm from './components/AddTaskForm';

// Define INITIAL_TASK_LIST
const INITIAL_TASK_LIST = [
    { id: "todo-0", name: "Eat", completed: false },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Repeat", completed: false }
];

function App() {
    // Use useState for taskList
    const [taskList, setTaskList] = useState(INITIAL_TASK_LIST);

    // addTask function now accepts a name
    function addTask(name) {
        const newTask = { id: `todo-${nanoid()}`, name: name, completed: false };
        setTaskList([...taskList, newTask]);
    }

    // toggleTaskCompleted function
    function toggleTaskCompleted(id) {
        const updatedTasks = taskList.map((task) => {
            if (id === task.id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTaskList(updatedTasks);
    }

    // deleteTask function
    function deleteTask(id) {
        const remainingTasks = taskList.filter((task) => id !== task.id);
        setTaskList(remainingTasks);
    }

    // Map over taskList state
    const taskListElements = taskList.map(task => (
        <TodoItem
            key={task.id}
            id={task.id}
            taskName={task.name}
            completed={task.completed}
            onToggleCompleted={toggleTaskCompleted}
            onDeleteTask={deleteTask}
        />
    ));

    return (
        <main className="m-4"> {/* Tailwind: margin level 4 on all sides */}
            <AddTaskForm onNewTask={addTask} />
            <section>
                <h1 className="text-xl font-bold">To do</h1>
                <ul>
                    {taskListElements}
                </ul>
            </section>
        </main>
    );
}

export default App;
