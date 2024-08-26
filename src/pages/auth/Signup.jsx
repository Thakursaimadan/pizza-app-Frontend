import { useState } from "react";
import toast from "react-hot-toast";
import SignupPresentation from "./SignupPresentation";
//container for signup page
function Signup(){
    const [signUpState,setsignUpState]=useState({
        firstName:'',
        email:'',
        mobileNumber:'',
        password: ''
    });

    function handleUserInput(e)
    {
        const {name,value}=e.target
        setsignUpState({
            ...signUpState,
            [name]:value
        })
    }
    function handleFormsubmit(e)
    {
        e.preventDefault(); //prevents the form from reloading the page
        console.log(signUpState)
        //add validation for the form input
        if(!signUpState.email || !signUpState.mobileNumber || !signUpState.password || !signUpState.firstName) {
            toast.error("Missing values from the form")
            return;
        }

        if(signUpState.firstName.length < 5 || signUpState.firstName.length > 20) {
            toast.error("First name should be atleast 5 characters long and maximum 20 characters long")
            return;
        }

        // check email
        if(!signUpState.email.includes('@') || !signUpState.email.includes('.')) {
            toast.error("Invalid email address")
            return;
        }

        // check mobile number length to be between 10-12
        if(signUpState.mobileNumber.length < 10 || signUpState.mobileNumber.length > 12) {
            toast.error("Mobile number should be between 10-12 characters")
            return;
        }
    }
    return(
        <SignupPresentation 
        handleFormsubmit={handleFormsubmit} 
        handleUserInput={handleUserInput}
        
        />
    )
   
}
export default Signup;