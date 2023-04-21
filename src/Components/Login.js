import React from 'react';
import './Login.css';
import Button from './Button';
export default class Login extends React.Component {
    state = {
        name: ''
    };
    render() {
        return (
            <div className="flex border-2 justify-center h-full mt-20 mx-auto p-5 w-80">
                <form
                    className="flex-col flex space-y-3"
                    onSubmit={(e) => {
                        e.preventDefault();
                        if (this.state.name) {
                            this.props.onLogin(this.state.name);
                        }
                    }}
                >
                    <label htmlFor="input_name" className=" text-xl">
                        Enter your name
                    </label>
                    <input
                        className=" border-2 p-2"
                        id="input_name"
                        value={this.state.name}
                        placeholder="Your Name"
                        onChange={(e) => {
                            this.setState({
                                name: e.target.value
                            });
                        }}
                    ></input>
                    <Button type='submit'>
                        Click to Login
                    </Button>
                </form>
            </div>
        );
    }
}
