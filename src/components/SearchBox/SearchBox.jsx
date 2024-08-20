import css from './SearchBox.module.css';

export default function SearchBox({ value, onFilter }) {
    return (
        <div className={css.item}>
            <p className={css.label}>Finde contacts by name</p>
            <input
                type="text"
                value={value}
                onChange={(e) => onFilter(e.target.value)}
            />
        </div>
    );
}


// export default function SearchBox({ value, onFilter }) {
//     return (
//         <div className={css.item}>
//             <h5 className={css.paragraf}>Finde contacts by name</h5>
//             <input
//                 type="text"
//                 value={value}
//                 onChange={(e) => onFilter(e.target.value)}
//             />
//             <p>{value}</p>
//         </div>
//     );
// }


