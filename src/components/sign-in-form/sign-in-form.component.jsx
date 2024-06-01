
import FormInput from '../form-input/form-input.component.jsx';
import Button from '../button/button.component.jsx';

import { useState } from 'react';
import { firebaseSignInWithEmailAndPassword } from "../../utils/firebase.utils";
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase.utils.js";


import "./sign-in-form.styles.scss";
const defaultFormFields = {
    email: '',
    password: ''
};

const SignInForm = () => {

    const [formFields, setFormFields] =  useState(defaultFormFields);
    const { email, password } = formFields;

    const signInWithGoogle = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);

        await createUserDocumentFromAuth(response.user);
    }

    console.log('signIn Form');
    const submitSignIn = (event) => {
        console.log('On HandleSubmit sign in form')
        event.preventDefault();

        try{
            if(!email || !password){
                alert('')
                return;
            }
           const res = firebaseSignInWithEmailAndPassword(email, password);
           res.then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(userCredential);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            console.log(errorCode);

            switch (errorCode){
                case "auth/invalid-credential":
                    alert("wrong password or user does not exists");
                    break;
                default:
                    console.log(errorCode);
            }
          });
        }catch(error){
            console.log(error);
        }

    };

    const changeHandler = (event) =>{
        const {name, value} = event.target;
        setFormFields({ ...formFields ,[name] : value});
    };

    console.log(formFields);
    return (
        <div className='sign-in-container'>
            <h2>Have an account Already</h2>
            <span> Sign In With your email and Password</span>
            <form onSubmit = {submitSignIn}>
                

            <FormInput label="Email" required type="email" onChange={changeHandler} name="email" value={email}></FormInput>
            <FormInput label="Password" required type="password" onChange={changeHandler} name="password" value={password}></FormInput>
            
            <div className='buttons-container'>
            <Button type="submit">Sign In</Button>
            <Button buttonType="google" type="button" onClick={signInWithGoogle}>Google Sign In </Button>

            </div>
            </form>
        </div>
    );
};


export default SignInForm;