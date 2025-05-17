import { useState } from 'react';

function AddTaskForm({ onNewTask }) {
    const [name, setName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (name.trim()) {
            onNewTask(name);
            setName("");
        }
    }

    function handleChange(e) {
        setName(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="text"
                placeholder="New task name"
                className="border border-gray-300 rounded px-2 py-1 mr-2"
                value={name}
                onChange={handleChange}
            />
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-bold py-1 px-3 rounded">
                Add task
            </button>
        </form>
    );
}

export default AddTaskForm;
