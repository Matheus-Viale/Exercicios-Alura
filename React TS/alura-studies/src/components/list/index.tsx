import React, {useState} from "react";
import Item from "./item";
import style from './List.module.scss';

function List(){
    const [tarefas, setTarefas] = useState([{
        tarefa: 'React',
        tempo: '02:00:00'
    },{
        tarefa: 'Javascript',
        tempo: '01:00:00'
    }])
    return(
        <aside className={style.listaTarefas}>
            <h2 onClick={() =>{
                setTarefas([...tarefas, {tarefa: "Estudar Estado", tempo: "05:00:00"}])
            }}> Estudos do Dia </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                        key={index}
                        tarefa={item.tarefa}
                        tempo={item.tempo}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;