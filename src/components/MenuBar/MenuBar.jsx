import React from "react";
import { NavLink } from "react-router-dom";
import menu from './MenuBar.module.css';

const MenuBar = (props) => {
  return (
    <nav className={menu.nav}>
      <div className={menu.item}>
        <NavLink to='/profile' activeClassName={menu.active}>Profile</NavLink>
      </div>
      <div className={menu.item}>
        <NavLink to='/dialogs' activeClassName={menu.active}>Messages</NavLink>
      </div>
      <div className={menu.item}>
        <NavLink to='/news' activeClassName={menu.active}>News</NavLink>
      </div>
      <div className={menu.item}>
        <NavLink to='/music' activeClassName={menu.active}>Music</NavLink>
      </div>
      <div className={menu.item}>
        <NavLink to='/settings' activeClassName={menu.active}>Settings</NavLink>
      </div>
      <div className={menu.text}>
        Friends
      </div>
      <div className={menu.friends}>
      <NavLink to={'/dialogs/' + props.dialogsData[0].id}><img src='https://staticg.sportskeeda.com/editor/2021/09/76fe9-16322877442358-800.jpg'/></NavLink>
      <NavLink to={'/dialogs/' + props.dialogsData[1].id}><img src='https://cq-esports.com/storage/uploads/images/1225427/1.jpg'/></NavLink>
      <NavLink to={'/dialogs/' + props.dialogsData[2].id}><img src='https://cq-esports.com/storage/uploads/images/1225391/cri/1___media_library_original_800_501.jpg'/></NavLink>
      </div>
    </nav>
  );
};

export default MenuBar;
