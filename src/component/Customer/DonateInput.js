import React from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import { useState, useEffect, useRef} from "react";
import axios from 'axios';
import {useForm} from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DonateInput(){
  const [nm, setPname] = useState([]);
  const [ti,setTi] = useState([]);
  const [ig,setIg] = useState([null]);
  const [dis,setDis]=useState([]);

  const { register, formState: {errors},handleSubmit } = useForm();
  const navigate = useNavigate();

  // const { id } = useParams();
  const id = localStorage.getItem('userId');

  const [status, setStatus] = useState(null);

  const [isMessageShown, setIsMessageShown] = useState(false);

  const messageShownRef = useRef(false);

useEffect(() => {
  if (!messageShownRef.current) {
    messageShownRef.current = true;
    toast("Your verification form has been verified");
  }
  fetch(`http://localhost/FinalYearProject/dinputStatusCheck.php?id=${id}`)
    .then((ab) => ab.json())
    .then((data) => {
      console.log("Hello world");
      setStatus(data.status); 
      console.log(data.status);
    });
}, [id]);


  useEffect(() => {
    if (status == "pending" && !isMessageShown) {
      setIsMessageShown(true);
      // toast("Your verification form has been verified");
      toast("Please wait unit your campaign form is verified");
      setTimeout(() => 
      {
        navigate('/');
      }, 7000);

    } else if (status == "verified") {
      navigate(`/dview/${id}`);
    } else if (status == "reject"  && !isMessageShown) {
      setIsMessageShown(true);
      // toast("Your verification form has been verified");
      toast("Your form is rejected by admin");
      setTimeout(() => {
        navigate('/updatev');
      }, 7000);
    }
  }, [status, isMessageShown, id]);

  


  const handleChange = (e) =>{
    const target = e.target;
    const name = target.name;
    if (name === 'pname') {
      setPname(e.target.value);
    }
    if (name === 'title') {
      setTi(e.target.value);
    }
    if (name === 'pImage') {
      setIg(e.target.files[0]);
    }
    if (name === 'discrip') {
      setDis(e.target.value);
    }
    
  }

  const submitForm = async(e) =>{

    const fd = new FormData();
    fd.append('pname',nm);
    fd.append('title',ti);
    fd.append('pImage',ig);
    fd.append('discrip',dis);

    console.log(fd);

    await axios.post(`http://localhost/FinalYearProject/dInput.php?id=${id}`,fd)
    .then((rspo)=>{
      // console.log(rspo);
      if(rspo.data.status =="valid")
      {
        alert("Data uploaded successfully");
        console.log(rspo.data.status );
        navigate('/');
      }
      else if(rspo.data.status =="invalid")
      {
        alert("There is some problem");
        console.log(rspo.data.status );
      }
      else if(rspo.data.status =="exist")
      {
        alert("Image already exist");
        console.log(rspo.data.status );
      }
      else if(rspo.data.status =="invalid_type")
      {
        alert("The file you have uploaded is invalid");
        console.log(rspo.data.status );
      }
      else if(rspo.data.status =="invalid_size")
      {
        alert("File size exceeds 2MB limit.");
        console.log(rspo.data.status );
      }
      else
      {
        alert("There is some problem");
        console.log(rspo.data.status );
      }
    })
  }
    return(
        <>
         <div id='Login' style={{marginLeft:'225px'}}>
          <title>Volunteer Sign up form</title>
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossOrigin="anonymous" />
          <style dangerouslySetInnerHTML={{__html: "\n      html, body {\n      min-height: 100%;\n      }\n      body, div, form, input, select, textarea, label, p { \n      padding: 0;\n      margin: 0;\n      outline: none;\n        line-height: 22px;\n      }\n      h1 {\n      position: absolute;\n      margin: 0;\n      font-size: 40px;\n      color: #fff;\n      z-index: 2;\n      line-height: 83px;\n      }\n      textarea {\n      width: calc(100% - 12px);\n      padding: 5px;\n      }\n      .testbox {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      height: inherit;\n      padding: 20px;\n      }\n      form {\n      width: 100%;\n      padding: 20px;\n      border-radius: 6px;\n      background: #fff;\n      box-shadow: 0 0 8px  #669999; \n      }\n      .banner {\n      position: relative;\n      height: 300px;  \n      background-size: cover;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-align: center;\n      }\n      .banner::after {\n      content: \"\";\n      background-color: rgba(0, 0, 0, 0.3); \n      position: absolute;\n      width: 100%;\n      height: 100%;\n      }\n      input, select, textarea {\n      margin-bottom: 10px;\n      border: 1px solid #ccc;\n      border-radius: 3px;\n      }\n      input {\n      width: calc(100% - 10px);\n      padding: 5px;\n      }\n      input[type=\"date\"] {\n      padding: 4px 5px;\n      }\n      textarea {\n      width: calc(100% - 12px);\n      padding: 5px;\n      }\n      .item:hover p, .item:hover i, .question:hover p, .question label:hover, input:hover::placeholder {\n      color:  #669999;\n      }\n      .item input:hover, .item select:hover, .item textarea:hover {\n      border: 1px solid transparent;\n      box-shadow: 0 0 3px 0  #669999;\n      color: #669999;\n      }\n      .item {\n      position: relative;\n      margin: 10px 0;\n      }\n      .item span {\n      color: red;\n      }\n      .week {\n      display:flex;\n      justfiy-content:space-between;\n      }\n      .colums {\n      display:flex;\n      justify-content:space-between;\n      flex-direction:row;\n      flex-wrap:wrap;\n      }\n      .colums div {\n      width:48%;\n      }\n      input[type=\"date\"]::-webkit-inner-spin-button {\n      display: none;\n      }\n      .item i, input[type=\"date\"]::-webkit-calendar-picker-indicator {\n      position: absolute;\n      font-size: 20px;\n      color:  #a3c2c2;\n      }\n      .item i {\n      right: 1%;\n      top: 30px;\n      z-index: 1;\n      }\n      input[type=radio], input[type=checkbox]  {\n      display: none;\n      }\n      label.radio {\n      position: relative;\n      display: inline-block;\n      margin: 5px 20px 15px 0;\n      cursor: pointer;\n      }\n      .question span {\n      margin-left: 30px;\n      }\n      .question-answer label {\n      display: block;\n      }\n      label.radio:before {\n      content: \"\";\n      position: absolute;\n      left: 0;\n      width: 17px;\n      height: 17px;\n      border-radius: 50%;\n      border: 2px solid #ccc;\n      }\n      input[type=radio]:checked + label:before, label.radio:hover:before {\n      border: 2px solid  #669999;\n      }\n      label.radio:after {\n      content: \"\";\n      position: absolute;\n      top: 6px;\n      left: 5px;\n      width: 8px;\n      height: 4px;\n      border: 3px solid  #669999;\n      border-top: none;\n      border-right: none;\n      transform: rotate(-45deg);\n      opacity: 0;\n      }\n      input[type=radio]:checked + label:after {\n      opacity: 1;\n      }\n      .flax {\n      display:flex;\n      justify-content:space-around;\n      }\n      .btn-block {\n      margin-top: 10px;\n      text-align: center;\n      }\n      button {\n      width: 150px;\n      padding: 10px;\n      border: none;\n      border-radius: 5px; \n      background:  #669999;\n      font-size: 16px;\n      color: #fff;\n      cursor: pointer;\n      }\n      button:hover {\n      background:  #a3c2c2;\n      }\n      @media (min-width: 568px) {\n      .name-item, .city-item {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: space-between;\n      }\n      .name-item input, .name-item div {\n      width: calc(50% - 20px);\n      }\n      .name-item div input {\n      width:97%;}\n      .name-item div label {\n      display:block;\n      padding-bottom:5px;\n      }\n      }\n    " }} />
          <div className="testbox" style={{marginLeft:'200px',marginRight:'200px',marginTop:"50px",marginBottom:"50px"}}>
            <form onSubmit={handleSubmit( e => submitForm(e)) }style={{borderRadius:'20px',background:'#e9ecef',boxShadow:'0px 5px 10px 0px rgba(0, 0, 0, 0.3)'}}  encType="multipart/form-data">
              <div className="colums">
                <div className="item">
                  <label htmlFor="name">Name<span>*</span></label>
                  <input id="name" type="text" name="pname" placeholder='Enter name of the patient' {...register("pname", {required: true})} onChange={e =>handleChange(e)}/>  
                  <p style={{color:'red',fontSize:'13px'}}>{errors.pname?.type === "required" && "*Enter name"}</p>
                </div>
                <div className="item">
                  <label htmlFor="eaddress">Title<span>*</span></label>
                  <input id="title" type="text" name="title"  placeholder='Enter Title'  {...register("title", {required: true})} onChange={e =>handleChange(e)}/>
                  <p style={{color:'red',fontSize:'13px'}}>{errors.title?.type === "required" && "*Enter Title"}</p>
                </div>
                <div className="item">
                  <label>Image<span>*</span></label>
                  <input type="file" id="pImage" name="pImage" placeholder='Select patient photo' {...register("pImage", {required: true})} onChange={e => handleChange(e)} accept="image/*" />
                  <p style={{color:'red',fontSize:'13px'}}>{errors.pImage?.type === "required" && "*Enter Image"}</p>
                </div>
              </div>
              <div className="week">
              </div>
              <div className="item">
                <label htmlFor="visit">Enter discription</label>
                <textarea id="visit" rows={3} name="discrip" style={{boxshadow:'2px 2px 5px rgba(0, 0, 0, 0.5)'}}  {...register("discrip", {required: true})} onChange={e =>handleChange(e)}/>
                <p style={{color:'red',fontSize:'13px'}}>{errors.discrip?.type === "required" && "*Enter Discription"}</p>
              </div>
              <div className="btn-block">
                <button type="submit" name="submit" value="add user"  href="/">Submit</button>
              </div>
            </form>
          </div>
          <ToastContainer />
        </div>
        </>
    );
}
export default DonateInput;
