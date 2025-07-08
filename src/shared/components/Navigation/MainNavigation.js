import React from 'react'

import {Link} from 'react-router-dom';
import MainHeader from './MainHeader';
import './MainNavigation.css';
import NavLinks from './NavLinks';
const MainNavigation = props => {
  return  <MainHeader>
    <button className="MainNavigation_menu-btn">
        <span /> 
        <span />
         <span />
         </button>
         <h1 className="main-navigation_title">
           <Link to="/"></Link> YourPlaces
         </h1>
         <nav>
            <NavLinks />
         </nav>
     </MainHeader>
};

export default MainNavigation;
