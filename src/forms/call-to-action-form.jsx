import {React, useState } from "react";
import menu_data from "../layout/headers/menu-data";
import Link from 'next/link';

const CallToActionForm = ({style_sv_details}) => {
  
  const [formData, setFormData] = useState({
      name: '',
      mail: '',
      phone: '',
      org: '',
      re: '',
      agen: '',
      msg: ''
  });

  const [errors, setErrors] = useState({});
  const [submited, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  // Regular expressions for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[+]?\d{1,4}?[-.\s]?(\d{1,3}?[-.\s]?){1,4}(\d{1,4})$/;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setSubmitted(false)

    // Remove the errors for this field if it exists
    if (errors[name]) {
      delete errors[name];
    }

    if (name == 're' && value != 'DIGITAL TRANSFORMATION') {
      setFormData({ ...formData, [name]: value, isagen:false , agen: '-' });
    }else if (name == 're') {
      setFormData({ ...formData, [name]: value, isagen:true , agen: '' });
    }else{ 
      setFormData({ ...formData, [name]: value });
    }
    console.log("formData",formData)
  };

  const validateForm = () => {
    let validationErrors = {};
    
    // Full Name validation
    if (!formData.name && formData.name.trim() == '') validationErrors.name = 'Full Name is required';

    // Email validation
    if (!formData.mail && formData.mail.trim() == '') {
        validationErrors.mail = 'Email Address is required';
    } else if (!emailRegex.test(formData.mail)) {
        validationErrors.mail = 'Invalid Email Address';
    }

    // Phone number validation
    if (!formData.phone && formData.phone.trim() == '') {
        validationErrors.phone = 'Phone Number is required';
    } else if (!phoneRegex.test(formData.phone)) {
        validationErrors.phone = 'Invalid Phone Number';
    }

    // Organisation validation
    if (!formData.org && formData.org.trim() == '') validationErrors.org = 'Organisation is required';

    // Our Solutions validation
    if (!formData.re && formData.re.trim() == '') validationErrors.re = 'Our Solutions is required';
    
    // Requirement validation
    if (!formData.agen && formData.agen.trim() == '') validationErrors.agen = 'Requirement is required';

    // Message validation
    if (!formData.msg && formData.msg.trim() == '') validationErrors.msg = 'Message is required';

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => { 
    e.preventDefault()
    setErrors({})
    setSubmitted(false)
    setLoading(true)
    console.log('Sending',e)
    
    console.log( formData , !formData.phone && formData.phone.trim() == '' , phoneRegex.test(formData.phone))
    

    if(validateForm()){
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      }).then((res) => {
        console.log('Response received')
        if (res.status === 200) {
          setSubmitted(true)
          setLoading(false)
          setErrors({})
          setFormData({
            name: '',
            mail: '',
            phone: '',
            org: '',
            re: '',
            agen: '',
            msg: ''
          })
          console.log('Response succeeded!')
          setTimeout(()=>{
            setSubmitted(false)
          },5000)
        }else{
          setSubmitted(false)
          setErrors({ all : 'Error Occured while subimtting form'})
        }
      })
      return;
    }
    else{
      setSubmitted(false);
      setLoading(false);
    }
 
    
  }
  
  return (
    <>
    <div className="d-flex justify-content-center align-items-center" style={{width:"500px",height:"500px"}}>
      { submited ? ( <div className="input-item-textarea text-center text-success d-flex flex-column justify-content-center align-items-center" style={{"fontWeight":700}}>
            <img src='/assets/img/success.gif' width={650} /> Thanks for your enquiry. We'll contact you soon.
            </div>) : loading ? 
            (<div className="input-item-textarea text-center text-success d-flex flex-column justify-content-center align-items-center" style={{"fontWeight":700}}>
            <img src='/assets/img/loading-gif.gif' width={300} />
            </div>):( <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <div className="input-item">
              <span>
                <i className={`${errors.name ? "mb-10" : ""} fas fa-user`}></i>
              </span>
              <input 
                type="text" 
                value={formData.name} 
                placeholder="Full name" 
                name="name" 
                onChange={handleInputChange}
                className={`${errors.name ? "border-danger" : ""}`}
              />
              <lable>Full name</lable>
            </div>
            {errors.name && <p className="text-danger -mt-20" style={{"fontWeight":700,"fontSize":'14px'}}>{errors.name}</p>}
          </div>

          <div className="col-lg-6">
            <div className="input-item">
              <span>
                <i className="fas fa-envelope-open"></i>
              </span>
              <input 
                type="text" 
                value={formData.mail} 
                placeholder="Email address"
                name="mail" 
                onChange={handleInputChange}
                className={`${errors.mail ? "border-danger" : ""}`}
              />
              <lable>Email address</lable>
            </div>
            {errors.mail && <p className="text-danger -mt-20" style={{"fontWeight":700,"fontSize":'14px'}}>{errors.mail}</p>}
          </div>
          
          <div className="col-lg-6">
            <div className="input-item">
              <span>
                <i className="fas fa-phone"></i>
              </span>
              <input 
                type="tel" 
                value={formData.phone} 
                placeholder="Phone" 
                name="phone" 
                onChange={(e)=>{
                  if(!isNaN(e.target.value)){
                    handleInputChange(e)
                  }
                }}
                className={`${errors.phone ? "border-danger" : ""}`}
              />
              <lable>Phone</lable>
            </div>
            {errors.phone && <p className="text-danger -mt-20" style={{"fontWeight":700,"fontSize":'14px'}}>{errors.phone}</p>}
          </div>        

          <div className="col-lg-6">
            <div className="input-item">
              <span>
                <i className="fa fa-sitemap"></i>
              </span>
              <input 
                type="text" 
                value={formData.org} 
                placeholder="Organisation" 
                name="org" 
                onChange={handleInputChange}
                className={`${errors.org ? "border-danger" : ""}`}
              />
              <lable>Organisation</lable>
            </div>
            {errors.org && <p className="text-danger -mt-20" style={{"fontWeight":700,"fontSize":'14px'}}>{errors.org}</p>}
          </div>

          <div className="col-lg-6">
            <div className="input-item">
              <span>
                <i className="fa-brands fa-dropbox"></i>                
              </span>                
              {menu_data.filter((item)=>item.has_dropdown && item.sub_menus).map((item, i) => (
                <select
                  key={i}
                  value={formData.re}
                  name="re"
                  onChange={handleInputChange}
                  className={`${errors.re ? "border-danger " : ""} nice-select`}
                >
                  <option value="" disabled className='d-none'>Select a Our Solutions</option>
                  {item.sub_menus.map((sub_item, sub_i) => (
                    <option key={sub_i} value={sub_item.title}>
                      {sub_item.title.toLowerCase()}
                    </option>
                  ))}
                </select>
              ))}
              <lable>Our Solutions</lable>
            </div>
            {errors.re && <p className="text-danger -mt-20" style={{"fontWeight":700,"fontSize":'14px'}}>{errors.re}</p>}
          </div>     

          {formData.re && formData.isagen &&
            <div className="col-lg-6">
              <div className="input-item">
                <span>
                  <i className="fa-brands fa-dropbox"></i>                
                </span>                
                {menu_data.filter((item)=>item.has_dropdown && item.sub_menus).map((item, i) => (
                  <select
                    key={i}
                    value={formData.agen}
                    name="agen"
                    onChange={handleInputChange}
                    className={`${errors.agen ? "border-danger " : ""} nice-select`}
                  >
                    <option value="" disabled className='d-none'>Select a Requirement</option>
                    {item.sub_menus.map((sub_item, sub_i) => {
                        if(sub_item.title == formData.re && sub_item?.sub && sub_item.sub.length > 0){
                          return sub_item.sub.map((item, sub_i) => {
                            return(
                              <option key={sub_i} value={item}>
                                {item}
                              </option>
                            )
                          })
                        }
                      }
                    )}
                  </select>
                ))}
                <lable>Requirement</lable>
              </div>
              {errors.agen && <p className="text-danger -mt-20" style={{"fontWeight":700,"fontSize":'14px'}}>{errors.agen}</p>}
            </div>        
          }

          <div className="col-12">

            <div className="input-item-textarea">
              <span>
                <i className="fas fa-pen"></i>
              </span>
              <textarea 
                placeholder="Message" 
                value={formData.msg} 
                className={`${errors.msg ? "border-danger" : ""} ${formData.msg.trim()!=''?'':'content'}`} 
                onChange={handleInputChange}
                name="msg"
              ></textarea>
              <lable>Message</lable>
            </div>
            {errors.msg && <p className="text-danger -mt-20" style={{"fontWeight":700,"fontSize":'14px'}}>{errors.msg}</p>}

            {/* {submited && <div className="input-item-textarea text-center text-success d-flex justify-content-center align-items-center" style={{"fontWeight":700}}>
              <img src='/assets/img/check.gif' width={28} height={28}/> Thanks for your enquiry. We'll contact you soon.
            </div>} */}
            {errors.all && <div className="input-item-textarea text-center text-danger d-flex justify-content-center align-items-center" style={{"fontWeight":700}}>
              <img src='/assets/img/red-cross.gif' width={28} height={28}/> {errors.all}
            </div>}
            <button type="submit" className="tp-black-btn w-100" disabled={submited}>
              Submit
            </button>

          </div>
          

        </div>
      </form>
      
      )}
      </div>
      {/* Autofill styles */}
      <style jsx>{`
        input:-webkit-autofill {
          background-color: transparent !important;
          -webkit-box-shadow: 0 0 0px 1000px white inset !important;
          -webkit-text-fill-color: #000 !important;
        }
      `}</style>
    </>
  );
};

export default CallToActionForm;
