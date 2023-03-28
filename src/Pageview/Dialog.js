import React, { useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import emailjs from '@emailjs/browser';

function MyVerticallyCenteredModal(props) {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dwi8um6', 'template_vh2lnie', form.current, '35jxlMRE2-DZ_dIhv')
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
      
      <div class="modal-body snipcss-ZybQN style-dMsXU" id="style-dMsXU">
  <div class="left_col style-oSMoE" id="style-oSMoE">
    <img src="https://i.imgur.com/JcONViR.jpg" alt="" class="img-fluid"/>
  </div>
  <div class="right_col">
    <div class="animated_form">
      <div class="form-head">
        <h3 class="form_heading style-BjAUn" id="style-BjAUn">
        Get in Touch
        </h3>
        <h4 class="form_heading" style={{marginLeft:"65px"}}>
          Send us a message
        </h4>
      </div>
      <form ref={form} onSubmit={sendEmail} style={{padding:"18px"}}>
    
    <input type="text" name="user_name" placeholder=' Enter your name'  required style={{height:"40px",width:"250px",border:"1px solid #161a2d",margin:"5px",marginLeft:"28px",margin:"8px 9px 30px 28px"}}/>
    
    <input type="text"  name="contact_number" placeholder='Contact number' required title="Error Message" pattern="[1-9]{1}[0-9]{9}" style={{height:"40px",width:"250px",border:"1px solid #161a2d",margin:"8px 9px 30px 28px"}}/>
   
   

    <input type="submit" value="Send" required style={{height:"35px",width:"100px",background:"#161a2d",color:"white",fontSize:"20px",borderRadius:"5px",marginLeft:"90px",padding:"1px",marginTop:"30px",border:"none"}}/>
  </form>
    
      
     
      
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
      <div class='btn-effect-1' onClick={() => setModalShow(true)}>
        Consult Now
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

