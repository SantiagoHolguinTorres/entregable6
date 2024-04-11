import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth"
import UserLogged from "../components/LoginPage/UserLogged"
import { useState } from "react"
import './styles/LoginPage.css'

const LoginPage = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user"))) 
  const {register, handleSubmit, reset} = useForm()

  const {loginUser} = useAuth()

  const submit = data =>{
    loginUser(data)
    reset({
      email: '',
      password: ''
    })

  }

  if (localStorage.getItem('token')){
    return(
      <UserLogged setUser={setUser} user={user}/>
    )
  }
  return (
    <div className="register__card">
      <form onSubmit={handleSubmit(submit)} className="form__card">
        <div className="container__icono">
        <i class='bx bxs-user-circle icono'></i>
        </div>
        <label className="register__label">
          <span>Email</span>
          <input {...register('email')} type="email" />
        </label>
        <label className="register__label">
          <span>Password</span>
          <input {...register('password')} type="password" />
        </label>
        <div className="boton">
        <button className="btn">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage