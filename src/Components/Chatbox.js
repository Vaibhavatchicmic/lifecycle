import React from 'react';
import ChatContainer from './ChatContainer';
import Button from './Button';

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
            <div className='flex flex-col justify-center'>
                You are welcome {this.props.name}
                <div className=' min-w-4xl mx-auto border-2'>
                    <div>
                        <h3 className='text-center bg-blue-50'>All messages</h3>
                        <ChatContainer messages={this.state.messages} name={this.props.name} />
                    </div>
                    <div>
                        <form
                            className=' flex'
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
                                className=' w-full border-t-2 px-4'
                                placeholder="Message"
                                value={this.state.message_input}
                                onChange={(e) => {
                                    this.setState({
                                        message_input: e.target.value
                                    });
                                }}
                            ></input>
                            <Button className=" rounded-none"
                             type="submit">Send</Button>
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
