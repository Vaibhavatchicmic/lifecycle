import React from "react";
import "./App.css";
import Login from "./Components/Login";
import Chatbox from "./Components/Chatbox";
import Button from "./Components/Button";

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
            <Button  onClick={() => {
                this.setState({
                  islogged: false,
                  name: null,
                });
              }}  className=" bg-red-700 border-red-600 py-1 px-3" >
                Logout
            </Button>
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
