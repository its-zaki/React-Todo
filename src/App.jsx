import { useState } from 'react'


function App() {
  const [text, setText] = useState("")
  const [todo, setTodo] = useState([])

  function addtodo(e){
    e.preventDefault();
    todo.push(text)
    setTodo([...todo])
    console.log(todo);
    setText("")
    
  }
  function deletetodo(index){
    const newarr = [...todo]
    newarr.splice(index , 1)
    console.log(newarr);    
    setTodo(newarr)
 
  }
  
  function edittodo(index){
    const newarr = [...todo]
    let edit = prompt("enter your todo")
    if(edit === ""){
      alert("enter any value")
      return;
    }
    newarr[index]= edit
    setTodo(newarr)
  }

  

  return (
    <>
      <h1 class="heading">Todo-App</h1>
      <form class="form" onSubmit={addtodo}>
        <input onChange={(e)=> setText(e.target.value)} value={text} type="text" placeholder='Enter your todo' class="user_input" />
        <button type='submit' class="submit-btn">Submit</button>
      </form>
      <ul class="li-div">
        {todo.map((item , index)=>{
          return (
            <li key={index} class="todo-li">  {item} <button class="del" onClick={()=>{deletetodo(index)}}>Delete</button><button class="edit" onClick={()=>{edittodo(index)}}>Edit</button></li>
          )
        })}
      </ul>
    </>
  )
}

export default App
