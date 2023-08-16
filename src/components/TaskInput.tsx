import { PlusCircle } from '@phosphor-icons/react';
import styles from './TaskInput.module.css';

export function TaskInput() {
  return (
    <form className={styles.taskForm}>
      <input type='text' name='' id='' placeholder='Adicione uma nova tarefa' />
      <button type='submit'>
        Criar <PlusCircle size={18} color='#fafafa' />
      </button>
    </form>
  );
}
