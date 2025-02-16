import style from './Task.module.css'
import clip from '../../assets/empty.svg'
export default function Empty() {
    return (
       <div className={style.empty_box}>
            <img
            src={clip}
            />
            <p className={style.empty_title}>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
       </div>
    )
}