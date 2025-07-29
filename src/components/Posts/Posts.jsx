import React from "react";
import { useNavigate } from "react-router-dom";

// *components
import { Container } from "../Container/Container";

// * css
import style from "./Posts.module.css";

export function Posts({ posts }) {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <section>
      <Container>
        <h2>Posts</h2>
        <div className={style.block}>
          {posts.map((p) => {
            return (
              <div className={style.box} key={p.id}>
                <h4>{p.id}</h4>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
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
