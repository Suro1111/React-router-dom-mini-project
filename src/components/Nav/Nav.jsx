import React from "react";
import { Container } from "../Container/Container";
import { NavLink } from "react-router-dom";


import style from "./Nav.module.css";

export function Nav({ myData }) {
  const navlink = myData[0].navLink;
  return (
    <nav>
      <Container>
        <div className={style.box}>
          {navlink.map((n) => (
          <NavLink key={n.id} to={n.href}>
            {n.text}
          </NavLink>
        ))}
        </div>
      </Container>
    </nav>
  );
}
