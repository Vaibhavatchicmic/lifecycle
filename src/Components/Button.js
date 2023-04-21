import React from 'react';

export default class Button extends React.Component {
    render() {
        return (
            <button
                className= {` p-2 bg-blue-600 rounded-full text-white border-2 border-blue-400 ${this.props.className}`}
                type={this.props.type || "button"}
                onClick={this.props.onClick }
            >
                {this.props.children}
            </button>
        );
    }
}
