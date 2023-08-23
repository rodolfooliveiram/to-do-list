import { X } from '@phosphor-icons/react';
import styles from './DeleteTaskModal.module.css';

interface DeleteTaskProps {
  onDeleteTaskConfirmation: (response: boolean) => void;
}
export default function DeleteTaskModal({
  onDeleteTaskConfirmation,
}: DeleteTaskProps) {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modal}>
        <h1>Deseja remover essa tarefa da lista?</h1>

        <button
          className={styles.closeModalButton}
          onClick={() => onDeleteTaskConfirmation(false)}
          title='Fechar'
        >
          <X size={20} />
        </button>

        <div className={styles.modalButtonsContainer}>
          <button
            className={styles.deleteBtn}
            onClick={() => onDeleteTaskConfirmation(true)}
          >
            Remover
          </button>
          <button
            className={styles.cancelBtn}
            onClick={() => onDeleteTaskConfirmation(false)}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
