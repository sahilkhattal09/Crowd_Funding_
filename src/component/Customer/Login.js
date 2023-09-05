import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {useForm} from "react-hook-form";
import { Button, Modal } from 'react-bootstrap';
import img3 from '../Images/draw1.webp';

const Login = () => {
  
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

  const [dlog,setDlog] = useState(false);

  const [isLoaded, setIsLoaded] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const dlg = localStorage.getItem('Dlogin');
    if(dlg ==='true'){
      setShowModal(true);
      setDlog(true);
    }

    const loginStatus = localStorage.getItem('login');
    if (loginStatus === 'true') {
      setIsLoggedIn(true);
    }
    setIsLoaded(true);
  }, []);

  const{email,password}=users;
  const handleChange = (e) =>{
    setUsers({...users,[e.target.name]:e.target.value});
  }
  const submitForm = async(e) =>{
    // console.log(users);

    await axios.post("http://localhost/FinalYearProject/Login.php",users)
    .then((resp)=>{
      console.log(resp);
      if(resp.data.status =="valid")
      {
        // alert("Login successful");
        setIsLoggedIn(true);
        localStorage.setItem('login', 'true');
        localStorage.setItem('userId',resp.data.userId);
        localStorage.setItem('email',resp.data.email);
        window.location.reload();
        navigate('/');
      }
      else if(resp.data.status =="invalid")
      {
        alert("There is some problem");
      }
      else
      {
        alert("There is some problem"+resp.data.status);
      }
    })
  }
    return (
      <>
      {dlog ?(
        <>
         <Modal show={showModal} onHide={handleCloseModal}>
         {/* <Modal.Header >
           <Modal.Title>Confirm Logout</Modal.Title>
         </Modal.Header> */}
         <Modal.Body>Please logout from current Account </Modal.Body>
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
            navigate('/Donate')
        ) : (

        <div id="Login" className={`login ${isLoaded ? "loaded" : ""}`} style={{marginLeft:"225px"}}>
            <div className="section">
                <div class="box-area">
                  <section className="vh-100" >
                    <div className="container h-100">
                      <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11" >
                          <div className="card text-black" style={{background:'#e9ecef',boxShadow:'  0px 10px 10px rgba(0, 0, 0, 0.5)', borderRadius:'20px', animation: "popup 0.3s ease" }}>
                            <div className="card-body p-md-5" >
                              <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign In</p>
                                  <form className="mx-1 mx-md-4" onSubmit={handleSubmit( e => submitForm(e))}>
                                    <div className="form-outline flex-fill mb-0">
                                      <input type="text"  className="form-control" style={{boxShadow:' 0px 5px 5px rgba(0, 0, 0, 0.5)'}} placeholder="Enter email" value={email} {...register("email", { required:true})} onChange={e =>handleChange(e)} />
                                      <p style={{color:'red',fontSize:'13px'}}>{errors.email?.type === "required" && "*Enter email"}</p>

                                    </div>
                                    <div className="form-outline flex-fill mb-0">
                                      <input type="password"  className="form-control" style={{boxShadow:' 0px 5px 5px rgba(0, 0, 0, 0.5)'}} placeholder="Enter password" value={password} {...register("password", { required:true,})} onChange={e =>handleChange(e)}/>
                                      <p style={{color:'red',fontSize:'13px'}}>{errors.password?.type === "required" && "*Enter password"}</p>
                                      
                                    </div>
                                    <div className="form-check d-flex justify-content-center mb-5">
                                      <label className="form-check-label" htmlFor="form2Example3">
                                        Already have an accout? <a href="/Register">Register</a>
                                      </label> 
                                    </div>
                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                    <button type="submit" className="btn btn-primary btn-lg" name="submit" value="add user" >Login</button>
                                    </div>
                                  </form>
                                </div>
                                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                  <img src={img3} className="img-fluid" style={{backgroundSize:'cover', borderRadius:'20px',boxShadow:'0px 5px 10px 0px rgba(0, 0, 0, 0.5)'}} alt="Sample image" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>    
            </div>     
        </div>

)}
    </>
      )}
    </>
  );
};

export default Login;