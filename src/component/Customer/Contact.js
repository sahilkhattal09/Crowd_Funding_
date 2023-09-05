import React from 'react';
import './Contact.css';
import imagelogo from '../Images/project.png';
import { useState,useEffect } from "react";
import {useForm} from "react-hook-form";
import axios from 'axios';

const Contact = () =>{
  const { register, formState: {errors},handleSubmit } = useForm();
  const [users, setUsers] = useState({
    fname:"",
    email:"",
    message:""  
  })

  const{email,fname,message}=users;
  const handleChange = (e) =>{
    setUsers({...users,[e.target.name]:e.target.value});
  }

  const submitForm = async(e) =>{
    // e.preventDefault();
    console.log(users);

    await axios.post("http://localhost/FinalYearProject/contact.php",users)
    .then((csr)=>{
      console.log(csr);
      if(csr.data.status =="valid")
      {
        alert("your response was accepted successfully");
      }
      else if(csr.data.status =="invalid")
      {
        alert("response failed");
      }
      else{
        alert("There is some problem");
      }
    })
    console.log(errors)
  }

    return(
        <>
         <div id='Login' style={{marginLeft:'225px'}}>
            <div className="card">
  <div className="containerr">
    <div className="contentt">
      <div className="left-side">

      <img
          className="d-block w-100"
          src={imagelogo}
          height={300}
          width={300}
          />
        <div className="address details">
          <i className="fas fa-map-marker-alt" />
          <div className="topic">Address</div>
          <div className="text-one">Mapusa, Boshan building</div>
          <div className="text-two">floor-3,Mapusa-Goa</div>
        </div>
        <div className="phone details">
          <i className="fas fa-phone-alt" />
          <div className="topic">Phone</div>
          <div className="text-one">+0832-2472981</div>
          <div className="text-two">+0832-2472421</div>
        </div>
        <div className="email details">
          <i className="fas fa-envelope" />
          <div className="topic">Email </div>
          <div className="text-one">Fund_peti29@gmail.com</div>
          <div className="text-two">ContactFund_Peti96@gmail.com</div>
        </div>
      </div>
      <div className="right-side">
        <div className="topic-text">Contact us </div>
        <p>
          If you have any sort of queries related to account,terms and conditions or any sort of queries do contact us without hesitation on the provided email,or you can drop a message below
        </p>
        <form onSubmit={ handleSubmit( e => submitForm(e))}>
          <div className="inputbox">
          <input type="text" id="fname"  name="name" placeholder="Enter name" style={{boxShadow:' 0px 5px 5px rgba(0, 0, 0, 0.5)'}} value={fname} {...register("fname", { required:true,pattern:/^[A-Za-z]+(([',. -][A-Za-z ])?[A-Za-z]*)*$/})} onChange={e =>handleChange(e)} />
          <p style={{color:'red'}}>{errors.fname?.type === "required" && "Enter name"}</p> 
          <p style={{color:'red'}}>{errors.fname?.type === "pattern" && " you have entered wrong name format"}</p>

          </div>
          <div className="inputbox">
            
            <input type="email" id="email" className="email"   placeholder="Enter your email" value={email} {...register("email", { required:true,pattern:/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/})} onChange={e =>handleChange(e)}  />
            <p style={{color:'red'}}>{errors.email?.type === "required" && "Enter email"}</p> 
            <p style={{color:'red'}}>{errors.email?.type === "pattern" && " you have entered wrong  email format"}</p>
          </div>

         <textarea id="msgtext" className="textmsg"rows={4}  cols={50} placeholder="enter your message here"  value={message} {...register("message", { required:true,pattern:/^[a-zA-Z0-9\s\.,!?@#\$%\^&\*\(\)-_+=;:'"<>\{\}\[\]\\\/]+$/})} onChange={e =>handleChange(e)}/>
         <p style={{color:'red'}}>{errors.message?.type === "required" && "Enter message"}</p> 
            <p style={{color:'red'}}>{errors.message?.type === "pattern" && " you have entered wrong message format"}</p>

         

          <div className="inputbox message-box"></div>
          <div className="button">
            {/* <input type="button" defaultValue="Send Now" /> */}
            <button type="submit" className="btn btn-primary btn-lg" name="submit" value="add user" >Submit</button>
          </div>
          
        </form>
      </div>
    </div>
  </div>
  </div>
</div>
        </>
    );
}
export default Contact;