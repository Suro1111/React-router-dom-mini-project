import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../Container/Container";

import style from "./Albums.module.css";

export function Albums({ albums }) {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <section>
      <Container>
        <h2>Albums</h2>
        <div className={style.block}>
          {albums.map((a) => {
            return (
              <div className={style.box} key={a.id}>
                <h4>{a.id}</h4>
                <h3>{a.title}</h3>
              </div>
            );
          })}
        </div>
      </Container>
      <button onClick={goBack} className="buttonBack">
        go back
      </button>
    </section>
  );
}
