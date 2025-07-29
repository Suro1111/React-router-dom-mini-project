import React from "react";
import { useNavigate } from "react-router-dom";

// * css
import style from "./Todos.module.css";
import { Container } from "../Container/Container";

export function Todos({ todos }) {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <section>
      <Container>
        <h2>Todos</h2>
        <div className={style.block}>
          {todos.map((t) => {
            return (
              <label className={style.box} key={t.id}>
                <input
                  type="checkbox"
                  checked={t.completed}
                  onChange={() => alert(t.id)}
                />
                <span>{t.title}</span>
              </label>
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
