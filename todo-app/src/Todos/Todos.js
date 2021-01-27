import React , { useState } from 'react';
import { Tabs} from "antd";
import TodoItem from "./TodoItem";
import TabItem from "./TabItem";
import './Todos.css';


const { TabPane } = Tabs;


function Todos() {
    const [todos, setTodos] = useState([]);

    const addTodo = text => {
      const newTodos = [...todos, { text }];
      setTodos(newTodos);
    };
  
    const completeTodo = index => {
      const newTodos = [...todos];
      newTodos[index].isCompleted = true;
      setTodos(newTodos);
    };
  
    const removeTodo = index => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    };
  
    return (
      <div className="'p-5 border m-5 md:m-12 lg:m-20'">
        <div className="todo-list">
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
          <TodoForm addTodo={addTodo} />
        </div>
        <div className={'mt-5'}>&nbsp;</div>
        <div>
              <Tabs defaultActiveKey="1" type={'card'}>
                <TabPane tab="All" key="1">
                     <div className={'bg-gray-100 mt-5 p-5'}>
                         <ul>
                             {todos.map((todo, tab) => {
                                 return <TabItem todo={todo}/>
                             })}
                         </ul>
                     </div>
                 </TabPane>
                 <TabPane tab="Active" key="2">
                 <div className={'bg-gray-100 mt-5 p-5'}>
                         <ul>
                         {todos.map((todo, tab) => {
                                if(!todo.isCompleted)
                                {
                                 return <TabItem todo={todo}/>
                                }
                             })}
                         </ul>
                 </div>
                 </TabPane>
                 <TabPane tab="Completed" key="3">
                 <div className={'bg-gray-100 mt-5 p-5'}>
                         <ul>
                         {todos.map((todo, tab) => {
                                if(todo.isCompleted)
                                {
                                return <TabItem todo={todo}/>
                                }
                             })}
                         </ul>
                 </div>
                 </TabPane>
             </Tabs>
        </div>
      </div>
      
    );
  }

//////////////////////////////////////////////////This is the form text box for the task
function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder={'Task...'}
        />
      </form>
    );
  }

export default Todos;