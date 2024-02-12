import {React, useState } from "react";

const CallToActionForm = ({style_sv_details}) => {
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [phone, setPhone] = useState('')
  const [org, setOrg] = useState('')
  const [re, setReq] = useState('')
  const [agen, setAgen] = useState('')
  const [msg, setMsg] = useState('')
  const [submited, setSubmitted] = useState(false)


  const handleSubmit = (e) => { 
    e.preventDefault()
    console.log('Sending')
  let data = {
      name,
      mail,
      phone,
      org,
      re,
      agen,
      msg,
      submited
    }
  fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        setSubmitted(true)
        setName('')
        setMail('')
        setPhone('')
        setOrg('')
        setReq('')
        setAgen('')
        setMsg('')
        console.log('Response succeeded!')

      }
    })
    
  }
  
  return (
    <>
      <form >
        <div className="row">


          <div className="col-lg-6">
            <div className="input-item">
              <span>
                <i className="fas fa-user"></i>
              </span>
              <input type="text" placeholder="Full name" name="name" onChange={(e)=>{setName(e.target.value)}}/>
             
            </div>
          </div>

          <div className="col-lg-6">
            <div className="input-item">
              <span>
                <i className="fas fa-envelope-open"></i>
              </span>
              <input type="text" placeholder="Email address"name="mail" onChange={(e)=>{setMail(e.target.value)}}/>
             
            </div>
          </div>
          
            <div className="col-lg-6">
              <div className="input-item">
                <span>
                  <i className="fas fa-phone"></i>
                </span>
                <input type="tel" placeholder="Phone" name="phone" onChange={(e)=>{setPhone(e.target.value)}} />
              
              </div>
            </div>        

            <div className="col-lg-6">
            <div className="input-item">
                <span>
                <i className="fa fa-sitemap"></i>                </span>
                <input type="text" placeholder="Organisation" name="org"  onChange={(e)=>{setOrg(e.target.value)}} />
             
              </div>
            </div>
            <div className="col-lg-6">
              <div className="input-item">
                <span>
                <i className="fa-brands fa-dropbox"></i>                </span>
                <input type="text" placeholder="Requirement" name="re" onChange={(e)=>{setReq(e.target.value)}} />
              </div>
            </div>        

            <div className="col-lg-6">
            <div className="input-item">
                <span>
                <i className="fa-solid fa-calendar-circle-user"></i>                </span>
                <input type="text" placeholder="Agenda" name="agen" onChange={(e)=>{setAgen(e.target.value)}}  />
              
              </div>
            </div>
        

          <div className="col-12">
            <div className="input-item-textarea">
              <span>
                <i className="fas fa-pen"></i>
              </span>
              <textarea placeholder="Message" onChange={(e)=>{setMsg(e.target.value)}} name="msg"></textarea>
            </div>
            <button type="submit"onClick={(e)=>{handleSubmit(e)}} className="tp-black-btn">
              Submit
            </button>
          </div>
          

        </div>
      </form>
    </>
  );
};

export default CallToActionForm;
