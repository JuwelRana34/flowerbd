
import {
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarCollapseBtn,
    NavbarContainer,
    NavbarItem,
    NavbarList,
  } from 'keep-react'
import { NavLink } from 'react-router-dom'
  
  export const NavbarComponent = () => {
    return (
      <Navbar>
        <NavbarContainer>
          <NavbarBrand>
            {/* <img src={KeepLogo} alt="keep"/> */}
            <h1 className='text-2xl font-extrabold px-4 text-blue-500 uppercase '> <i>flower bd</i></h1>
          </NavbarBrand>
          <NavbarList>
            <NavLink to="/">
            <NavbarItem>  Home  </NavbarItem>
            </NavLink>
            <NavLink to="/meal">
            <NavbarItem>  Meal  </NavbarItem>
            </NavLink>
            <NavLink to="/">
            <NavbarItem>  About  </NavbarItem>
            </NavLink>
            
            <NavbarItem className='bg-blue-500' active>Get Started</NavbarItem>
          </NavbarList>
          <NavbarCollapseBtn className='px-2'/>
          <NavbarCollapse className='bg-slate-50 '>
          <NavLink  to="/">
            <NavbarItem>  Home  </NavbarItem>
            </NavLink>
            <NavLink to="/meal">
            <NavbarItem>  Meal  </NavbarItem>
            </NavLink>
            <NavLink to="/">
            <NavbarItem>  About  </NavbarItem>
            </NavLink>
            <NavbarItem className='bg-blue-500' active>Get Started</NavbarItem>
          </NavbarCollapse>
        </NavbarContainer>
      </Navbar>
    )
  }
  