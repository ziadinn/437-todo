function AddTaskForm() {
    return (
        <div>
            <input placeholder="New task name" className="border border-gray-300 rounded px-2 py-1 mr-2"/>
            <button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-bold py-1 px-3 rounded">
                Add task
            </button>
        </div>
    );
}

export default AddTaskForm;
