import React, {} from 'react';
import './Todos.css';
import { DeleteTwoTone } from '@ant-design/icons';


function TodoItem({ todo, index, completeTodo, removeTodo }) {
    return (
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo.text}
        <div>
          <button onClick={() => completeTodo(index)}>Completed ?</button>
        </div>
        <div>
          <DeleteTwoTone twoToneColor="#ff1919" onClick={() => removeTodo(index)} className={'mr-1 align-middle'}/>
        </div>
      </div>
    );
  }

export default TodoItem;
