import { useNavigate } from "react-router-dom";

// * components
import { Container } from "../Container/Container";

// *css
import style from "./Users.module.css";

export function Users({ users }) {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <section>
      <Container>
        <h2>Users</h2>
        <div className={style.block}>
          {users.map((u) => {
            return <div className={style.box} key={u.id}>
              <h4>{u.id}</h4>
              <h3>{u.name}</h3>
              <h4>{u.username}</h4>
              <p>{u.email}</p>
              <p>{u.phone}</p>
            </div>;
          })}
        </div>
      </Container>
      <button onClick={goBack} className="buttonBack">
        go back
      </button>
    </section>
  );
}
