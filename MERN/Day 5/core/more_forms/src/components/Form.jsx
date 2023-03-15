import React, {useState} from 'react'
import Display from './Display'
let newUser = {
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    confirmpassword:"",

}
const Form = (props) => {
    // ! Every input must have a State variable
    const [firstname,setFirstName] = useState("")
    const[lastname,setLastName]=useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const[confirmpassword,setConfirmPassword]=useState("")
    const [firstnameError, setFirstNameError] = useState(false)
    const [lastnameError, setLastNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [confirmpasswordError, setConfirmPasswordError] = useState(false)

    const formHandler = (e)=>{
        e.preventDefault()
        console.log("Form Submitted 🧨🎇");
        newUser = {
            firstname:firstname,
            lastname:lastname,
            email:email,
            password:password,
            confirmpassword:confirmpassword,
        }
        console.log(newUser);
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
    }
    // Firstname Validation 
    const handleFirstName = (e)=>{
        e.preventDefault()
        setFirstName(e.target.value)
        console.log("The value = ", e.target.value);
        if(e.target.value.length<2 ) { 
            console.log("First Name must be more than 2 ");
            setFirstNameError(true)
        }
        else{
            setFirstNameError(false)
            console.log("First Name is more than 2🎈 ");
        }
    }
    // last name validation
    const handleLastName = (e)=>{
        e.preventDefault()
        setLastName(e.target.value)
        console.log("The value = ", e.target.value);
        if(e.target.value.length<2 ) { 
            console.log("LastName must be more than 2 ");
            setLastNameError(true)
        }
        else{
            setLastNameError(false)
            console.log("LastName is more than 2🎈 ");
        }
    }
    // email validation
    const handleEmail = (e)=>{
        e.preventDefault()
        setEmail(e.target.value)
        console.log("The value = ", e.target.value);
        if(e.target.value.length<2 ) { 
            console.log("Email must be more than 2 ");
            setEmailError(true)
        }
        else{
            setEmailError(false)
            console.log("Email is more than 2🎈 ");
        }
    }
    // password validation
    const handlePassword = (e)=>{
        e.preventDefault()
        setPassword(e.target.value)
        console.log("The value = ", e.target.value);
        if(e.target.value.length<8 ) { 
            console.log("password must be more than 8 ");
            setPasswordError(true)
        }
        else{
            setPasswordError(false)
            console.log("password is more than 2🎈 ");
        }
    }
    const handleConfirmPassword = (e)=>{
        e.preventDefault()
        setConfirmPassword(e.target.value)
        console.log("The value = ", e.target.value);
        if(password!==confirmpassword ) { 
            console.log("confirmpassword must match password ");
            setConfirmPasswordError(true)
        }
        else{
            setConfirmPasswordError(false)
            console.log("confirm password match password ");
        }
    }

  return (
    <fieldset>
        <legend>From.jsx</legend> 
        <p>First Name : {JSON.stringify(firstname)}</p> 
        <p>Last Name:{JSON.stringify(lastname)}</p>
        <p>Email : {JSON.stringify(email)}</p>
        <p>Password : {JSON.stringify(password)}</p>
        <p>Confirm Password:{JSON.stringify(confirmpassword)}</p>
        <hr />
        <form onSubmit={formHandler} >
            <div>
                <label >First Name : </label>
                <input onChange={(e)=>{handleFirstName(e)}} value={firstname} />
                {firstnameError ? <p style={{color:"red"}}>First name must be more than 2 </p>:null}
            </div>
            <br />
            <div>
                <label >Last Name : </label>
                <input onChange={(e)=>{handleLastName(e)}} value={lastname} />
                {lastnameError ? <p style={{color:"red"}}>Last name must be more than 2 </p>:null}
            </div>
            <br />
            <div>
                <label >Email : </label>
                <input onChange={(e)=>{handleEmail(e)}} value={email} />
                {emailError ? <p style={{color:"red"}}>email must be more than 2 </p>:null}
            </div>
            
            <br />
            <div>
                <label >Password : </label>
                <input onChange={(e)=>{handlePassword(e)}} value={password} />
                {passwordError ? <p style={{color:"red"}}>password must be more than 8 </p>:null}
            </div>
            
            <br />
            <div>
                <label >Confirm Password : </label>
                <input onChange={(e)=>{handleConfirmPassword(e)}} value={confirmpassword} />
                {confirmpasswordError ? <p style={{color:"red"}}>Confirm password must match the password</p>:null}
            </div>
            
            <input type="submit" value="Create User" />
        </form>
        <Display user={newUser}/>
    </fieldset>
  )
}

export default Form