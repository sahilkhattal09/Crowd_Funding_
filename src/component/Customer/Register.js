import React from "react";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {useForm} from "react-hook-form";
import img3 from '../Images/draw1.webp';

const Register = () => {
  const { register, formState: {errors},handleSubmit } = useForm();
  const navigate = useNavigate();
  const [users, setUsers] = useState({
    name:"",
    mobile:"",
    email:"",
    password:""  
  })
  const{name,mobile,email,password}=users;
  const handleChange = (e) =>{
    setUsers({...users,[e.target.name]:e.target.value});
  }
  const submitForm = async(e) =>{

    console.log(users);

    await axios.post("http://localhost/FinalYearProject/Register.php",users)
    .then((response)=>{
      console.log(response);
      if(response.data.status =="valid")
      {
        alert("Data added successfully");
        navigate('/Login');
      }
      else if(response.data.status =="invalid")
      {
        alert("There is some problem");
      }
      else if(response.data.status =="exist"){
        alert("Account already exist");
      }
      else
      {
        alert("There is some problem"+response.data.status);
      }
    })
  }

  return(
    <>
    <div id="Login" style={{marginLeft:"225px"}}>
      <section className="vh-100" >
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{marginTop:'30px',marginBottom:'30px', borderRadius:'20px',background:'#e9ecef',boxShadow:' 0px 10px 10px rgba(0, 0, 0, 0.5)'}}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                      <form className="mx-1 mx-md-4" onSubmit={handleSubmit( e => submitForm(e))}>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" name="name" className="form-control" placeholder="Enter Name" value={name} {...register("name", { required:true,pattern:/^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/})} onChange={e =>handleChange(e)}/>
                            <p style={{color:'red',fontSize:'13px'}}>{errors.name?.type === "pattern" && "*Enter name"}</p>
                            <p style={{color:'red'}}>{errors.name?.type === "pattern" && "invalid name format"}</p>

                          </div>
                          <div className="form-outline flex-fill mb-0">
                            <input type="tel" name="mobile" className="form-control" placeholder="Enter Mobile Number" value={mobile} {...register("mobile", { required:true})} onChange={e =>handleChange(e)} />
                            <p style={{color:'red',fontSize:'13px'}}>{errors.mobile?.type === "required" && "*Enter mobile number"}</p>
                          </div>
                          <div className="form-outline flex-fill mb-0">
                            <input type="email"  name="email" className="form-control" placeholder="Enter email" value={email} {...register("email", { required:true})} onChange={e =>handleChange(e)}/>
                            <p style={{color:'red',fontSize:'13px'}}>{errors.email?.type === "required" && "*Enter email"}</p>
                          </div>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password"  name="password" className="form-control" placeholder="Enter password" value={password} {...register("password", { required:true})} onChange={e =>handleChange(e)} />
                            <p style={{color:'red',fontSize:'13px'}}>{errors.password?.type === "required" && "*Enter password"}</p>
                          </div>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" name="cpass" className="form-control" placeholder="Confirm password" {...register("cpass", { required:true})} />
                            <p style={{color:'red',fontSize:'13px'}}>{errors.cpass?.type === "required" && "*Please confirm password"}</p>
                          </div>
                        <div className="form-check d-flex justify-content-center mb-5">
                          <label className="form-check-label" htmlFor="form2Example3">
                            Already have an accout? <a href="/Login">Login</a>
                          </label>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" className="btn btn-primary btn-lg" name="submit" value="add user" >Register</button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2" >
                      <img src={img3} style={{backgroundSize:'cover', borderRadius:'20px',boxShadow:'0px 5px 10px 0px rgba(0, 0, 0, 0.5)'}} className="img-fluid" alt="Sample image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  ); 
};

export default Register;