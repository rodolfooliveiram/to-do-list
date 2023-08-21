import { Trash } from '@phosphor-icons/react';
import styles from './Task.module.css';
import { TaskType } from './TaskBoard';

interface TaskProps {
  task: TaskType;
  onSetTaskCompleted: (taskCompleted: boolean, taskContent: string) => void;
}

export function Task({ task, onSetTaskCompleted }: TaskProps) {
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
      <button className={styles.deleteBtn}>
        <Trash size={22} />
      </button>
    </li>
  );
}
