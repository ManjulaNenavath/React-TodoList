import React,{useState,useRef} from 'react';

import './App.css';


function App() {

  const[TodoList,setTodoList]= useState([]);
  const[Task,setTask]=useState("");
  const inputTask= useRef(null);
  const clickHandler =()=>{
    setTodoList([...TodoList,{task: Task , completed : false}]);
    inputTask.current.value="";
    setTask("");
  };
  const dButtonHandler=(val)=>{

    setTodoList(
      TodoList.filter((task)=>{
      return task.task !== val;
    }));
  };

  const cButtonHandler=(val)=>{
    setTodoList(
      TodoList.map((task)=>{
        return task.task == val
        ? {task : val ,completed: true}
        :{task:task.task,completed: task.completed ? true : false}

      })
    )

  };
  return(
    <div className="App">
      <h1 >Todo List</h1>
      <input ref={inputTask} type="text" placeholder="Text..."
      onKeyDown={(event)=>{if(event.keyCode==13)clickHandler();}}
      onChange={(event)=>{setTask(event.target.value)}}/>
      <button onClick={clickHandler}>Add Task</button>
      <hr/>
      <ul>
        {TodoList.map((val,key)=>{
          return(
            
              <div id="task" >
              <li key ={key}>{val.task}</li> 
              <button onClick={()=>cButtonHandler(val.task)}>Complete</button>
              <button onClick={()=>dButtonHandler(val.task)}>Delete</button>
              <p>{val.completed ? <p>Task Compketed</p> : <p>Task Not Completed</p>}</p>
            </div>
          

          ) 
        })
          
        }
      </ul>

    </div>
  )
  
}

export default App;
