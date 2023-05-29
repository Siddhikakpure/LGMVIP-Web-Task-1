import React from "react";
const TodoList=(props)=>{

  const doneTask=()=>{
    return(
        <>
            
        </>
    )
  };

    return <>
        <div className="todosty">
            <i className="fa fa-times" 
            onClick={doneTask}>
            </i>
            <li>{props.text}</li>

        </div>
    </> 

}
export default TodoList;