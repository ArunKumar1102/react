 import React, {useState} from 'react'
import axios from 'axios';
 
const App = () => {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    conformPassword: '',
  })  
  const { username, email, password, conformPassword } = data;
  const changeHandler = e => {
    setData({...data , [e.target.name]:[e.target.value]})
  }
  const submitHandler = e => {
    e.preventDefault();
    axios.post('https://arunkumar1102-bd257-default-rtdb.firebaseio.com/register.json',
    data).then(()=> alert("submitted successfully"))     
  }
   return (
     <div>
       <center>
         <form onSubmit={submitHandler}>
           <input type='text' name='username' value={username} placeholder='username' onChange={changeHandler}/> <br/>
           <input type='email' name='email' value={email} placeholder='email'onChange={changeHandler}/> <br/>
           <input type='password' name='password' value={password} placeholder='password'onChange={changeHandler}/> <br/>
           <input type='password' name='conformPassword' value={conformPassword} placeholder='conformpassword'onChange={changeHandler}/> <br/>
           <input type='submit' name='submit' /> 
         </form>
       </center>
     </div>
   )
 }
 
 export default App
 