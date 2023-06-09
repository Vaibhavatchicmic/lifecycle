import React from "react";
import "./App.css";
import Login from "./Components/Login";
import Chatbox from "./Components/Chatox";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      islogged: false,
      name: null,
    };
    this.handleLogin = this.handleLogin.bind(this);
  }
  render() {
    return (
      <div>
        {!this.state.islogged && <Login onLogin={this.handleLogin} />}
        {this.state.islogged && (
          <>
            <Chatbox name={this.state.name}></Chatbox>
            
            <button
              onClick={() => {
                this.setState({
                  islogged: false,
                  name: null,
                });
              }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    );
  }

  // Util functions
  handleLogin(name) {
    console.log("trying to login");
    this.setState({
      islogged: true,
      name: name,
    });
  }
}
