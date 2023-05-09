import React from "react";
import HeaderLogo from "../images/vk-logo.svg";

function Header () {
  return (
    <div className="header">
      <img className="header__logo" src={HeaderLogo} alt='ВК'/>
      <h1 className="header__text">ВПЕРЕГОВОРКЕ</h1>
    </div>
  )
}

export default Header