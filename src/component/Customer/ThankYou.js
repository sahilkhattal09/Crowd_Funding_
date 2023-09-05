import React from 'react';
import backgroundImage from '../Images/background-image.jpg';
import { useNavigate } from 'react-router-dom';

function ThankYou (){

    const navigate = useNavigate();

    const handleButtonClick = () => {
       navigate('/');
      };
    return(
        <>
        <div id="Login">
         <div className='thankyou' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column', backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
            <div style={{backgroundColor: 'rgba(255, 255, 255, 0.5)', marginLeft:'100px', marginRight:'100px', padding:'80px', borderRadius:'40px',animation: "popup 0.3s ease"}}>
                <div >
                    <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Thank you for donating!</h1><br/>
                </div>
                
                <div>
                    <h3 style={{ marginTop: '20px', marginLeft:'50px',marginRight:'50px', color:'black',justifyContent: 'center', alignItems: 'center' }}>Thank you for your generous Donation to Fundpetti. We are thrilled to have your support. Through your donation we have been able to save lives and continue working towards helping people . You truly make the difference for us, and we are extremely grateful! </h3>
                </div>
            </div>
            <br/><br/><br/><br/>
            <button class="btn btn-primary" onClick={handleButtonClick} style={{width:'200px'}}>Go to Home page</button>
        </div>
        </div>
        </>
    )
}
export default ThankYou;
