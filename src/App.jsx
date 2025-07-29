// * // * libraries
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

// * components
import {
  Nav,
  Header,
  Albums,
  Comments,
  Photos,
  Posts,
  Todos,
  Users,
  NotFound,
} from "./globalData/globalData";
import { Footer } from "./components/Footer/Footer";

export function App(props) {
  const [todos, setTodos] = useState([...props.todos]);

  const changeTodos = (newTodo) => {
    setTodos(
      todos.map((t) => {
        if (t.id === newTodo.id) {
          return newTodo;
        }
        return t;
      })
    );
  };

  return (
    <>
      <Nav myData={props.myData} />
      <main>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/albums" element={<Albums albums={props.albums} />} />
          <Route
            path="/comments"
            element={<Comments comments={props.comments} />}
          />
          <Route path="/photos" element={<Photos photos={props.photos} />} />
          <Route path="/posts" element={<Posts posts={props.posts} />} />
          <Route
            path="/todos"
            element={<Todos todos={todos} changeTodos={changeTodos} />}
          />
          <Route path="users" element={<Users users={props.users} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}
