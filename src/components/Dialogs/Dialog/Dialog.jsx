import React from "react";
import { NavLink } from "react-router-dom";
import d from "./Dialog.module.css";

const Dialog = (props) => {
  return (
        <div className={d.item + ' ' + d.active}>
         <NavLink to={"/dialogs/" + props.id}> {props.name} </NavLink>
          </div>
  );
};

export default Dialog;
