import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  let [user,setUser] = useState({
    first_name:"",
    last_name:"",
    email:"",
    password:"",
    age:""
  });
   let [errorMsg,setErrorMsg] = useState('');
   let [errorsList,setErrorList]=useState([]);
   let [loading,setLoading] = useState(false);
   const navigate =useNavigate();
   function goToLogin(params) {
    navigate('/Login')
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
      let {data}= await axios.post('https://sticky-note-fe.vercel.app/signup',user);
      console.log(data);
      if(data.message == "success"){
        goToLogin();
      }else{
        setErrorMsg(data.message)
      }
  }
    setLoading(false)
    }
   
  ///function joi
  function valiationForm() {
    const schema = Joi.object({
      first_name:Joi.string().alphanum().required().min(3).max(10),
      last_name:Joi.string().alphanum().required().min(3).max(10),
      age:Joi.number().required().min(20).max(80),
      email:Joi.string().required().email({tlds:{allow:['net','com']}}),
      password:Joi.string().required().pattern(new RegExp(/^[a-z][0-9]{3}$/)), 
    });
    return schema.validate(user,{abortEarly:false});
  }

  ///function input
  function getFormValue(even){
    let myUser={...user};
    myUser[even.target.name]=even.target.value;
    setUser(myUser);
    console.log(myUser);
  }
  return (
    <>
     <div className="my-3 w-75 m-auto">
       <h1>Register Form</h1>
       {errorsList.map((error,index)=>(<div key={index} className="alert alert-danger">{error.message}</div>))}
       {errorMsg?<div className="alert alert-danger">{errorMsg}</div>:' '}
        <form onSubmit={submitFormData}>
        <div className="input-gp my-3">
          <label htmlFor="first_name">FristName:</label>  
          <input type="text" name='first_name'
            className='form-control'
            onChange={getFormValue}/>
       </div>
       <div className="input-gp my-3">
          <label htmlFor="last_name">LastName:</label>  
          <input type="text" name='last_name' 
          className='form-control'
          onChange={getFormValue}/>
       </div>
       <div className="input-gp my-3">
          <label htmlFor="age">Age:</label>  
          <input type="number" name='age' 
          className='form-control'
          onChange={getFormValue}/>
       </div>
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
        {loading?<i className='fa fa-spinner fa-spin'></i>:'Register'}
        </button>
       <div className="clearfix"></div>
        </form>
     </div>
    </>
  )
}