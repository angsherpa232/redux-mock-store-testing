import React, { useState } from "react";
import "./App.css";
import { fetchPost } from "./actions";
import { useSelector, useDispatch } from "react-redux";

import Header from "./components/header";
import HeadLine from "./components/headline";
import SharedButton from "./components/sharedbutton";
import ListItem from "./components/listItem";

const tempArr = [
  {
    fName: "joe",
    lName: "sherpa",
    email: "ang@test.com",
    age: 24,
    online: false
  }
];

export const exmpaleMethod_returnsAValue = number => {
  return number + 1;
};

const App = () => {
  const [hideBtn, setHidebtn] = useState(false);
  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();

  const exampleMethod_updateState = () => {
    setHidebtn(!hideBtn);
  };

  const fetch = () => {
    dispatch(fetchPost());
    exampleMethod_updateState();
  };

  const configButton = {
    buttonText: "Get posts",
    emitEvent: () => fetch()
  };

  return (
    <div className="App" data-test="App">
      <Header />
      <section>
        <HeadLine header="Posts" desc="this is we" tempArr={tempArr}></HeadLine>

        {!hideBtn && <SharedButton {...configButton} />}

        {posts.length > 0 && (
          <div>
            {posts.map((post, index) => {
              const { title, body } = post;
              const configListItem = {
                title,
                desc: body
              };
              return <ListItem key={index} {...configListItem} />;
            })}
          </div>
        )}
      </section>
    </div>
  );
};

export default App;
