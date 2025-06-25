import { useDispatch, useSelector } from "react-redux"
import {MdDeleteForever} from "react-icons/md"
import { useState } from "react";
import { addTask, deleteTask } from "../store";
export const Todo = ()=>{

   const [task,setTask] = useState("");

   const tasks =  useSelector((state)=>state.task);
    
   const dispatch = useDispatch();
//    console.log(task);
   const handleFormSubmit = (e)=>{
    e.preventDefault();
    dispatch(addTask(task));
     setTask("")
   }

   const handleTaskDelete = (index)=>{
    dispatch(deleteTask(index))
   }
    return(
        <div className="container">
            <div className="todo-app">
                <h1>
                    <i className="fa-regular fa-pen-to-square"></i> To-do List:
                </h1>
                <div className="row">
                    <form onSubmit={handleFormSubmit}>
                        <input type="text" id="input-box" placeholder="Add a new task"
                        value={task}
                        onChange={(e)=>setTask(e.target.value)}
                        />
                        <button>Add Task</button>
                    </form>
                </div>
                <ul id="list-container">
                    {
                        tasks.map((curTask,index)=>{
                            return <li key={index}  className="flex items-center justify-between p-2 border-b" >
                               <span>{index}: {curTask}</span>
                                <MdDeleteForever
                                    className="text-xl text-red-500 cursor-pointer"
                                    onClick={() => handleTaskDelete(index)}
                                />
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}