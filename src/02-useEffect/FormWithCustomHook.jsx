// import { useEffect } from "react"
import { useForm } from "../hooks/useForm"


export const FormWithCustomHooks = () => {

const { formState, onInputChange, username, email, password, onResetForm } = useForm({
    username: '',
    email: '',
    password: ''
})

// const { username, email, password } = formState;

  return (
    <>
        <h1>Formulario con custom Hook</h1>
        <hr />

        <input 
            type="text" 
            className="form-control"
            placeholder="Username"
            name="username"
            value={ username }
            onChange= { onInputChange }
        />

        <input 
            type="email" 
            className="form-control mt-2"
            placeholder="usuario@correo.com"
            name="email"
            value={ email }
            onChange= { onInputChange }
        />
        
        <input 
            type="password" 
            className="form-control mt-2"
            placeholder="Contraseña"
            name="password"
            value={ password }
            onChange= { onInputChange }
        />

        <hr />

        <button  onClick={ onResetForm } className="btn btn-primary" >Borrar</button>


    
    
    </>
  )
}
