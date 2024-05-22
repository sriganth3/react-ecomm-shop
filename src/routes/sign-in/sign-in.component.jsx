import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from "../../utils/firebase.utils";

const SignIn = () => {

    useEffect( () => {
        async function fetchAuth(){
            const response = await getRedirectResult(auth);
            if(response){
                const userDocRef = await createUserDocumentFromAuth(response.user);
            }
        }

        fetchAuth();
    }, [ ]);

    const logGoogleUser = async() => {
        const response = await signInWithGooglePopup();
        console.log(response);

        const userDocRef = await createUserDocumentFromAuth(response.user);
    }

    // const logGoogleRedirectUser = async() => {
    //     const response = await signInWithGoogleRedirect();
    //     console.log(response);

    //     const userDocRef = await createUserDocumentFromAuth(response.user);
    // }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign In with Google Popup
            </button>
            <button onClick={signInWithGoogleRedirect}>
                Sign In with Google Redirect
            </button>
        </div>
    )
}

export default SignIn;