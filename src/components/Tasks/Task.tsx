import Empty from './Empty'
import style from './Task.module.css'

import TrashIcon from './TrashIcon';
export interface task {
    id: number;
    texto: string;
    checked: boolean;
}

export interface TaskProps {
    tasks: task[];
    clickTask: (id: number) => void;
    deleteTask: (id: number) => void;
}


export default function Task({ tasks, clickTask, deleteTask }: TaskProps) {
    const isEmpty = tasks.length === 0;
    const qtn_tasksCompleted = tasks.filter(task => task.checked).length === 0 ? 0 : `${tasks.filter(task => task.checked).length} de ${tasks.length}`;

    return (
        <div className={style.container_task}>
            <div className={style.box_task}>
                <div className={style.header}>
                    <span className={style.create_task_label}>Tarefas criadas <span className={style.count_form}> {tasks.length} </span></span>
                    <span className={style.complete_task_label}>Concluídas <span className={style.count_form}>{qtn_tasksCompleted}</span></span>
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
                                        <input onChange={() => clickTask(task.id)} type="checkbox" />
                                        <span className={style.text_task}>{task.texto}</span>
                                        <TrashIcon
                                            className={style.icon_trash}
                                            onClick={() => deleteTask(task.id)}
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