import  { FC } from 'react'
import { Links, StyledLinks, Wrapper } from './styledNavbar'
import { Link } from 'react-router-dom'
import { routerPath } from '../../routes/AppRoutes'

const Navbar:FC<any> = () => {
  return (
    <Wrapper>
        <Links>
        <StyledLinks to={routerPath.root}>Home</StyledLinks>
        <StyledLinks to={routerPath.login}>Login</StyledLinks>
        <StyledLinks to={routerPath.root}>Register</StyledLinks>

        </Links>
    </Wrapper>
  )
}

export default Navbar