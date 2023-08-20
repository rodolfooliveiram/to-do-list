import { ClipboardText, PlusCircle } from '@phosphor-icons/react';
import styles from './TaskBoard.module.css';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Task } from './Task';

export interface TaskType {
  isTaskCompleted: boolean;
  content: string;
}

export function TaskBoard() {
  const [newTask, setNewTask] = useState<TaskType>({
    isTaskCompleted: false,
    content: '',
  });

  const [taskList, setTaskList] = useState<TaskType[]>([]);

  const isTaskContentEmpty = newTask.content.length == 0;

  function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
    setNewTask({ ...newTask, content: event.target.value });
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    setTaskList([...taskList, newTask]);
    setNewTask({ ...newTask, content: '' });
  }

  function orderTaskList(taskList: TaskType[]) {
    return taskList.sort(
      (taskA, taskB) =>
        Number(taskA.isTaskCompleted) - Number(taskB.isTaskCompleted)
    );
  }

  function handleSetTaskCompleted(taskCompleted: boolean, taskContent: string) {
    // const tempTaskList = taskList.map((task) => {
    //   if (task.content == taskContent) {
    //     task.isTaskCompleted = !taskCompleted;
    //   }
    //   return task;
    // });
    // setTaskList([...tempTaskList]);

    const updatedTaskList = taskList.filter((task) => {
      if (task.content !== taskContent) {
        return task;
      }
    });

    const updatedTask: TaskType = {
      isTaskCompleted: !taskCompleted,
      content: taskContent,
    };

    updatedTaskList.push(updatedTask);

    // updatedTaskList.sort(
    //   (taskA, taskB) =>
    //     Number(taskA.isTaskCompleted) - Number(taskB.isTaskCompleted)
    // );

    const orderedAndUpdatedTaskList = orderTaskList(updatedTaskList);

    setTaskList([...orderedAndUpdatedTaskList]);
  }

  return (
    <>
      <form className={styles.taskForm}>
        <input
          onChange={handleNewTask}
          value={newTask.content}
          type='text'
          placeholder='Adicione uma nova tarefa'
        />
        <button
          type='submit'
          onClick={handleCreateNewTask}
          disabled={isTaskContentEmpty}
        >
          Criar <PlusCircle size={18} color='#fafafa' />
        </button>
      </form>

      <div className={styles.taskOverview}>
        <p className={styles.createdTasksCounter}>
          Tarefas Criadas<span>0</span>
        </p>
        <p className={styles.tasksDoneCounter}>
          Concluídas<span>0</span>
        </p>
      </div>

      {taskList.length == 0 ? (
        <div className={styles.emptyTaskList}>
          <ClipboardText size={56} />
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus items a fazer</p>
        </div>
      ) : (
        <ul>
          {taskList.map((task) => {
            return (
              <Task task={task} onSetTaskCompleted={handleSetTaskCompleted} />
            );
          })}
        </ul>
      )}
    </>
  );
}
