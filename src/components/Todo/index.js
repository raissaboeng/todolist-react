import React from 'react';
import iconDelete from '../../assets/delete.svg';
import {Task} from './styled';

export default function Todo(props) {
    return (
  
        <Task>
            <input 
            id={props.id} 
            type="checkbox" 
            defaultChecked={props.completed}      
            onChange={() => props.toggleTaskCompleted(props.id)} 
            />
            <label htmlFor={props.id}>
              {props.name}
            </label>

          <div>
            <button type="button" onClick={() => props.deleteTask(props.id)}>
                <img src={iconDelete}  alt="icon-delete" />
            </button>
          </div>
        </Task>

    );
  }

  