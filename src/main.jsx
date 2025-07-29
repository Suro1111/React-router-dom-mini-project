// * global data
import {
  albums,
  comments,
  photos,
  posts,
  todos,
  users,
} from "./globalData/globalData";
// * my data
import { myData } from "./myData";

import { createRoot } from "react-dom/client";

// * components
import { BrowserRouter } from "react-router-dom";
import { App } from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App
      myData={myData}
      albums={albums}
      comments={comments}
      photos={photos}
      posts={posts}
      todos={todos}
      users={users}
    />
  </BrowserRouter>
);
