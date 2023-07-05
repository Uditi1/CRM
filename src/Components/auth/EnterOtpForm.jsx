import React from 'react'

/// StyleSheet import ///
import "../../Styles/auth.css";

/// Icons Or Images import ///
import Emailicon from "../../img/icon/email.svg";


const EnterOtpForm = () => {
  return (
    <>
    <form action="" className="signup-form px-lg-5">           

                                    <div className="form-field mb-3">
                                        <label for="" className="fs-12 d-block pb-1">Mobile Number</label>
                                        <div className="position-relative">
                                            <img src={Emailicon} alt="" className="position-absolute ms-3 mt-3 pt-1" />
                                            <input type="email" placeholder="Enter Your Email Address" className="ps-5" />
                                        </div>
                                        
                                    </div>


                                    <div className="form-field mb-3">
                                        <label for="" className="fs-10 d-block pb-3">Please Enter the OTP sent to given mobile number</label>

                                            <div className="otp-field d-flex gap-3 align-items-center pb-2">
                                                <input type="text" />
                                                <input type="text" />
                                                <input type="text" />
                                                <span className="px-2">-</span>
                                                <input type="text" />
                                                <input type="text" />
                                                <input type="text" />
                                            </div>

                                        <a href="#" className="forgot-link fs-10 text-decoration-underline text-black">Send OTP Again</a>
                                    </div>
                    
                                    <button type="submit" className="custom-btn fs-20  rounded-pill w-100 ">Continue</button>
                                    
                                </form>
    </>
  )
}

export default EnterOtpForm