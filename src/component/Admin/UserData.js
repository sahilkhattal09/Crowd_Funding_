import React from 'react'
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { useParams,useNavigate} from 'react-router-dom';
import {useForm} from "react-hook-form";


function UserData(){
    

    const [nam, setName] = useState([]);
    const [titl, setTitle] = useState([]);
    const [des, setDes] = useState([]);
    const [amt, setAmount] = useState([]);
    const [img, setImg] = useState([]);

    // const navigate = useNavigate();
    
    const [ver, setVer] = useState([]);

    const { register, formState: {errors},handleSubmit } = useForm();

    const { id } = useParams();

    const handleChange = (e) =>{
      const target = e.target;
      const name = target.name;

      if (name == 'name') {
        setName(e.target.value);
      }
      if (name == 'title'){
        setTitle(e.target.value);
      }
      if(name == 'description'){
        setDes(e.target.value);
      }
      if(name == 'amount'){
        setAmount(e.target.value);
      }
      if (name == 'verify') {
        setVer(e.target.value);
      }
    }
    const submitForm = async(e) =>{
      const fd = new FormData();
      fd.append('name',nam);
      fd.append('title',titl);
      fd.append('description',des);
      fd.append('amount',amt);
      fd.append('verify',ver);

      await axios.post(`http://localhost/FinalYearProject/Status.php?id=${id}`,fd)
    .then((stat)=>{
      console.log(stat);
      if(stat.data.status == "valid")
      {
        alert("Data updated successfully");
      }
      else if(stat.data.status == "invalid")
      {
        alert("Failed to update");
      }
      else
      {
        alert("There is some problem");
      }
    })
    }

    useEffect(() => {
        getUsers();
    }, []); 

    
    function getUsers() {
        axios.get(`http://localhost/FinalYearProject/dInputUserData.php?id=${id}`).then(function(rese) {
            setName(rese.data.name);
            setTitle(rese.data.title);
            setDes(rese.data.description);
            setAmount(rese.data.amount);
            setImg(rese.data.image);
        });
    }
    return(
      
        <>
        <div id="Login" className='avp' style={{marginLeft:"225px"}}>
           
                <div  className='divTable' style={{boxShadow:'inset 0px 10px 10px rgba(0, 0, 0, 0.5)'}}>
                  <div className="row justify-content-center">
                   <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                   
                    <div className='vPer'>
                     Name:
                      <hr/>
                    </div>
                    
                    <div className='vPer'>
                      Title: 
                      <hr/>
                    </div>

                    <div className='vPer'>
                    Description :
                    <hr/>
                    </div> 

                    <div className='vPer'>
                    Amount:
                    <hr/>
                    </div>
                    
                   </div>

                   <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <form className="mx-1 mx-md-4" onSubmit={handleSubmit( e => submitForm(e))}>

                    <input type='text' name='name' value={nam} onChange={e =>handleChange(e)}/>
                    <input type='text' name='title' value={titl} onChange={e =>handleChange(e)}/>
                    <input type='text' name='description' value={des} onChange={e =>handleChange(e)}/>
                    <input type='number' name='amount' value={amt} onChange={e =>handleChange(e)}/>

                    
                      <select id="verify" name='verify' style={{width:'100%',height:'60px'}} {...register("verify", {required: true})} onChange={e =>handleChange(e)}>
                        <option value="" selected disabled>Select status</option>
                        <option value="pending">pending</option>
                        <option value="verified">accept</option>
                        <option value="reject">Reject</option>
                      </select>  
                      <p style={{color:'red',fontSize:'13px'}}>{errors.verify?.type === "required" && "*Select above option "}</p>
                        <button type="submit" href="/">Submit</button>
                    </form>
                  </div>
                </div>
              
                <label>Patient photo</label><br/><br/>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <img src={`http://localhost/FinalYearProject/uploads/`+img}alt="images"className="card-media" style={{width:"500px",height:'300px',boxShadow:' 0px 10px 10px rgba( 0, 0, 0, 0.5)',borderRadius:'20px'}}/>
                </div>
              </div>
        <br/>
        </div>
        </>
    )
}
export default UserData;