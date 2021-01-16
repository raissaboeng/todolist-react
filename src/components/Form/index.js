import React, {useState} from 'react';

import {FormNewTask} from './styled';

export default function Form(props){

    const [name, setName] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if(name !== ""){
            props.addTask(name);
            setName("");
        }else{
            alert("Tarefa vazia!");
        }
       
    }

    function handleChange(e){
        setName(e.target.value);
    }

    return (   
    <FormNewTask onSubmit={handleSubmit}>
        <input
            id="new-todo-input"
            name="text"
            placeholder="O que você quer fazer hoje?"
            autoComplete="off"
            value={name}
            onChange={handleChange}
            />
            <div className="addTask">
                <button className = "addButton">+</button>
            </div>
       
    </FormNewTask>
    )
 
}