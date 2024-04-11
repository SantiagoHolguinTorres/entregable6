import { Link } from "react-router-dom"
import './styles/principalHeader.css';
import { useState } from "react";

const PrincipalHeader = () => {

  const [menu, setMenu] = useState(false)
const toggleNav = () =>{ 

setMenu(!menu)

}

const handlecloseNav = () => {
  setMenu(false)
}

  return (
    <header className="cabecera">
      <nav className="cabecera__h1">
        <img src="logo.ico" alt="" className="logo" />
        <h1 className="title">
          <Link to="/">Stay Here Tonight</Link>
        </h1>
      </nav> 
      <button className="cabecera__button">
      <i onClick={toggleNav} className={`bx bx-menu celular `}></i>
      </button>

      
      <div className={`cabecera__nav ${menu ? 'isActived' : ''}`}>
        <ul className={`cabecera__ul`}>
          <li className="cabecera__li">
            <Link onClick={handlecloseNav} to="/register">Register</Link>
          </li>
          <li className="cabecera__li">
            <Link onClick={handlecloseNav} to="/login">Login</Link>
          </li>
          <li className="cabecera__li">
            <Link onClick={handlecloseNav} to="/reservations">Reservations</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default PrincipalHeader