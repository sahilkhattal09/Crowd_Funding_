import React from 'react';
// import  './Footer.css';
// import {
//   MDBFooter,
//   MDBContainer,
//   MDBCol,
//   MDBRow,
//   MDBIcon,
//   MDBBtn
// } from 'mdb-react-ui-kit';

const Footer = () => {
    return(
        <>

<footer class="main-footer">
  <div className='footer-top'></div>
<div class="footer-main">
    <div class="container">  
        <div class="row">
            <div class="col-md-4">
                <div class="footer-col">
                    <h4 class="footer-title">About us <span class="title-under"></span></h4>
                    <div class="footer-content">
                        <p>
                            <strong>Fund_Peti.com</strong>
                        </p> 
                        <p>
                           for details :
                           Contact
                           ph no:9583843920
                           mumbai,India
                           We are a crowdfunding platform dedicated to connecting people with innovative and inspiring ideas to individuals who believe in making a difference. Our mission is to empower entrepreneurs, creatives, and visionaries to turn their dreams into reality through the power of community and collaboration.
                            <br/>
                        </p>
                    </div>
                </div>
            </div>

            {/* <div className='col-md-4'>
                <div className='footer-col'>
                    <br/><b>How It Works:</b><br/>
                    Our platform provides a simple and efficient way to raise funds for your projects, ideas, or causes. You can create a campaign, set a funding goal, and promote it to your network and beyond. Our user-friendly interface makes it easy for you to share your story, update your supporters, and track your progress in real-time.
                </div>
            </div> */}

            <div className='col-md-4'>
                <div className='footer-col'>
                    <br/>Trust & Safety:<br/>
                    We take the trust and safety of our users very seriously. We use advanced security measures to protect your data and ensure that your donations go directly to the cause you support. Our team reviews every campaign to ensure it meets our guidelines and policies. In case of any issues, we offer dedicated customer support to assist you throughout the process.
                </div>
            </div>
            <div className='col-md-4'>
                <div className='footer-col'>
                    <br/>Join Our Community:<br/>
                    We believe that great things happen when people come together. Join our community of changemakers and support projects that matter to you. Whether you want to contribute financially, share your skills, or spread the word, your support can make a huge difference. Sign up today and start making an impact!
                </div>
            </div>
        </div> 
    </div>
</div>

    <div class="footer-bottom">
        <div class="container text-right">
        Fund_Peti <a href="http://www.ouarmedia.com" target="_blank">Ouarmedia</a>
        </div>
    </div>

</footer>     
{/* <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <MDBContainer className='p-4'>
          <h4 class="footer-title">About us <span class="title-under"></span></h4>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'><strong>Fund_Peti.com</strong></h5>

            <p>
             <b>for details :</b>
                           Contact
                           ph no:9583843920
                           mumbai,India
                           We are a crowdfunding platform dedicated to connecting people with innovative and inspiring ideas to individuals who believe in making a difference. Our mission is to empower entrepreneurs, creatives, and visionaries to turn their dreams into reality through the power of community and collaboration.
           
            </p>
           
          </MDBCol>

          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>How It Works:</h5>

            <p>
              Our platform provides a simple and efficient way to raise funds for your projects, ideas, or causes. You can create a campaign, set a funding goal, and promote it to your network and beyond. Our user-friendly interface makes it easy for you to share your story, update your supporters, and track your progress in real-time.
            </p>
          </MDBCol>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Trust & Safety:</h5>

            <p>
              We take the trust and safety of our users very seriously. We use advanced security measures to protect your data and ensure that your donations go directly to the cause you support. Our team reviews every campaign to ensure it meets our guidelines and policies. In case of any issues, we offer dedicated customer support to assist you throughout the process.            </p>
          </MDBCol>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Join Our Community:</h5>

            <p>
              We believe that great things happen when people come together. Join our community of changemakers and support projects that matter to you. Whether you want to contribute financially, share your skills, or spread the word, your support can make a huge difference. Sign up today and start making an impact!            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
       <MDBContainer className='pt-4'>
        <section className='mb-4'>
          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fab fa-facebook-f' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-twitter' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-google' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-instagram' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-linkedin' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-github' />
          </MDBBtn>
        </section>
      </MDBContainer>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter> */}
        </>
    );
}
export default Footer;
