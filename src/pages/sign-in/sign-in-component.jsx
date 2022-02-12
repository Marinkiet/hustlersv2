import React from "react";
import './sign-in.styles.css';
import CustomButton from "../../Components/Custom Button/custom-button.component";
import FormInput from "../../Components/form-input/form-input.component";
import {signInWithGoogle} from "../../firebase/firebase.utils"
//class component to know whos signed in -state
class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit = event =>{
        event.preventDefault(); //want full control
        this.setState({email:'',password:''});
  
    }
    handleChange = event =>{
        const{value,name} = event.target; //pulling values
        this.setState({[name]:value});
    }
    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
         
                <FormInput 
                 name="email"
                 type='email'
                 value={this.state.email} 
                 handleChange={this.handleChange}
                 required
                 label='email'
                 />
                
                <FormInput 
                name="password"
                type='password' 
                value={this.state.password} 
                handleChange={this.handleChange} 
                required
                label='password'/>


                <div className="buttons">
                <CustomButton type='submit'>Sign in</CustomButton>
                <CustomButton onClick = {signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
            </div>
            </form>
            </div>
        )
    }
}
export default SignIn;