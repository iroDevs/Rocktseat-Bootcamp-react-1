import style from './AddTask.module.css'
import Plus from '../../assets/plus.svg'
import { useState } from 'react';

interface AddTaskProps {
    addTask: (task: string) => void;
}
export default function AddTask({ addTask }: AddTaskProps) {
    const [text, setText] = useState('');

    function handleAddTask() {
        console.log(text);

        addTask(text);
        setText('');
    }

    return (
        <div className={style.box_input} >
            <div className={style.field_search}>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Digite a tarefa" />
            <button onClick={handleAddTask}>Criar <img src={Plus} /></button>
            </div>
        </div>
    )
}