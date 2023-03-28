import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import emailjs from '@emailjs/browser';

function MyVerticallyCenteredModal(props) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zu5ljpw', 'template_fc0jx11', form.current, 'E3iwyV_dWv0VZkPbo')
      .then((result) => {
          console.log(result.text);
          
      }, (error) => {
          console.log(error.text);
      });
  };
 
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      
      <div class="modal-body snipcss-ZybQN style-dMsXU" >
  <div class="left_col style-oSMoE" id="style-oSMoE">
    <img src="http://www.m3mgurgaon.co.in/images/popup.jpg" alt="" class="img-fluid"/>
  </div>
  <div class="right_col">
  <div style={{height:"320px",width:"280px",textAlign:"center"}}>
            <h3 style={{marginTop:"25px",fontSize:"20px"}}>To Download Brochure</h3>
           
            <div >
           
      
            <form ref={form} onSubmit={sendEmail}>
    
      <input type="text" name="user_name" placeholder='Enter Your Name' required className='formtop'/>
      
      <input type="text"  name="contact_number" placeholder='Enter Your Contact number' required title="Error Message" pattern="[1-9]{1}[0-9]{9}" className='formtop'/>
     
     

      <input type="submit" value="Send" style={{height:"35px",width:"100px",margin:"5px",background:"#c1a356",color:"white",fontSize:"20px",borderRadius:"5px",marginLeft:"15px",padding:"1px"}}/>
    </form>
 
              
            </div>
            
          </div>
  </div>
</div>
      
    </Modal>
  );
}

export default function Dialog() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
     
      <div style={{height:"80px"}}class='btn-effect-1' onClick={() => setModalShow(true)}>
      <a style={{background:"#b48811",padding:"5px",color:"white",fontWeight:"400"}}>Make An Enquiry</a>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

