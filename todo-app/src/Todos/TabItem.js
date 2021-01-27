import React, {useState} from 'react';

function TabItem({ todo}) {

    return (
      <div
        className="todo"
      >
        {todo.text}
      </div>
    );
  }

export default TabItem;