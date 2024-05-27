import { useState, useEffect } from "react";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase.utils";

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
 
        if(password != confirmPassword){
            alert("passwords not matching");
            return;
        }

        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, {displayName});
            setFormFields(defaultFormFields);

        }catch(error){
            if(error.code == 'auth/email-already-in-use'){
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
        <div>
            <h1>Sign Up With Email and Password</h1>
            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <input required type="text" onChange={handleChange} name="displayName" value={displayName}/>
                <br/>
                <label>Email</label>
                <input required type="email" onChange={handleChange} name="email" value={email}/>
                <br/>
                <label>Password</label>
                <input required type="password" onChange={handleChange} name="password" value={password}/>
                <br/>
                <label>Confirm Password</label>
                <input required type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
                <br/>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUpForm;