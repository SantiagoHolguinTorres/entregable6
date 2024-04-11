import './styles/UserLogged.css'

const UserLogged = ({setUser, user}) => {

    
    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUser()
    }

  return (
    <article className='profile'>
      <div className='profile__container'>

      
        <header className='container__logo'>
            <img className='logo' src={user.gender === 'female'
             ? 'female.png' 
             : 'male.png'
            }
             alt="" 
             />
        </header>
        <h2 className='name'>{user.firstName} {user.lastName}</h2>
        
          <ul className='datas'>
            <li>{user.email}</li>
            <li>{user.gender}</li>
          </ul>
         <div className='boton'>
         <button className='btn' onClick={handleLogout}>Logout</button>
         </div>
        
        </div>
    </article>
  )
}

export default UserLogged