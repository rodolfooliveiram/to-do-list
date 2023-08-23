import { Trash } from '@phosphor-icons/react';
import styles from './Task.module.css';
import { TaskType } from './TaskBoard';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import DeleteTaskModal from './DeleteTaskModal';

interface TaskProps {
  task: TaskType;
  onSetTaskCompleted: (taskCompleted: boolean, taskContent: string) => void;
  onDeleteTask: (taskContent: string) => void;
}

export function Task({ task, onSetTaskCompleted, onDeleteTask }: TaskProps) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  function deleteTaskConfirmation(response: boolean) {
    if (response) {
      onDeleteTask(task.content);
      setShowDeleteModal(false);
    } else {
      setShowDeleteModal(false);
    }
  }

  return (
    <li className={styles.task}>
      <div className={styles.taskContent}>
        <input
          type='checkbox'
          onChange={() =>
            onSetTaskCompleted(task.isTaskCompleted, task.content)
          }
          checked={task.isTaskCompleted}
        />
        <p className={task.isTaskCompleted ? styles.taskCompleted : ''}>
          {task.content}
        </p>
      </div>
      <button
        className={styles.deleteBtn}
        onClick={() => setShowDeleteModal(true)}
      >
        <Trash size={22} />
      </button>
      {showDeleteModal &&
        createPortal(
          <DeleteTaskModal
            onDeleteTaskConfirmation={(response: boolean) =>
              deleteTaskConfirmation(response)
            }
          />,
          document.body
        )}
    </li>
  );
}
