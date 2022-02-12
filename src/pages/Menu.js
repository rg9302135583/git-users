import React from "react";
// import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";


function Menu() {

  return (
    <div>

    {/* // <div className="menu"> */}
        {/* <div className="menuList"> */}
        {/* {MenuList.map((menuItem, key) => { */}
        {/* console.log("menuItem",menuItem) */}
        {/* return ( */}
        {/* <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            /> */}
        {/* ); */}
        {/* })} */}
        <MenuItem />
        {/* </div> */}
    {/* // </div> */}
    </div>
  );
}

export default Menu;
