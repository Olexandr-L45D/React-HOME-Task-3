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


// import css from './ContactList.module.css';
// import Contact from "../Cont/Cont"

// export default function ContactList({ objects, onDelete }) {
//     return (
//         <ul className={css.list}>
//             {objects.map((task) => (
//                 <li className={css.item} key={task.id} >

//                     <Contact obj={task} onDelete={onDelete} />
//                 </li>
//             ))}
//         </ul>
//     );
// }

// key={task.id}>
