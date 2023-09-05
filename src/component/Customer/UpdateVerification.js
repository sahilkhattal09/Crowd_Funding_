import React from "react";
import { useState, useEffect} from "react";
import { useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';
import {useForm} from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function UpdateVerification() {

  const id  =  localStorage.getItem('userId');
 
  const { register, formState: {errors},handleSubmit } = useForm();

  const [nam, setNam] = useState([]);
  const [gen, setGen] = useState([]);
  const [datb, setDatb] = useState([]);
  const [Rel, setRel] = useState([]);
  const [mob, setMob] = useState([]);
  const [eml, seteml] = useState([]);
  const [aadh, setAadh] = useState([]);
  const [adr, setAdr] = useState([]);
  const [occ, setOcc] = useState([]);
  const [bnk, setBnk] = useState([]);
  const [amt, setAmt] = useState([]);
  const [stg, setStg] = useState([]);
  // const [mroc, setMroc] = useState([]);
  // const [bstry, setBstry] = useState([]);

  const handleChange = (e) =>{
    const target = e.target;
    const name = target.name;
    if (name === 'name') {
      setNam(e.target.value);
    }
    if (name === 'Gender') {
      setGen(e.target.value);
    }
    if (name === 'dob') {
      setDatb(e.target.value);
    }
    if (name === 'Relation') {
      setRel(e.target.value);
    }
    if (name === 'Mno') {
      setMob(e.target.value);
    }
    if (name === 'email') {
      seteml(e.target.value);
    }
    if (name === 'aadhaar') {
      setAadh(e.target.value);
    }
    if (name === 'address') {
      setAdr(e.target.value);
    }
    if (name === 'occupation') {
      setOcc(e.target.value);
    }
    if (name === 'bank') {
      setBnk(e.target.value);
    }
    if (name === 'amount') {
      setAmt(e.target.value);
    }
    if (name === 'stage') {
      setStg(e.target.value);
    }
    // if (name === 'Mrecord') {
    //   setMroc(e.target.files[0]);
    // }
    // if (name === 'Bstory') {
    //   setBstry(e.target.files[0]);
    // }
  }

  const submitForm = async(e) =>{
    // e.preventDefault();
    const fd = new FormData();
    fd.append('name',nam);
    fd.append('Gender',gen);
    fd.append('dob',datb);
    fd.append('Relation',Rel);
    fd.append('Mno',mob);
    fd.append('email',eml);
    fd.append('aadhaar',aadh);
    fd.append('address',adr);
    fd.append('occupation',occ);
    fd.append('bank',bnk);
    fd.append('amount',amt);
    fd.append('stage',stg);
    // fd.append('Mrecord',mroc);
    // fd.append('Bstory',bstry);


    console.log(fd);

    await axios.post(`http://localhost/FinalYearProject/Updatev2.php?id=${id}`,fd)
    .then((respo)=>{
      console.log(respo);
      if(respo.data.status =="valid")
      {
        alert("Data updated succesfully");
        navigate("/");
      }
      else if(respo.data.status =="invalid")
      {
        alert("There is some problem");
      }
      else if(respo.data.status =="exist"){
        alert("Data already exist");
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
    axios.get(`http://localhost/FinalYearProject/UpdateVerification.php?id=${id}`).then(function(rese) {
        console.log(rese.data);
        setNam(rese.data.name);
        setGen(rese.data.gender);
        setDatb(rese.data.dob);
        setRel(rese.data.Relation);
        setMob(rese.data.mobile);
        seteml(rese.data.email);
        setAadh(rese.data.aadhar);
        setAdr(rese.data.address);
        setOcc(rese.data.occupation);
        setBnk(rese.data.bank);
        setAmt(rese.data.amount);
        setStg(rese.data.stage);
        // setMroc(rese.data.mrec);
        // setBstry(rese.data.bst);
    });
}

  return (
    <>
    
    <div id="Login" style={{marginLeft:"225px"}}>
        
    <style dangerouslySetInnerHTML={{__html: "\n      html,\n      body, div, form, input, select, textarea, label, p { \n      padding: 0;\n      margin: 0;\n      outline: none;\n    \n      line-height: 22px;\n      }\n      h1 {\n      position: absolute;\n      margin: 0;\n      font-size: 40px;\n      color: #fff;\n      z-index: 2;\n      line-height: 83px;\n      }\n      textarea {\n      width: calc(100% - 12px);\n      padding: 5px;\n      }\n      .testbox {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      height: inherit;\n      padding: 20px;\n      }\n      form {\n      width: 100%;\n      padding: 20px;\n      border-radius: 6px;\n      background: #fff;\n      box-shadow: 0 0 8px  #669999; \n      }\n      .banner {\n      position: relative;\n      height: 300px;\n      background-image: url(\"/uploads/media/default/0001/02/8070c999efd1a155ad843379a5508d16f544aeaf.jpeg\");  \n      background-size: cover;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-align: center;\n      }\n      .banner::after {\n      content: \"\";\n      background-color: rgba(0, 0, 0, 0.3); \n      position: absolute;\n      width: 100%;\n      height: 100%;\n      }\n      input, select, textarea {\n      margin-bottom: 10px;\n      border: 1px solid #ccc;\n      border-radius: 3px;\n      }\n      input {\n      width: calc(100% - 10px);\n      padding: 5px;\n      }\n      input[type=\"date\"] {\n      padding: 4px 5px;\n      }\n      textarea {\n      width: calc(100% - 12px);\n      padding: 5px;\n      }\n      .item:hover p, .item:hover i, .question:hover p, .question label:hover, input:hover::placeholder {\n      color:  #669999;\n      }\n      .item input:hover, .item select:hover, .item textarea:hover {\n      border: 1px solid transparent;\n      box-shadow: 0 0 3px 0  #669999;\n      color: #669999;\n      }\n      .item {\n      position: relative;\n      margin: 10px 0;\n      }\n      .item span {\n      color: red;\n      }\n      .week {\n      display:flex;\n      justfiy-content:space-between;\n      }\n      .colums {\n      display:flex;\n      justify-content:space-between;\n      flex-direction:row;\n      flex-wrap:wrap;\n      }\n      .colums div {\n      width:48%;\n      }\n      input[type=\"date\"]::-webkit-inner-spin-button {\n      display: none;\n      }\n      .item i, input[type=\"date\"]::-webkit-calendar-picker-indicator {\n      position: absolute;\n      font-size: 20px;\n      color:  #a3c2c2;\n      }\n      .item i {\n      right: 1%;\n      top: 30px;\n      z-index: 1;\n      }\n      input[type=radio], input[type=checkbox]  {\n      display: none;\n      }\n      label.radio {\n      position: relative;\n      display: inline-block;\n      margin: 5px 20px 15px 0;\n      cursor: pointer;\n      }\n      .question span {\n      margin-left: 30px;\n      }\n      .question-answer label {\n      display: block;\n      }\n      label.radio:before {\n      content: \"\";\n      position: absolute;\n      left: 0;\n      width: 17px;\n      height: 17px;\n      border-radius: 50%;\n      border: 2px solid #ccc;\n      }\n      input[type=radio]:checked + label:before, label.radio:hover:before {\n      border: 2px solid  #669999;\n      }\n      label.radio:after {\n      content: \"\";\n      position: absolute;\n      top: 6px;\n      left: 5px;\n      width: 8px;\n      height: 4px;\n      border: 3px solid  #669999;\n      border-top: none;\n      border-right: none;\n      transform: rotate(-45deg);\n      opacity: 0;\n      }\n      input[type=radio]:checked + label:after {\n      opacity: 1;\n      }\n      .flax {\n      display:flex;\n      justify-content:space-around;\n      }\n      .btn-block {\n      margin-top: 10px;\n      text-align: center;\n      }\n      button {\n      width: 150px;\n      padding: 10px;\n      border: none;\n      border-radius: 5px; \n      background:  #669999;\n      font-size: 16px;\n      color: #fff;\n      cursor: pointer;\n      }\n      button:hover {\n      background:  #a3c2c2;\n      }\n      @media (min-width: 568px) {\n      .name-item, .city-item {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: space-between;\n      }\n      .name-item input, .name-item div {\n      width: calc(50% - 20px);\n      }\n      .name-item div input {\n      width:97%;}\n      .name-item div label {\n      display:block;\n      padding-bottom:5px;\n      }\n      }\n    " }} />
          
          <div className="testbox"  style={{marginLeft:'200px',marginRight:'200px' }}>
            <form action="/" onSubmit={handleSubmit( e => submitForm(e))} style={{borderRadius:"20px",marginTop:"20px",marginBottom:'20px',background:'#e9ecef',boxShadow:'0px 5px 10px 0px rgba(0, 0, 0, 0.3)'}}>
              <div className="colums">
              <div className="item">
                  <label htmlFor="name">Name<span></span></label>
                  <input id="name" type="text" name="name" value={nam} placeholder='Enter name of the patient'  {...register("name")} onChange={e =>handleChange(e)}/>
                  {/* <p style={{color:'red',fontSize:'13px'}}>{errors.name?.type === "required" && "*Enter name of the patient"}</p> */}
                </div>

                <div className="item">
                    <label htmlFor="name">Gender<span></span></label>
                    <select id="gender" name='Gender' value={gen} style={{width:'100%',height:'50%'}} {...register("Gender")} onChange={e =>handleChange(e)}>
                    <option value="" selected disabled>Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    </select>
                    {/* <p style={{color:'red',fontSize:'13px'}}>{errors.Gender?.type === "required" && "*Select Gender"}</p> */}

                </div>

                <div className="item">
                    <label>Date of Birth:</label>
                    <input type="date" name="dob" value={datb} className="custom-date-input" {...register("dob")} onChange={e =>handleChange(e)} style={{height:'50%'}}/>
                    {/* <p style={{color:'red',fontSize:'13px'}}>{errors.dob?.type === "required" && "*Enter date of birth"}</p> */}
                    
                </div>

                <div className="item">
                    <label>Relationship with patient:</label>
                    <input id="Relation" type="text" name="Relation" value={Rel} placeholder='Enter Relationship with patient'  {...register("Relation")} onChange={e =>handleChange(e)}/>
                    {/* <p style={{color:'red',fontSize:'13px'}}>{errors.Relation?.type === "required" && "*Enter name"}</p> */}
                </div>

                <div className="item">
                    <label>Phone number:</label>
                    <input type="tel" name="Mno" value={mob} placeholder="Enter mobile number"  {...register("Mno", {pattern:/^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[6789]\d{9}$/})} onChange={e =>handleChange(e)}/>
                    {/* <p style={{color:'red',fontSize:'13px'}}>{errors.Mno?.type === "required" && "*Enter mobile number"}</p> */}
                    <p style={{color:'red'}}>{errors.Mno?.type === "pattern" && "invalid phone number format"}</p>
                </div>

                <div className="item">
                  <label htmlFor="eaddress"> Email<span></span></label>
                  <input id="title" type="email" name="email"  value={eml} placeholder='Enter patient email'  {...register("email", {pattern:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/})} onChange={e =>handleChange(e)}/>
                  {/* <p style={{color:'red',fontSize:'13px'}}>{errors.email?.type === "required" && "*Enter email"}</p> */}
                  <p style={{color:'red'}}>{errors.email?.type === "pattern" && "invalid email address"}</p>
                </div>

                <div className="item">
                    <label>Aadhaar card number:</label>
                    <input type="text" name="aadhaar" value={aadh} placeholder="Enter aadhaar number" {...register("aadhaar", {pattern:/^[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/})} onChange={e =>handleChange(e)}/>
                    {/* <p style={{color:'red',fontSize:'13px'}}>{errors.aadhaar?.type === "required" && "*Enter aadhaar number"}</p> */}
                    <p style={{color:'red'}}>{errors.aadhaar?.type === "pattern" && "invalid aadhar number"}</p>
                </div>

                <div className="item">
                    <label htmlFor="address">Address<span></span></label>
                    <input id="address" type="text" name="address" value={adr} placeholder='Enter address'  {...register("address")} onChange={e =>handleChange(e)}/>
                    {/* <p style={{color:'red',fontSize:'13px'}}>{errors.address?.type === "required" && "*Enter address"}</p> */}
                </div>

                <div className="item">
                    <label>Occupation:</label>
                    <input type="text"  name="occupation" className="form-control" value={occ} placeholder="Enter Patient occupation"  {...register("occupation")} onChange={e =>handleChange(e)}/>
                    {/* <p style={{color:'red',fontSize:'13px'}}>{errors.occupation?.type === "required" && "*Enter occupation"}</p> */}
                </div>

                <div className="item">
                    <label>Bank Account Number:</label>
                    <input type="text"  name="bank" className="form-control" value={bnk} placeholder="Enter Patient Bank Acc"  {...register("bank", {pattern:/^[A-Za-z]{4}\d{7}$/})} onChange={e =>handleChange(e)}/>
                    {/* <p style={{color:'red',fontSize:'13px'}}>{errors.bank?.type === "required" && "*Enter patient bank account number"}</p> */}
                    <p style={{color:'red'}}>{errors.bank?.type === "pattern" && "invalid bank account number"}</p>
                </div>

                <div className="item">
                    <label>Amount:</label>
                    <input type="number"  name="amount"  className="form-control" value={amt} placeholder="Enter Amount needed" {...register("amount")} onChange={e =>handleChange(e)}/>
                    {/* <p style={{color:'red',fontSize:'13px'}}>{errors.amount?.type === "required" && "*Enter amount"}</p> */}
                </div>

                <div className="item">
                    <label htmlFor="name">Please select the stage of funds needed.<span></span></label>
                    <select id="stage" required placeholder="-" value={stg} name='stage'style={{width:'100%',height:'50%'}} {...register("stage")} onChange={e =>handleChange(e)}>
                    <option value="" selected disabled>Select stage</option>
                      <option value="week">Week</option>
                      <option value="month">Month</option>
                      <option value="year">Year</option>
                    </select>
                    {/* <p style={{color:'red',fontSize:'13px'}}>{errors.stage?.type === "required" && "*Plese select stage"}</p> */}
                </div>

                {/* <div className="item">
                    <label>Medical Records:</label>
                    <input name="Mrecord" type="file" className="form-control"accept="application/pdf"  placeholder="Add Patient's Medical History"  {...register("Mrecord", {required: true})} onChange={e =>handleChange(e)}/>
                    <p style={{color:'red',fontSize:'13px'}}>{errors.Mrecord?.type === "required" && "*Enter Medical Records "}</p>
                </div>

                <div className="item">
                    <label>Background Story</label>
                    <input name="Bstory" type="file" className="form-control"  accept="application/pdf"  placeholder="Add the reason behind the Patient's ailment" {...register("Bstory", {required: true})} onChange={e =>handleChange(e)} />
                    <p style={{color:'red',fontSize:'13px'}}>{errors.Bstory?.type === "required" && "*Enter background story"}</p>
                </div> */}

              </div>
             
              <div className="btn-block">
              <button type="submit" href="/">Submit</button>
              </div>
              
            </form>
          </div>
           
          <ToastContainer />
        </div>
      
    </>
  );
}
export default UpdateVerification;
