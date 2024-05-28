import { useState, useEffect } from "react";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase.utils";

import FormInput from "../form-input/form-input.component.jsx";

import "./sign-up-form.styles.scss";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {
    const [formFields, setFormFields] =  useState(defaultFormFields);
    const { displayName, email, password, confirmPassword} = formFields;

    console.log("after setting", formFields);

    const handleSubmit = async (event) => {
        event.preventDefault();
 
        if(password !== confirmPassword){
            alert("passwords not matching");
            return;
        }

        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, {displayName});
            setFormFields(defaultFormFields);

        }catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert('Cannot create user, User Already Exists')
            }else{
                console.log('user creation encountered an error', error);
            }
        }
    };

    const handleChange = (event) =>{
        const {name, value} = event.target;
        console.log(formFields);
        setFormFields({ ...formFields ,[name] : value});
    };

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign Up With Email and Password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput label = "Display Name" required type = "text" onChange = {handleChange} name = "displayName"  value={displayName}/>

                <FormInput label = "Email" required type="email" onChange={handleChange} name="email" value={email}/>

                <FormInput label = "Password" required type="password" onChange={handleChange} name="password" value={password}/>

                <FormInput label = "Confirm Password" required type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword}/>

                <button type = "submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUpForm;