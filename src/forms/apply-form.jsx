import React from 'react';

const ApplyForm = () => {
    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="input-item">
                                      <input type="text" placeholder="Full name" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="input-item">
                                               <input type="text" placeholder="Email address" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="input-item">
                                       <input type="tel" placeholder="Phone" />
                        </div>
                    </div>
                    
                    <div className="col-12">
                        <div className="input-item-textarea">
                                     <textarea placeholder="Message" spellCheck="false"></textarea>
                        </div>
                        <button type="submit" className="it-cta-form-submit border-0">Submit Request</button>
                    </div>

                </div>
            </form>
        </>
    );
};

export default ApplyForm;