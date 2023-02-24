
import { useTodos } from "../hooks/"
import { TodoList, TodoAdd } from "./"



export const TodoApp = () => {

    const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo, todoCount,pendingTodo  } = useTodos();

        

  return (
    <>
        <h1>TodoApp { todoCount }, <small>pendientes: { pendingTodo }  </small></h1>
        <hr />

        <div className="row">
            <div className="col-7">

                <TodoList 
                    todos={ todos } 
                    onDeleteTodo = { handleDeleteTodo } 
                    onToggleTodo = { handleToggleTodo }
                />

            </div>

            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                
                <TodoAdd  onNewTodo={ handleNewTodo }/>
                
            </div>

        </div>


    </>
  )
}
