import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavBar, MenuContainer, LogoContainer } from "./Style/Style";

const Nav = () => {
  const [position, setPosition] = useState(0);

  const onScroll = () => {
    setPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <NavBar>
      <div className={position > 50 ? "scroll start" : "scroll"}>
        <LogoContainer>세경's Portfolio</LogoContainer>
        <MenuContainer>
          <Link to='/'>HOME</Link>
          <Link to='/about'>ABOUT</Link>
          <Link to='/project'>PROJECT</Link>
          <Link to='/contact'>CONTACT</Link>
        </MenuContainer>
      </div>
    </NavBar>
  );
};

export default Nav;
