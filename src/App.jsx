
import React, { useState } from "react";
// import TodoList from "./TodoList";
import './App.css';

const App=()=>{

    const [inputTask,setinput]=useState();
    const [items,setitems]=useState([]);

    const itemEvent =(event)=>{
        setinput(event.target.value);
    };
    const listof_item=()=>{
        setitems((oldItems)=>{
            return [...oldItems,inputTask]
        })
        setinput("");
    };

   
    const [Done,setDone]=useState(false);
    const handleClick = (id) => {
        setDone(!Done)
        if (Done===true) {
            const done=document.getElementById("tick");
            done.style.visibility="visible";
            const task=document.getElementById("style");
            task.style.textDecoration="line-through";
            task.style.fontStyle="italic";
            task.style.fontWeight="300";
        }
        else {
            const done=document.getElementById("tick");
            done.style.visibility="hidden";
            const task=document.getElementById("style");
            task.style.textDecoration="none";
            task.style.fontStyle="normal";
            task.style.fontWeight="500";
        }
    };
    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>To Do list</h1>
                    <br />
                    <input type="text"
                        
                        placeholder="Add Task Here"
                        onChange={itemEvent}
                        value={inputTask}
                     />
                    <button onClick={listof_item}> + </button>
                    <ul>
                        
                        {items.map( (itemValue,index)=>{
                            
                            return(<div className="todosty">
                                <i id="tick" class="fa fa-check"></i>
                                <li id="style" 
                                key={index.id}
                                style={{textDecoration:index.id ?  'line-through' : 'none'}}>{itemValue}
                                </li>
                                <i className="fa fa-times "
                                key={index.id}
                                onClick={() => handleClick(index)}
                                >
                                </i>
                            </div>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
};

 export default App;

