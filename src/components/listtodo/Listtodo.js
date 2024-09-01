import React from 'react';
import Addelement from "./Addelement";

export const Listtodo = ({ Todo,handleremove,checkTodo}) => {
  return (
    <div>
      <div className="controls">
        <div className="filters">
          <span className="active" id="all">
            All
          </span>
          <span id="pending">Pending</span>
          <span id="completed">Completed</span>
        </div>
      </div>
      {Todo.map((el, index) => (
        <Addelement key={index} el={el} handleremove={handleremove} checkTodo={checkTodo}/>
      ))}
      
    </div>
    
  );
};

export default Listtodo;

