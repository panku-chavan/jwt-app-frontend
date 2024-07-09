import  { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../containers/Home/Home'
import Login from '../containers/Auth/Login/Login'
import SignUp from '../containers/Auth/SignUp/SignUp'
export const routerPath={
    root:"/",
    login:"/login",
    register:'/register',
}
const AppRoutes:FC = () => {

  return (
    <>
    <Routes>
        <Route path={routerPath.root} element={<Home/>}/>
        <Route path={routerPath.login} element={<Login/>}/>
        <Route path={routerPath.register} element={<SignUp/>}/>
        
    </Routes>
    </>
  )
}

export default AppRoutes