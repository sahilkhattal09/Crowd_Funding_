// import React from 'react'

// const Terms = () => {
// return (
//     <div id="Login" style={{marginLeft:'225px',marginTop:'40px'}} className="d-flex justify-content-center align-items-center">
//     {/* <div  style={{ height: '100'}}> */}
//     <div className="d-flex flex-column justify-content-center align-items-center" style={{ width: '80%', background:'#e9ecef', borderRadius: '20px', border: '1px solid black', padding: '20px',boxShadow:' 0px 10px 10px rgba(0, 0, 0, 0.5)' }}>
//       <h2>Terms and Conditions</h2><br/>
//       <p><b>Disclaimer:</b> We do not provide any financial return in any form whatsoever, including but not limited to financial securities (debt or equity), interest, dividend, profit share, rewards in cash, to individuals who contribute on Fund_peti.com.
// Any contribution on fund_peti.com, by an individual, should not be construed as an investment in any form whatsoever.
// <b>
// <br/><br/>Terms of use : </b>

// <b>Fund_peti.com</b>, is a platform for giving and philanthropic donation webapp.
// In addition, when using certain services, you will be subject to any additional terms applicable to such services that may be posted on the Services from time to time, including, without limitation, the Privacy Policy. All such terms are hereby incorporated by reference into these Terms of Service.
// Finally, we encourage you, particularly if you intend to donate to a Fundpeti campaign or raise funds for a need, to review the Pricing section of these Terms of Service.

// <br/><br/>
// <b>Access and use of the services.</b>



// <b>Services Description:</b> The Services are offered as a platform  to users of the Services, which may include Campaign Organizers (interchangeably used with "Champions"), Beneficiaries, Recipients and Donors (each defined herein) and other users of the Services (which may include users who interact with the Site or Services). Among other features, the Services are designed to allow a user (a "Campaign Organizer") to post a fundraising campaign ("Campaign") to the Platform to accept monetary donations ("Donations") from those users wishing to contribute funds to the Campaign ("Donors").

//  A Campaign Organizer may be both, a Beneficiary and a Recipient, for any Campaign.
// A “Beneficiary” includes an individual, a group of individuals, or any entity that benefits from Donations through a Campaign, and a Recipient. A “Recipient” includes an individual or entity that is authorised by the Beneficiary through written means to receive Donations on behalf of the Beneficiary. <br/><br/>Although there are no fees to set up a Campaign, a percentage of each Donation will be charged as fees for our Services and those of our third party payment processors. Please see our Pricing section for details.
// Charitable Giving: Campaigns, unless otherwise clearly stated by Fund_peti, are not charities to which you can make tax-deductible charitable contributions. However, in addition to the Services described above, Fund_peti.com permits Donors to contribute to certain charitable organizations ("Charities") through the Platform.You understand and acknowledge that Fund_peti is not a charity, and Fund_peti does not solicit charitable donations for itself or for any third-party charitable institution. 
// The Services are a Platform; We are not a Broker, Financial Institution, Creditor or Charitable Institution: The Services are an administrative platform only.<br/><br/> Fund_peti.com facilitates the Donation transaction between Champions and Donors, but is not a party to any agreement between a Champion and a Donor, or between any user and a Charity. Fund_peti.com is not a broker, agent, financial institution, creditor or insurer for any user. Fund_peti has no control over the conduct of, or any information provided by a Champion or a Charity, and Fund_peti hereby disclaims all liability in this regard. Anyone is free to report issues related to a Campaign on Fund_peti.com, 
// and Fund_peti.com will take necessary action to the best of its abilities.

// Fund_peti.com  does not guarantee that a Campaign or a Charity will obtain a certain amount of Donations or any Donations at all. We do not personally endorse any Campaign, Champion, or Charity, and we make no guarantee, explicit or implied, that any information provided through the Services by a user is accurate..</p>
//     </div>
//   {/* </div> */}
//   </div>
// )
// }

