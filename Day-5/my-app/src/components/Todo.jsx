import { useState } from "react"
import AddTodo from "./AddTodo"
import TodoItem from "./TodoItem"

function Todo() {

  const [todo,setTodo] = useState([])
  function handleTodo(inputVal){
   const todoItem ={
    id:Math.random()+inputVal + Date.now(),
    title:inputVal,
    status: false
   }
   const updateTodos = [...todo,todoItem]
    setTodo(updateTodos)
  }

  //ToggleButton
  const handleToggle =(id)=>{
const updateTodos = todo.map((todoItem) =>{
    if(todoItem.id === id){
        return {
            ...todoItem,
            status :!todoItem.status
        }
    }else{
        return todoItem
    }
})
setTodo(updateTodos)
  }

  //DeleteButton

  const handleDelete =(id) =>{
    const updateTodos =  todo.filter((todoItem)=>{
        if(todoItem.id === id){
            return false
        }else{
            return true
        }
    })
    setTodo(updateTodos)
  }
  return (
    <div >
     <div>
    <AddTodo handleTodo ={handleTodo}/>
      <div>
        {/* {list all todo's} */}
      {todo.map((todos)=>(
        <TodoItem 
           key ={todos.id}
          status = {todos.status}
          title ={todos.title}
          id= {todos.id}
          handleToggle ={handleToggle}
          handleDelete = {handleDelete}/>
         
        ))}
      </div>
     </div>
    </div>
  );
}

export default Todo;
