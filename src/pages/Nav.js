import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  NavBar,
  MenuContainer,
  LogoContainer,
  ResponseMenu,
  RightNavBar,
} from "./Style/Style";

const Nav = () => {
  const [position, setPosition] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const onScroll = () => {
    setPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const showMenuHandler = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <NavBar>
        <div className={position > 50 ? "scroll start" : "scroll"}>
          <LogoContainer>세경's Portfolio</LogoContainer>
          <MenuContainer>
            <Link to='/'>HOME</Link>
            <Link to='/about'>ABOUT</Link>
            <Link to='/project'>PROJECT</Link>
            <Link to='/contact'>CONTACT</Link>
          </MenuContainer>
          <ResponseMenu>
            <i className='fas fa-bars' onClick={showMenuHandler}></i>
          </ResponseMenu>
        </div>
      </NavBar>
      {showMenu ? <RightNavBar>
        <Link to='/'><div>HOME</div></Link>
        <Link to='/about'><div>ABOUT</div></Link>
        <Link to='/project'><div>PROJECT</div></Link>
        <Link to='/contact'><div>CONTACT</div></Link>
      </RightNavBar> : ""}
    </>
  );
};

export default Nav;
