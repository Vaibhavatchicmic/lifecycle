import React from "react";

export default class Chat extends React.Component {
    render() {
        return (
            <div className={` ${this.props.own?"ml-auto":"mr-auto"}  max-w-xs flex flex-col`}>
                <div className=" text-xs">{this.props.own?"You":this.props.author}</div>
                <span className={`${this.props.own?"bg-violet-700 rounded-l-lg text-white":"bg-neutral-200 rounded-r-lg"} p-3  `} 
                >{this.props.message}</span>
            </div>
        );
    }
}