import React from 'react';
import Chat from './Chat';

export default class ChatContainer extends React.Component {
    render() {
        return (
            <div className=' flex  h-64 w-full overflow-auto  flex-col p-4 '>
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
