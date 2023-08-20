import styles from './Task.module.css';
import { TaskType } from './TaskBoard';

interface TaskProps {
  task: TaskType;
  onSetTaskCompleted: (taskCompleted: boolean, taskContent: string) => void;
}

export function Task({ task, onSetTaskCompleted }: TaskProps) {
  return (
    <li className={styles.task}>
      <input
        type='checkbox'
        checked={task.isTaskCompleted}
        onClick={() => onSetTaskCompleted(task.isTaskCompleted, task.content)}
        id=''
      />
      <p>{task.content}</p>
    </li>
  );
}
