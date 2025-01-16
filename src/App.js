import { useState } from "react";
import "./App.scss";
import Todoinsert from "./conponents/Todoinsert";
import TodoTemplate from './conponents/TodoTemplate';
import { Value } from "sass";
import TodoList from "./conponents/TodoList";

const App = () => {
  //id, text, checked
  const [todos,setTodos]=useState([
    {id:1, text:"리액트의 기초 알아보기", checked:false},
    {id:2, text:"컴포넌트 스타일링 해보기", checked:true}
  ]);
  const handleInsert = (Value)=>{
    const todo ={id: todos.length+1, text:Value, checked:false};
    setTodos([...todos,todo]);
  }
  const handleChecked = (id)=>{
    const toggle = todos.map((list)=>{
      return (list.id === id) ? {...list,checked:!list.checked} : list;
    })
    setTodos(toggle);
    // setTodos(
    //   todos.map((list)=>{
    //     return list.id === id ? { ...list, checked:!list.checked} : list
    //   })
    // );
  }
  return (
    <div className='app'>
      <TodoTemplate>
        <Todoinsert onInsert={handleInsert}/>
        <TodoList todos={todos} onChecked={handleChecked} />
      </TodoTemplate>
    </div>
  );
};

export default App;