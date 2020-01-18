import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchPost } from "./actions";

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

const initialState = {
  hideBtn: false
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    };
    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    this.props.fetchPost();
    this.exampleMethod_updateState();
  }

  exampleMethod_updateState() {
    const { hideBtn } = this.state;
    this.setState({
      hideBtn: !hideBtn
    });
  }

  exmpaleMethod_returnsAValue(number) {
    return number + 1;
  }

  render() {
    const configButton = {
      buttonText: "Get posts",
      emitEvent: this.fetch
    };

    const { hideBtn } = this.state;

    const { posts } = this.props;
    return (
      <div className="App" data-test="App">
        <Header />
        <section>
          <HeadLine
            header="Posts"
            desc="this is we"
            tempArr={tempArr}
          ></HeadLine>

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
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps, { fetchPost })(App);
