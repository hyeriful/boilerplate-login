import React, { useState } from "react";
import LeftMenu from "./Sections/LeftMenu";
import RightMenu from "./Sections/RightMenu";
import { Drawer, Button } from "antd";
import Icon from "@ant-design/icons";
import "./Sections/Navbar.css";

function NavBar() {
  const [visible, setVisible] = useState(false);

  return (
    <nav className="menu">
      <div className="menu__container">
        <div className="menu_left">
          <LeftMenu mode="horizontal" />
        </div>
        <div className="menu_right">
          <RightMenu mode="horizontal" />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