// export default Terms;

import React from 'react';
import Modal from 'react-modal';
import './Dregister.css';

Modal.setAppElement('#root');

const Terms = ({ isOpen, handleClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel="Terms and Conditions"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          padding: '2rem',
          borderRadius: '20px',
          boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.2)',
          border: 'none',
          maxWidth: '80%',
          maxHeight: '80%',
          overflow: 'auto',
          background: '#fff',
          color: '#333',
          fontSize: '1rem',
          lineHeight: '1.5'
        }
      }}
    >
      <h2>Terms and Conditions</h2>
      <p><b>Disclaimer:</b> We do not provide any financial return in any form whatsoever, including but not limited to financial securities (debt or equity), interest, dividend, profit share, rewards in cash, to individuals who contribute on Fund_peti.com.
 Any contribution on fund_peti.com, by an individual, should not be construed as an investment in any form whatsoever.
 <b>
 <br/><br/>Terms of use : </b>

 <b>Fund_peti.com</b>, is a platform for giving and philanthropic donation webapp.
 In addition, when using certain services, you will be subject to any additional terms applicable to such services that may be posted on the Services from time to time, including, without limitation, the Privacy Policy. All such terms are hereby incorporated by reference into these Terms of Service.
 Finally, we encourage you, particularly if you intend to donate to a Fundpeti campaign or raise funds for a need, to review the Pricing section of these Terms of Service
<br/><br/>
<b>Access and use of the services.</b>



 <b>Services Description:</b> The Services are offered as a platform  to users of the Services, which may include Campaign Organizers (interchangeably used with "Champions"), Beneficiaries, Recipients and Donors (each defined herein) and other users of the Services (which may include users who interact with the Site or Services). Among other features, the Services are designed to allow a user (a "Campaign Organizer") to post a fundraising campaign ("Campaign") to the Platform to accept monetary donations ("Donations") from those users wishing to contribute funds to the Campaign ("Donors").

  A Campaign Organizer may be both, a Beneficiary and a Recipient, for any Campaign.
 A “Beneficiary” includes an individual, a group of individuals, or any entity that benefits from Donations through a Campaign, and a Recipient. A “Recipient” includes an individual or entity that is authorised by the Beneficiary through written means to receive Donations on behalf of the Beneficiary. <br/><br/>Although there are no fees to set up a Campaign, a percentage of each Donation will be charged as fees for our Services and those of our third party payment processors. Please see our Pricing section for details.
 Charitable Giving: Campaigns, unless otherwise clearly stated by Fund_peti, are not charities to which you can make tax-deductible charitable contributions. However, in addition to the Services described above, Fund_peti.com permits Donors to contribute to certain charitable organizations ("Charities") through the Platform.You understand and acknowledge that Fund_peti is not a charity, and Fund_peti does not solicit charitable donations for itself or for any third-party charitable institution. 
 The Services are a Platform; We are not a Broker, Financial Institution, Creditor or Charitable Institution: The Services are an administrative platform only.<br/><br/> Fund_peti.com facilitates the Donation transaction between Champions and Donors, but is not a party to any agreement between a Champion and a Donor, or between any user and a Charity. Fund_peti.com is not a broker, agent, financial institution, creditor or insurer for any user. Fund_peti has no control over the conduct of, or any information provided by a Champion or a Charity, and Fund_peti hereby disclaims all liability in this regard. Anyone is free to report issues related to a Campaign on Fund_peti.com, 
 and Fund_peti.com will take necessary action to the best of its abilities.

 Fund_peti.com  does not guarantee that a Campaign or a Charity will obtain a certain amount of Donations or any Donations at all. We do not personally endorse any Campaign, Champion, or Charity, and we make no guarantee, explicit or implied, that any information provided through the Services by a user is accurate..</p>
      <button onClick={handleClose} style={{background:'#008CBA',borderRadius:'5px'}}>Close</button>
    </Modal>
  );
};

export default Terms;