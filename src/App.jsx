// * // * libraries
import React from "react";
import { Routes, Route } from "react-router-dom";

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
          <Route path="/todos" element={<Todos todos={props.todos} />} />
          <Route path="users" element={<Users users={props.users} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}
