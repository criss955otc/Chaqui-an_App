import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <button type="button" className="logo-button">
          <img src="/img/ChaquiLogo.svg" alt="Logo de Chaquiñan" className="logo-img" />
        </button>
      </NavLink>


{/*Aqui configuramos la navbar a futuro se asignaran los nombres correctos*/}

      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to="/Ibarra" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'  }>
            Ibarra
        </NavLink>

        <NavLink to="/Desarrollo" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'  }>
            Desarrollo
        </NavLink>

      </nav>
    </header>  
  );
};

export default Navbar;

