import style from './AddTask.module.css'
import Plus from '../../assets/plus.svg'
export default function AddTask() {
    return (
        <div className={style.box_input} >
            <div className={style.field_search}>
            <input type="text" placeholder="Digite a tarefa" />
            <button>Criar <img src={Plus} /></button>
            </div>
        </div>
    )
}