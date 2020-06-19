import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.components';

import { signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';


class SignIn extends React.Component {
    state = {
        email: '',
        password: ''
    }

    submitHandler = event => {
        event.preventDefault(); 
    
        this.setState({email: '', password: ''})
    }
    
    changeHandler = event => {
        const {value, name} = event.target;
    
        this.setState({[name]: value});
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.submitHandler}>
                    <FormInput name="email" 
                    type="email" value={this.state.email} 
                    handleChange={this.changeHandler} 
                    label="Email"
                    required/>
                    
                    <FormInput name="password" type="password" 
                    value={this.state.password} 
                    handleChange={this.changeHandler} 
                    label="Password"
                    required/>
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} >Sign In With Google</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn; 