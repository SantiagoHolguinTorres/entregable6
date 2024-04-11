import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import "./styles/RegisterPage.css";

const RegisterPage = () => {
  const { register, handleSubmit, reset } = useForm();

  const { registerUser } = useAuth();

  const submit = (data) => {
    registerUser(data);
    reset({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      gender: "unknown",
    });
  };
  return (
    <div className="register__card">
      <form onSubmit={handleSubmit(submit)} className="form__card">
        <h2 className="register__title">Register</h2>
        <label className="register__label">
          <span>First Name</span>
          <input {...register("firstName")} type="text" />
        </label>
        <label className="register__label">
          <span>Last Name</span>
          <input {...register("lastName")} type="text" />
        </label>
        <label className="register__label">
          <span>Email</span>
          <input {...register("email")} type="email" />
        </label>
        <label className="register__label">
          <span>Password</span>
          <input {...register("password")} type="password" />
        </label>
        
        <label className="register__label">
          <span>Gender</span>
          <select className="seleccion" {...register("gender")}>
            <option></option>
            <option value="unknown">Unknown</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">I prefire don't say it</option>
            
          </select>
        </label>

        
        <div className="boton">
        <button className="btn">Submit</button>
        </div>
        
      </form>
    </div>
  );
};

export default RegisterPage;
