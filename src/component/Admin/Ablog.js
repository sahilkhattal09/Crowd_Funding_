import React, { useState } from 'react';
import './Ablog.css';
import axios from 'axios';

const Ablog = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;

    if(name=='title'){
      setTitle(e.target.value);
    }
    if(name == 'blogmessage'){
      setMessage(e.target.value);
    }
    if(name == 'bimage'){
      setImage(e.target.files[0]);
    }
  };

  

  const submitForm = async(e) => {
    e.preventDefault(); // Prevents default form behavior
    const fd = new FormData();
    fd.append('title',title);
    fd.append('blogmessage',message);
    fd.append('bimage',image);
  
    await axios.post('http://localhost/FinalYearProject/blog.php',fd)
    .then((respo)=>{
      console.log(respo);
      if(respo.data.status =="valid")
      {
        alert("Data added successfully");
      }
      else if(respo.data.status =="invalid")
      {
        alert("Data is not valid");
      }
      else
      {
        alert("There is some problem");
      }
    })
  };
  

  return (
    <div id='Login' style={{marginLeft:'225px'}}>
    <div>
      <h1 className="blogs-title">Blogs</h1>
      <div className="ablogcontain">
        <form  onSubmit={ e => submitForm(e)}>
          <label htmlFor="title">Title:</label>
          <input type="text"   name="title" placeholder="title" onChange={e =>handleChange(e)}/>
          <br />
          <label htmlFor="message">Message:</label>
          <textarea   name="blogmessage" placeholder="message" onChange={e =>handleChange(e)}/>
          <br />
          <label htmlFor="image">Image:</label>
          <input type="file"  name="bimage" onChange={e =>handleChange(e)}/>
          
          <br />
          <button type="submit" >Submit</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Ablog;
