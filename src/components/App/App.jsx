
import TaskList from '../ContactList/ContactList';
import initialTasks from '../../../tasks.json';
import Form from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import css from './App.module.css';
import { useState } from 'react';

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState('');

  const addTask = (newTask) => {
    setTasks((prevTasks) => {
      return [...prevTasks, newTask];
    });
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== taskId);
    });
  };

  const visibleTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1 className={css.title}>MobBox</h1>
      <Form onAdd={addTask} />
      <SearchBox value={filter} onFilter={setFilter} />
      <TaskList tasks={visibleTasks} onDelete={deleteTask} />
    </>
  );
}
