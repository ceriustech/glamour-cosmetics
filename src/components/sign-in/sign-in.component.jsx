import React from 'react';

import './sign-in.styles.scss';

submitHandler = event => {
    event.preventDefault(); 

    this.ListeningStateChangedEvent({email: '', password: ''})
}

changeHandler = event => {
    const {value, name} = event.target;

    this.setState({[name]: value});
}

class SignIn extends React.Component {
    state = {
        email: '',
        password: ''
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.submitHandler}>
                    <label htmlFor="email">Email</label>
                    <input name="email" type="email" value={this.state.email} onChange={this.chaneHandler} required/>
                    <label htmlFor="password">Password</label>
                    <input name="password" type="password" value={this.state.password} onChange={this.chaneHandler} required/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default SignIn; 