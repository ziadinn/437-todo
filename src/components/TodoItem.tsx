import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface TodoItemProps {
  id: string;
  taskName: string;
  completed: boolean;
  onToggleCompleted: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

function TodoItem({ id, taskName, completed, onToggleCompleted, onDeleteTask }: TodoItemProps) {
    return (
        <li className="flex gap-4 items-center py-1">
            <label>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => onToggleCompleted(id)}
                    className="mr-2"
                />
                {taskName}
            </label>
            <button onClick={() => onDeleteTask(id)} className="text-gray-600 hover:text-red-600">
                <FontAwesomeIcon icon={faTrash} title="Delete task" />
            </button>
        </li>
    );
}

export default TodoItem; 