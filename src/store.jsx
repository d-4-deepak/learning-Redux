import {createStore} from "redux"


const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";

const initialState ={
    task:[], 
    isLoading:false,
}

const taskReducer = (state=initialState,action)=>{
    switch(action.type){
        case  ADD_TASK:
            return {
                ...state,
                task:[...state.task,action.payload],
            };
         case DELETE_TASK: {
                const updatedTask = state.task.filter((curTask, index) => index !== action.payload);
                return {
                    ...state,
                    task: updatedTask,
                };
            }
    

         default:
            return state;   
    }

};

//`Step 2 create the Redux Store using the reducer

export const store = createStore(taskReducer);
console.log(store)

console.log("initial State: ", store.getState());

//Step 4: Dispatch an action to add a task

// store.dispatch({type:ADD_TASK,payload:"learn redux also"})
// console.log("Updated State: ", store.getState());

// store.dispatch({type:ADD_TASK,payload:"Buy Mango"})
// console.log("Updated State: ", store.getState());

// store.dispatch({type:DELETE_TASK,payload:1})
// console.log("Deleted State: ", store.getState());

export const addTask = (data)=>{
    return {
        type:ADD_TASK,
        payload:data
    }
}
// store.dispatch(addTask("deepak you created action creators"))
// store.dispatch(addTask("buy mango"))
// store.dispatch(addTask("buy banana"))
console.log("Deleted State: ", store.getState());


export const deleteTask = (data)=>{
return {
    type:DELETE_TASK,
    payload:data,
}
}

store.dispatch(deleteTask(0));
console.log("Deleted State: ", store.getState());
