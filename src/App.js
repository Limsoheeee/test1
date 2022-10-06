import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const[todo,setTodo]=useState('');
  const[TodoList]=useState(false)
  
  console.log(todo)
  return (
    <div className="App">
    <div className="header"></div>
    <input type="text" onChange={(e)=>setTodo(e.target.value)} value={todo}/>
    <button onClick={()=>{
        <TodoList />
    }}>추가하기</button>
    <h1>TODO</h1>
    </div>
  );
}

function TodoList(props) {

  return (
 <div className="todo-box">
 <h3>{props.setTodo}</h3>
 </div>
  );
}

export default App;
