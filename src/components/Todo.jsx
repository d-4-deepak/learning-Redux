import { useSelector } from "react-redux"
import {MdDeleteForever} from "react-icons/md"
export const Todo = ()=>{
   const task =  useSelector((state)=>state.task);

//    console.log(task);
   
    return(
        <div className="container">
            <div className="todo-app">
                <h1>
                    <i className="fa-regular fa-pen-to-square"></i> To-do List:
                </h1>
                <div className="row">
                    <form>
                        <input type="text" id="input-box" placeholder="Add a new task"/>
                        <button>Add Task</button>
                    </form>
                </div>
                <ul id="list-container">
                    {
                        task.map((curTask,index)=>{
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