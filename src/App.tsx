import { useState } from 'react';
import { nanoid } from 'nanoid';
import TodoItem from './components/TodoItem.tsx';
import AddTaskForm from './components/AddTaskForm.tsx';
import Modal from './components/Modal.tsx';

// Define the interface for a single task
interface ITodoData {
  id: string;
  name: string;
  completed: boolean;
}

const INITIAL_TASK_LIST: ITodoData[] = [
    { id: "todo-0", name: "Eat", completed: false },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Repeat", completed: false }
];

function App() {
    const [taskList, setTaskList] = useState<ITodoData[]>(INITIAL_TASK_LIST);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    function addTask(name: string) {
        const newTask: ITodoData = { id: `todo-${nanoid()}`, name: name, completed: false };
        setTaskList([...taskList, newTask]);
        setIsModalOpen(false);
    }

    function toggleTaskCompleted(id: string) {
        const updatedTasks = taskList.map((task) => {
            if (id === task.id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTaskList(updatedTasks);
    }

    function deleteTask(id: string) {
        const remainingTasks = taskList.filter((task) => id !== task.id);
        setTaskList(remainingTasks);
    }

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

    function openModal() {
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
    }

    return (
        <main className="m-4">
            <button 
                onClick={openModal} 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
            >
                Add Task
            </button>
            <Modal 
                headerLabel="Add New Task" 
                isOpen={isModalOpen} 
                onCloseRequested={closeModal}
            >
                <AddTaskForm onNewTask={addTask} />
            </Modal>
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