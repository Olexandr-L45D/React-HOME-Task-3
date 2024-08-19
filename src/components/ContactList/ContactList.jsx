// ContactList
import Task from '../Contact/Contact';
import css from './ContactList.module.css';

export default function TaskList({ tasks, onDelete }) {
    return (
        <ul className={css.list}>
            {tasks.map((task) => (
                <li className={css.item} key={task.id}>
                    <Task data={task} onDelete={onDelete} />
                </li>
            ))}
        </ul>
    );
}


// key={task.id}>
