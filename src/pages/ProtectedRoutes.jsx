import {Outlet} from 'react-router-dom'

const ProtectedRoutes = () => {
if (localStorage.getItem('token')){
    return <Outlet/>
}else{
    return <navigate to = '/login'/>
}
}

export default ProtectedRoutes