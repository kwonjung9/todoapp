import { useEffect, useState } from "react";
import "./App.scss";
import Todoinsert from "./conponents/Todoinsert";
import TodoTemplate from './conponents/TodoTemplate';
import { Value } from "sass";
import TodoList from "./conponents/TodoList";

const App = () => {
  //id, text, checked
  const [todos,setTodos]=useState(()=>{
    //초기값 설정
    const load = localStorage.getItem('todos');
    return load ? JSON.parse(load) : []; //parse는 배열로 바꿔주는거
  });
  useEffect(()=>{//set 저장하는 거 get 가져오는거
    localStorage.setItem('todos',JSON.stringify(todos));//string 어쩌구는 문자열로 다 바꿔주는거
  },[todos])

  const handleInsert = (Value)=>{
    // const todo ={id: todos.length+1, text:Value, checked:false};
    const todo ={id: Date.now(), text:Value, checked:false};
    setTodos([...todos,todo]);
  }

  const handleChecked = (id)=>{
    const toggle = todos.map((list)=>{
      return (list.id === id) ? {...list,checked:!list.checked} : list;
    })
    setTodos(toggle);
    setTodos(
      todos.map((list)=>{
        return list.id === id ? { ...list, checked:!list.checked} : list
      })
    );
  }

  const handleDelete =(id)=>{
    //id만 제외하고 todos배열을 구성
    const result = todos.filter((list)=>{
      return list.id !== id;
    });
    setTodos(result);
  }
  return (
    <div className='app'>
      <TodoTemplate>
        <Todoinsert onInsert={handleInsert}/>
        <TodoList todos={todos} onChecked={handleChecked} onRemove={handleDelete} />
      </TodoTemplate>
    </div>
  );
};

export default App;