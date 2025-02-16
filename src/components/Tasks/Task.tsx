import Empty from './Empty'
import style from './Task.module.css'

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
                            <h1>Lista</h1>
                    }

                </div>
            </div>
        </div>
    )
}