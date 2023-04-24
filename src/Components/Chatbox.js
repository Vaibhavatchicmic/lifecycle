import React from 'react';
import ChatContainer from './ChatContainer';
import Button from './Button';
import ChatInput from './ChatInput';

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
        this.sendMessage=this.sendMessage.bind(this);
        // setMessages=
        // console.log('Chatbox mounted');
    }
    
    static getDerivedStateFromProps(){
        console.log("getDerivedStateFromProps()");

        return null
    }

    sendMessage(mes){
        this.setState({
            messages: [
                ...this.state.messages,
                {
                    author: this.props.name,
                    id: id++,
                    message:mes
                }
            ],
        });
    }


    render() {
        console.log("render()")
        return (
            <div className='flex flex-col justify-center'>
                <div className=' m-auto border-2 w-11/12 '>
                    <div>
                        <h3 className='text-center bg-blue-50'>All messages</h3>
                        <ChatContainer messages={this.state.messages} name={this.props.name} />
                    </div>
                    <div>
                        <ChatInput onSubmit={this.sendMessage}/>
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
