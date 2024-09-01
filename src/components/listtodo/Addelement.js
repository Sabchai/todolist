import React from 'react';
import './Addelement.css';

const Addelement = ({ el, handleremove, checkTodo }) => {
  return (
    <div className='todoelement'>
      <ul className="task-box">
        {el.text}
      </ul>
      <button
        className="custom-btn btn-5"
        onClick={() => checkTodo(el.id)}
      >
        {el.isDone ? "Done" : "Not yet"}
      </button>
      <button
        className="custom-btn btn-7"
        onClick={() => handleremove(el.id)}
      >
        <span>Remove</span>
      </button>
    </div>
  );
};

export default Addelement;


