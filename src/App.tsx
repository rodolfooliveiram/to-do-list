import './globals.css';
import styles from './App.module.css';
import logo from './assets/logo.svg';
import { TaskBoard } from './components/TaskBoard';

function App() {
  return (
    <>
      <header className={styles.header}>
        <img src={logo} alt='To-do App logo' />
        <h1>
          to<span>do</span>
        </h1>
      </header>
      <main className={styles.container}>
        <TaskBoard />
      </main>
    </>
  );
}

export default App;
