import React from 'react'
import './Login.css'
export default class Login extends React.Component{
    state={
        name:''
    }
    render(){
        return (
            <form className='flex-col' onSubmit={(e)=>{
                e.preventDefault();
                if(this.state.name){
                    this.props.onLogin(this.state.name)
                }
            }}>
                <label htmlFor='input_name'>Enter your name</label>
                <input id='input_name' value={this.state.name} onChange={(e)=>{
                    this.setState({
                        name:e.target.value
                    })
                }}></input>
                <button type='submit'>Click to Login</button>
            </form>
        )
    }
} 