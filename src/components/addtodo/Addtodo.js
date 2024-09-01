import React from 'react'
import "./Addtodo.css"

const Addtodo = () => {
  return (
    <div style={{display:"flex"}}>
      <div className="task-input">
      <ion-icon name="create-outline" />
      <input type="text" placeholder="Add a New Task + Enter" />
    </div>
    <button className="clear-btn"> Add </button>
      </div>
  )
}

export default Addtodo