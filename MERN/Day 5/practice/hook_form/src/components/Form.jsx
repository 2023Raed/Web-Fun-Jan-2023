// rafce
import React, {useState} from 'react'
import Display from './Display'
let newUser = {
    FirstName:"",
    LastName:"",
    email:"",
    password:"",
    ConfirmPassword: "",
}
const Form = (props) => {
    // ! Every input must have a State variable
    const [FirstName,setFirstName] = useState("")
    const [LastName,setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const[ConfirmPassword,setConfirmPassword] = useState("")
    
    const formHandler = (e)=>{
        e.preventDefault()
        console.log("Form Submitted 🧨🎇");
        newUser = {
            FirstName:FirstName,
            LastName:LastName,
            email:email,
            password:password,
            confirmPassword:ConfirmPassword,
        }
        console.log(newUser);
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
    }
    return (
      <fieldset>
          <legend>From.jsx</legend> 
          <p>FirstName : {JSON.stringify(FirstName)}</p> 
          <p>LastName : {JSON.stringify(LastName)}</p> 
          <p>Email : {JSON.stringify(email)}</p>
          <p>Password : {JSON.stringify(password)}</p>
          <p>ConfirmPassword : {JSON.stringify(ConfirmPassword)}</p> 
          <hr />
          <form onSubmit={formHandler} >
              <div>
                  <label >FirstName : </label>
                  <input type="text" onChange={(e)=>{setFirstName(e.target.value)}} value={FirstName} />
                  
              </div>
              <br />
              <div>
                  <label >LastName : </label>
                  <input type="text" onChange={(e)=>{setLastName(e.target.value)}} value={LastName} />
                  
              </div>
              <div>
                  <label >Email : </label>
                  <input type="text" onChange={(e)=>{setEmail(e.target.value)}} value={email}/> 
                                   {/* Double binding */}
              </div>
              <br />
              <div>
                  <label >Password : </label>
                  <input type="password" onChange={(e)=>{setPassword(e.target.value)}} value={password}/> 
                   {/* Double binding */}
              </div>
              <br />
              <div>
                  <label >ConfirmPassword : </label>
                  <input type="password" onChange={(e)=>{setConfirmPassword(e.target.value)}} value={ConfirmPassword}/> 
                   {/* Double binding */}
              </div>
              <input type="submit" value="Create User" />
          </form>
          <Display user={newUser}/>
      </fieldset>
    )
    }
    
  
export default Form