import {React, useState } from "react";
import menu_data from "../layout/headers/menu-data";
import Link from 'next/link';

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
    console.log('Sending',e)
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
              <input type="text" value={name} placeholder="Full name" name="name" onChange={(e)=>{setName(e.target.value)}}/>
              <lable>Full name</lable>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="input-item">
              <span>
                <i className="fas fa-envelope-open"></i>
              </span>
              <input type="text" value={mail} placeholder="Email address"name="mail" onChange={(e)=>{setMail(e.target.value)}}/>
              <lable>Email address</lable>
            </div>
          </div>
          
            <div className="col-lg-6">
              <div className="input-item">
                <span>
                  <i className="fas fa-phone"></i>
                </span>
                <input type="tel" value={phone} placeholder="Phone" name="phone" onChange={(e)=>{setPhone(e.target.value)}} />
                <lable>Phone</lable>
              </div>
            </div>        

            <div className="col-lg-6">
            <div className="input-item">
                <span>
                  <i className="fa fa-sitemap"></i>
                </span>
                <input type="text" value={org} placeholder="Organisation" name="org" onChange={(e)=>{setOrg(e.target.value)}} />
                <lable>Organisation</lable>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="input-item">
                <span>
                  <i className="fa-brands fa-dropbox"></i>                
                </span>                
                {menu_data.filter((item)=>item.has_dropdown && item.sub_menus).map((item, i) => (
                  <select
                    key={i}
                    value={re}
                    name="re"
                    className='nice-select'
                    onChange={(e)=>setReq(e.target.value)}
                       >
                      {item.sub_menus.map((sub_item, sub_i) => (
                        <option key={sub_i}>
                          {sub_item.title}
                        </option>
                      ))}
                    </select>
                ))}
                <lable>Requirement</lable>

              </div>
            </div>        

            <div className="col-lg-6">
            <div className="input-item">
                <span>
                <i className="fa-regular fa-rectangle-list"></i>                </span>
                <input type="text" value={agen} placeholder="Agenda" name="agen" onChange={(e)=>{setAgen(e.target.value)}}  />
                <lable>Agenda</lable>
              </div>
            </div>
        

          <div className="col-12">
            <div className="input-item-textarea">
              <span>
                <i className="fas fa-pen"></i>
              </span>
              <textarea placeholder="Message" value={msg} className={`${msg.trim()!=''?'':'content'}`} onChange={(e)=>{setMsg(e.target.value)}} name="msg"></textarea>
              <lable>Message</lable>
            </div>
            {submited && <div className="input-item-textarea text-center text-success d-flex justify-content-center align-items-center" style={{"fontWeight":700}}>
              <img src='/assets/img/check.gif' width={28} height={28}/> Thanks for your enquiry. We'll contact you soon.
            </div>}
            <button type="submit"onClick={(e)=>{handleSubmit(e)}} className="tp-black-btn w-100" disabled={submited}>
              Submit
            </button>
          </div>
          

        </div>
      </form>
    </>
  );
};

export default CallToActionForm;
