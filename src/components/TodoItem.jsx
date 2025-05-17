import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function TodoItem({ taskName }) {
    return (
        <li className="flex gap-4">
            <label>
                <input type="checkbox"/> {taskName}
            </label>
            <button className="text-gray-600">
                <FontAwesomeIcon icon={faTrash} title="Delete task" />
            </button>
        </li>
    );
}

export default TodoItem;
