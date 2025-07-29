import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../Container/Container";

import style from "./Comments.module.css";

export function Comments({ comments }) {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <section>
      <Container>
        <h2>Comments</h2>
        <div className={style.block}>
          {comments.map((c) => {
            return (
              <div className={style.box} key={c.id}>
                <h4>{c.id}</h4>
                <h4>{c.name}</h4>
                <h4>{c.email}</h4>
                <p>{c.body}</p>
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
