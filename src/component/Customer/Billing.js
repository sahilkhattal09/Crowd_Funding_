import React from 'react';
import './Billing.css';
import cardLogo from '../Logo/card.png';
import { useNavigate, useParams} from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';
import {useForm} from "react-hook-form";
import ThankYou from '../Customer/ThankYou';
import { Button, Modal } from 'react-bootstrap';

const Billing = () =>{
  const { id } = useParams();

  const { register, formState: {errors},handleSubmit } = useForm();
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/Donate');
  }

  const navigate = useNavigate();

  const [users, setUsers] = useState({
    name:"",
    amount:"",
    address:"",
    city:"",
    state:"",
    cname:"",
    cnumber:"",
    emonth:"",
    eyear:"",
    cvv:""
  })
  const{name,amount,address,city,state,cname,cnumber,emonth,eyear,cvv}=users;
  const handleChange = (e) =>{
    setUsers({...users,[e.target.name]:e.target.value});
  }
  const submitForm = async(e) =>{
    // e.preventDefault();
    console.log(id);
    console.log(users);
    await axios.post(`http://localhost/FinalYearProject/billing.php?id=${id}`,users)
    .then((rs)=>{
      console.log(rs);
      if(rs.data.status =="valid")
      {
        // alert("payment successful");
        setPaymentSuccessful(true);
        // navigate('/Donate');
      }
      else if(rs.data.status =="invalid")
      { 
        alert("payment failed");
      }
      else if(rs.data.status =="full"){
        setShowModal(true);
      }
      else
      {
        alert("There is some problem"+rs.data.status);
      }
    })
  }

    return(
    <>
     {paymentSuccessful ? (
        <ThankYou/>
      ) : (
    <div id='Login'>
      <Modal show={showModal} onHide={handleCloseModal}>
         {/* <Modal.Header >
           <Modal.Title>Confirm Logout</Modal.Title>
         </Modal.Header> */}
         <Modal.Body>Amount required is already collected</Modal.Body>
         <Modal.Footer>
           <Button  onClick={handleCloseModal} style={{width:'40%'}}>
             ok
           </Button>
          
         </Modal.Footer>
       </Modal>
        <div className="col-75" >
            <div className="Bcontainer" style={{background:'#e9ecef',boxShadow:'  0px 10px 10px rgba(0, 0, 0, 0.5)', borderRadius:'20px', animation: "popup 0.3s ease" }}>
            <form action="/action_page.php" onSubmit={handleSubmit( e => submitForm(e))}>
                <div className="row">
                <div className="col-50">
                    <h3>Billing Address</h3>
                    <label htmlFor="fname">Full Name</label>
                    <input type="text" id="fname" name="name" placeholder="John M. Doe"  value={name} {...register("name", {required: true,pattern:/^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/})} onChange={e =>handleChange(e)} />
                    <p style={{color:'red',fontSize:'13px'}}>{errors.fname?.type === "required" && "*Enter name"}</p>
                    <p style={{color:'red'}}>{errors.name?.type === "pattern" && "invalid name format"}</p>


                    <label htmlFor="amount">Enter Amount</label>
                    <input type="number" id="amount" name="amount" placeholder="Amount"  value={amount} {...register("amount", {required: true,pattern:/^\d+(\.\d{1,2})?$/})} onChange={e =>handleChange(e)}/>
                    <p style={{color:'red',fontSize:'13px'}}>{errors.amount?.type === "required" && "*Enter Amount"}</p>
                    <p style={{color:'red'}}>{errors.amount?.type === "pattern" && " you have entered invalid amount"}</p>


                    <label htmlFor="adr"> Address</label>
                    <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"  value={address} {...register("address", {required: true})} onChange={e =>handleChange(e)}/>
                    <p style={{color:'red',fontSize:'13px'}}>{errors.address?.type === "required" && "*Enter Address"}</p>
                    
                    <label htmlFor="city"> City</label>
                    <input type="text" id="city" name="city" placeholder="New York"  value={city} {...register("city", {required: true,pattern:/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/})} onChange={e =>handleChange(e)}/>
                    <p style={{color:'red',fontSize:'13px'}}>{errors.city?.type === "required" && "*Enter city"}</p>
                    <p style={{color:'red'}}>{errors.city?.type === "pattern" && " you have entered incorrect city name"}</p>
                    
                    
                    <div className="row">
                        <div className="col-50">
                            <label htmlFor="state">State</label>
                            <input type="text" id="state" name="state" placeholder="state"  value={state} {...register("state", {required: true,pattern:/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/})} onChange={e =>handleChange(e)}/>
                            <p style={{color:'red',fontSize:'13px'}}>{errors.state?.type === "required" && "*Enter state"}</p>
                             <p style={{color:'red'}}>{errors.city?.type === "pattern" && "State with this name doesn't exist"}</p>
                    
                        </div>
                    </div>
                </div>
                <div className="col-50">
                    <h3>Payment</h3>
                    <label htmlFor="cards">Enter Card Details</label>
                    <img src={cardLogo} alt="card"/><br/><br/><br/><br/>

                    <label htmlFor="cname">Name on Card</label>
                    <input type="text" id="cname" name="cname" placeholder="John More Doe"  value={cname} {...register("cname", {required: true,pattern:/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/})} onChange={e =>handleChange(e)}/>
                    <p style={{color:'red',fontSize:'13px'}}>{errors.cname?.type === "required" && "*Enter name on the card"}</p>
                    <p style={{color:'red'}}>{errors.cname?.type === "pattern" && " you have entered incorrect card name"}</p>
                    
                    <label htmlFor="ccnum">card number</label>
                    <input type="number" id="ccnum" name="cnumber" placeholder="1111-2222-3333-4444"  value={cnumber} {...register("cnumber", {required: true,pattern:/^4[0-9]{12}(?:[0-9]{3})?$/ })} onChange={e =>handleChange(e)}/>
                    <p style={{color:'red',fontSize:'13px'}}>{errors.cnumber?.type === "required" && "*Enter card number"}</p>
                    <p style={{color:'red'}}>{errors.cnumber?.type === "pattern" && " you have entered incorrect card number"}</p>

                    <label htmlFor="expmonth">Exp Month</label>
                    <input type="number" id="expmonth" name="emonth" placeholder="Month number"  value={emonth} {...register("emonth", {required: true,pattern:/^(0?[1-9]|1[0-2])$/})} onChange={e =>handleChange(e)}/>
                    <p style={{color:'red',fontSize:'13px'}}>{errors.emonth?.type === "required" && "*Enter month"}</p>
                    <p style={{color:'red'}}>{errors.emonth?.type === "pattern" && " you have entered invalid details"}</p>


                    <div className="row">
                    <div className="col-50">
                        <label htmlFor="expyear">Exp Year</label>
                        <input type="number" id="expyear" name="eyear" placeholder={2018}  value={eyear} {...register("eyear", {required: true,pattern:/^1\d{3}|20([0-1][0-9]|2[0-3]|30)$/})} onChange={e =>handleChange(e)}/>
                        <p style={{color:'red',fontSize:'13px'}}>{errors.eyear?.type === "required" && "*Enter year"}</p>
                        <p style={{color:'red'}}>{errors.eyear?.type === "pattern" && " you have entered invalid year"}</p>
                    </div>
                    
                    <div className="col-50">
                        <label htmlFor="cvv">CVV</label>
                        <input type="number" id="cvv" name="cvv" placeholder={352}  value={cvv} {...register("cvv", {required: true,pattern:/^\d{3,4}$/})} onChange={e =>handleChange(e)}/>
                        <p style={{color:'red',fontSize:'13px'}}>{errors.cvv?.type === "required" && "*Enter cvv"}</p>
                        <p style={{color:'red'}}>{errors.cvv?.type === "pattern" && " you have entered invalid cvv number"}</p>

                    </div>
                    </div>
                </div>
                </div>
                <input type="submit" name="submit" value="Donate"/>
            </form>
            </div>
        </div>
      
        </div>
        
        
      )}
    </>
    );
}
export default Billing;