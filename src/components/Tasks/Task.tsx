import Empty from './Empty'
import style from './Task.module.css'

import TrashIcon from './TrashIcon';
export interface task {
    id: number;
    texto: string;
}

export interface TaskProps {
    tasks: task[];
}


export default function Task({ tasks }: TaskProps) {
    const isEmpty = tasks.length === 0;
    return (
        <div className={style.container_task}>
            <div className={style.box_task}>
                <div className={style.header}>
                    <span className={style.create_task_label}>Tarefas criadas <span className={style.count_form}> 0 </span></span>
                    <span className={style.complete_task_label}>Concluídas <span className={style.count_form}>0</span></span>
                </div>
                <div>
                    {
                        isEmpty ?
                            <Empty />
                            :
                            <ul className={style.list_task}>
                                {
                                  tasks.map(task => (
                                    <li key={task.id} >
                                        <input type="checkbox" />
                                        <span className={style.text_task}>{task.texto}</span>
                                        <TrashIcon
                                            className={style.icon_trash}
                                        />
                                    </li>
                                  ))
                                }
                            </ul>
                    }

                </div>
            </div>
        </div>
    )
}