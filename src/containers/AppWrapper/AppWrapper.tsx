import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { FC } from 'react'

const AppWrapper:FC<any>= ({children}) => {
  return (
    <>
    <Navbar/>
    {children}
    <Footer/>
    </>
  )
}

export default AppWrapper