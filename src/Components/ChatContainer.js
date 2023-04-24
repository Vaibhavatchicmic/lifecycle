import React from 'react';
import Chat from './Chat';

export default class ChatContainer extends React.Component {
    constructor(props){
        super(props);
        this.myRef= React.createRef();
    }
    // componentDidMount(){
    //     // console.log(this.myRef.current)
    // }

    componentDidUpdate(){
        // console.log(this.myRef.current);
        this.myRef.current.scrollTop=this.myRef.current.scrollHeight
    }
    componentDidMount(){
        this.myRef.current.scrollTop=this.myRef.current.scrollHeight
    }
    render() {
        return (
            <div ref={this.myRef}
                className=" flex h-[80vh]  w-full overflow-auto  flex-col p-4 "
            >
                {this.props.messages.map((mes) => {
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
        );
    }
}
