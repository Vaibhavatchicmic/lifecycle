import React from 'react';
import './App.css';
import Login from './Components/Login';
import Chatbox from './Components/Chatbox';
import Button from './Components/Button';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            islogged: false,
            name: null
        };
        this.handleLogin = this.handleLogin.bind(this);
    }
    render() {
        return (
            <div className=" h-full">
                {!this.state.islogged && <Login onLogin={this.handleLogin} />}
                {this.state.islogged && (
                    <>
                        <div className=" flex justify-between mx-10 my-1">
                            <div>You are welcome {this.state.name}</div>
                            <Button
                                onClick={() => {
                                    this.setState({
                                        islogged: false,
                                        name: null
                                    });
                                }}
                                className=" bg-red-700 border-red-600 py-1 px-3"
                            >
                                Logout
                            </Button>
                        </div>
                        <Chatbox name={this.state.name}></Chatbox>
                    </>
                )}
            </div>
        );
    }

    // Util functions
    handleLogin(name) {
        console.log('trying to login');
        this.setState({
            islogged: true,
            name: name
        });
    }
}
