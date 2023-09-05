import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from "react";
import axios from 'axios';
import {useForm} from "react-hook-form";
import { Button, Modal } from 'react-bootstrap';
import img3 from '../Images/draw1.webp';


export default function DLogin  (){
  const { register, formState: {errors},handleSubmit } = useForm();

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/');
  }

  const navigate = useNavigate();
  const [users, setUsers] = useState({
    email:"",
    password:""  
  })

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [log, setLog] = useState(false);

  useEffect(() => {
    const loginStatus = localStorage.getItem('Dlogin');
    const logstatus = localStorage.getItem('login');

    if(logstatus ==='true'){
      setShowModal(true);
      setLog(true);
    }

    if (loginStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const{email,password}=users;
  const handleChange = (e) =>{
    setUsers({...users,[e.target.name]:e.target.value});
  }

  const submitForm = async(e) =>{
    // e.preventDefault();
    console.log(users);

    await axios.post("http://localhost/finalYearProject/Dlogin.php",users) 
    .then((re)=>{
      console.log(re);
      if(re.data.status =="valid")
      {
        // alert("Login successful");
        setIsLoggedIn(true); 
        localStorage.setItem('Dlogin', 'true');
        console.log(localStorage.setItem('userId',re.data.userId));
        localStorage.setItem('Demail',re.data.demail);
        navigate('/');
        window.location.reload();
      }
      else if(re.data.status =="invalid")
      {
        alert("Login fail");
      }
      else{
        alert("There is some problem");
      }
    })
    console.log(errors)
  }
  
    return(
      <>
      {log ?(
       <>
        <Modal show={showModal} onHide={handleCloseModal}>
          {/* <Modal.Header >
            <Modal.Title>Confirm Logout</Modal.Title>
          </Modal.Header> */}
          <Modal.Body>Please logout  from current account </Modal.Body>
          <Modal.Footer>
            <Button  onClick={handleCloseModal} style={{width:'40%'}}>
              ok
            </Button>
            
          </Modal.Footer>
        </Modal>
      </>
      ) : (
        <>
        {isLoggedIn ? (
            navigate(`/verification/${localStorage.getItem('userId')}`)
        ) : (

        <div id='Login' style={{marginLeft:"225px"}} >
          <section className="vh-100" >
        <div className="container h-100" >
          <div className="row d-flex justify-content-center align-items-center h-100" >
            <div className="col-lg-12 col-xl-11" >
              <div className="card text-black"  style={{background:'#e9ecef',boxShadow:' 0px 10px 10px rgba(0, 0, 0, 0.5)', borderRadius:'20px',marginTop:'30px',marginBottom:'30px'}}>
                
                <div className="card-body p-md-5" >
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign In</p>
                      <form className="mx-1 mx-md-4" onSubmit={ handleSubmit( e => submitForm(e))}>
                        
                        <div className="form-outline flex-fill mb-0">
                          <input type="email" name="email"  placeholder="Enter email" style={{boxShadow:' 0px 5px 5px rgba(0, 0, 0, 0.5)'}}  value={email} {...register("email", { required:true})}onChange={e =>handleChange(e)}  />
                          <p style={{color:'red'}}>{errors.email?.type === "required" && "Enter email"}</p> 
                        </div>
                    
                        <div className="form-outline flex-fill mb-0">
                          <input type="password" name="password" placeholder="Enter password" style={{boxShadow:' 0px 5px 5px rgba(0, 0, 0, 0.5)'}} value={password} {...register("password", { required:true})} onChange={e =>handleChange(e)} />
                          <p style={{color:'red'}}>{errors.password?.type === "required" && "Enter password"}</p>
                        </div>
                        
                        <div className="form-check d-flex justify-content-center mb-5">
                          <label className="form-check-label" htmlFor="form2Example3">
                            Don't have an accout? <a href="/DRegister">Register</a>
                          </label>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button type="submit" className="btn btn-primary btn-lg" name="submit" value="add user" >Login</button>
                        </div>
                      </form>
                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img src={img3} style={{backgroundSize:'cover', borderRadius:'20px',boxShadow:'0px 5px 10px 0px rgba(0, 0, 0, 0.5)'}}  className="img-fluid" alt="Sample image" />
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
        )}
        </>
      )}
    </>
    );
}

