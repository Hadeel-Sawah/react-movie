import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Joi from 'joi';

export default function Login(props) {
  let [user,setUser] = useState({
    email:"",
    password:"",
  });
   let [errorMsg,setErrorMsg] = useState('');
   let [errorsList,setErrorList]=useState([]);
   let [loading,setLoading] = useState(false);
   const navigate =useNavigate();
   function goToHome() {
    navigate('/home')
   }
  // /function form
  async function submitFormData(even){
    even.preventDefault();
    setLoading(true); 
    let valValidation = valiationForm();
    if(valValidation.error){
      setErrorList(valValidation.error.details)
    }
    else{
      let {data}= await axios.post('https://sticky-note-fe.vercel.app/signin',user);
      // console.log(data);
      if(data.message =="success"){
        localStorage.setItem ('userToken',data.token);
        props.saveUserData();
        // console.log(data);
        goToHome();
      }else{
        setErrorMsg(data.message)
      }
  }
    setLoading(false)
    }
   
  ///function joi
  function valiationForm() {
    const schema = Joi.object({
      email:Joi.string().required().email({tlds:{allow:['net','com']}}),
      password:Joi.string().required().pattern(new RegExp(/^[a-z][0-9]{3}$/)),
    });
    return schema.validate(user,{abortEarly:false});
  }

  ///function input
  function getFormValue(even){
    let myUser={...user};
    myUser[even.target.name]=even.target.value;
    setUser(myUser)
  }
  // function create a new account
 function createAccount(){
  navigate('/register');
 }
  return (
    <>
     <div className="my-3 w-75 m-auto">
       <h1>Login</h1>
       {errorsList.map((error,index)=>(<div key={index} className="alert alert-danger">{error.message}</div>))}
       {errorMsg?<div className="alert alert-danger">{errorMsg}</div>:' '}
        <form onSubmit={submitFormData}>
       <div className="input-gp my-3">
          <label htmlFor="email">Email</label>  
          <input type="email" name='email'
           className='form-control'
           onChange={getFormValue}/>
       </div>
       <div className="input-gp my-3">
          <label htmlFor="password">Password:</label>  
          <input type="password" name='password' 
          className='form-control'
          onChange={getFormValue}/>
       </div> 
       <button type="submit" className='btn btn-outline-info float-end text-light'>
        {loading?<i className='fa fa-spinner fa-spin'></i>:'Login'}
        </button>
       <div className="clearfix"></div>
        <button  className='btn btn-outline-primary  text-light w-100 mt-3' onClick={createAccount}>Create Account</button>
        </form>
     </div>
    </>
  )
}
