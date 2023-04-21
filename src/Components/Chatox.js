import React from 'react';

class Chat extends React.Component {
    render() {
        return (
            <div>
                <span>{this.props.own?"You":this.props.author} :</span>
                <span>{this.props.message}</span>
            </div>
        );
    }
}

let id=0;

export default class Chatbox extends React.Component {
    constructor(props) {
        console.log("constructor()")
        super(props);
        this.state = {
            messages: [],
            new_messages:[],
            message_input: ''
        };
        // console.log('Chatbox mounted');
    }
    
    static getDerivedStateFromProps(){
        console.log("getDerivedStateFromProps()");

        return null
    }

    render() {
        console.log("render()")
        return (
            <div>
                You are welcome {this.props.name}
                <div>
                    <div>
                        <h3>All messages</h3>
                        <div>
                            {this.state.messages.map((mes) => {
                                return (
                                    <Chat
                                        message={mes.message}
                                        own={mes.author === this.props.name}
                                        key={mes.id}
                                        author={mes.author}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                if (this.state.message_input) {
                                    this.setState({
                                        messages: [
                                            ...this.state.messages,
                                            {
                                                author: this.props.name,
                                                id: id++,
                                                message:this.state.message_input
                                            }
                                        ],
                                        message_input: ''
                                    });
                                }
                            }}
                        >
                            <input
                                placeholder="Message"
                                value={this.state.message_input}
                                onChange={(e) => {
                                    this.setState({
                                        message_input: e.target.value
                                    });
                                }}
                            ></input>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        console.log("componentDidMount()")
        this.setState({
            messages: getMessages() || [] 
        },()=>{
            // console.log("retreving :",this.state.messages,'\n id:',id)

        });
        
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate()");

        return true;
    }
    getSnapshotBeforeUpdate(){
        console.log("getSnapshotBeforeUpdate()");

        return null;
    }

    componentDidUpdate(){
        console.log("componentDidUpdate()");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount()")
        setMessages(this.state.messages);
    }
}

function getMessages() {
    let mess = JSON.parse(localStorage.getItem('messages'));
    if(mess)
    id=mess.reduce((acc,val)=>{
        return acc>val.id?acc:val.id;
    },0)+1;
    // console.log("retreving");
    return mess;
}
function setMessages(mess) {
    console.log('saving :', mess);
    if(mess.length>0)
    localStorage.setItem('messages', JSON.stringify(mess));
}
