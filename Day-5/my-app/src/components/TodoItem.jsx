

function TodoItem({id,status,title ,handleToggle, handleDelete}){

    const toggleButton =() => handleToggle(id)
    const deleteButton =() => handleDelete(id)
    return(
<div style={{border:"1px solid red", margin :"10px",padding:"10px"}}>
<p>{title} - {status ? "Completed": "Not Completed"}</p>
<button onClick={toggleButton}>Toggle</button>
<button onClick={deleteButton}>DELETE</button>
</div>
    )
}

export default TodoItem