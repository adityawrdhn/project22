import React from "react";
import Scrollspy from "react-scrollspy";
import AnchorLink from "./AnchorLink";
import { Link } from "react-router-dom";
import { useDrawer } from "../../containers/Drawer";

const ScrollSpyMenu = ({ className, menuItems, drawerClose, ...props }) => {
  const { toggle: toggleDrawer } = useDrawer();
  const scrollItems = [];
  menuItems.forEach((item) => {
    scrollItems.push(item.path.slice(1));
  });
  const addAllClasses = ["scrollspy__menu"];

  if (className) {
    addAllClasses.push(className);
  }

  return (
    <Scrollspy
      items={scrollItems}
      className={addAllClasses.join(" ")}
      drawerClose={drawerClose}
      {...props}
    //   onUpdate={(test)=>console.log(test)}
    >
      {menuItems.map((menu, index) => (
        <li key={index}>
          {menu.staticLink ? (
            <Link href={menu.path} key={index}>
              <em>{index + 1}</em>
              <i> · </i>
              <span>{menu.label}</span>
            </Link>
          ) : drawerClose ? (
            <AnchorLink
              key={index}
              href={menu.path}
              offset={props.offset}
              onClick={toggleDrawer}
            >
              <span className="scrollspy__menu__ticker">
                <em>{index + 1}</em>
                <i> · </i>
                <span>{menu.label}</span>
              </span>
            </AnchorLink>
          ) : (
            <AnchorLink key={index} href={menu.path} offset={props.offset}>
              <span className="scrollspy__menu__ticker">
                <em>{index + 1}</em>
                <i> · </i>
                <span>{menu.label}</span>
              </span>
            </AnchorLink>
          )}
          <hr />
        </li>
      ))}
    </Scrollspy>
  );
};
ScrollSpyMenu.defaultProps = {
  componentTag: "ul",
  currentClassName: "is-active",
};

export default ScrollSpyMenu;
