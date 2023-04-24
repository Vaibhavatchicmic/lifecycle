import React from 'react';
import Button from './Button';

export default class ChatInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input_val: ''
        };
    }
    render() {
        return (
            <form
                className=" flex"
                onSubmit={(e) => {
                    e.preventDefault();
                    if (this.state.input_val) {
                        this.props.onSubmit(this.state.input_val);
                        this.setState({
                            input_val: ''
                        });
                    }
                }}
            >
                <input
                    className=" w-full border-t-2 px-4"
                    placeholder="Message"
                    value={this.state.input_val}
                    onChange={(e) => {
                        this.setState({
                            input_val: e.target.value
                        });
                    }}
                ></input>
                <Button className=" rounded-none" type="submit">
                    Send
                </Button>
            </form>
        );
    }
}
