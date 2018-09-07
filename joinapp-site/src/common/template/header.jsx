import React from 'react'
import { Icon, Navbar, NavItem } from 'react-materialize'

export default props => (
    <Navbar className='blue' 
        brand="XXIX JOIN" right>
        <NavItem href='#/about'>Sobre</NavItem>
        <NavItem href='#/theme'>Tema</NavItem>
        <NavItem href='#/sponsors'>Patrocinadores</NavItem>
        <NavItem href='#/'>Calendário</NavItem>
    </Navbar>
    // <header className='main-header'>
    //     <a href="/#/" className='logo'>
    //         <span className='logo-mini'><i className='fa fa-money'></i></span>
    //         <span className='logo-lg'>
    //             <i className='fa fa-money'></i>
    //             <b> My</b> Money
    //         </span>
    //     </a>
    //     <nav className='navbar navbar-static-top'>
    //         <a href="" className='sidebar-toggle' data-toggle='offcanvas'></a>
    //     </nav>
    // </header>
)