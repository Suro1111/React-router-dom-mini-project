import React from "react";
import { useNavigate } from "react-router-dom";

// *components
import { Container } from "../Container/Container";

// *css
import style from "./Photos.module.css";

export function Photos({ photos }) {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <section>
      <Container>
        <h2>Photos</h2>
        <div className={style.block}>
          {photos.map((p) => {
            return (
              <div className={style.box} key={p.id}>
                <h4>{p.id}</h4>
                <img src="https://conf.react.dev/logo.svg" alt="imh" />
                <h4>{p.title}</h4>
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
