import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from 'react-toastify'
import { logActions } from '../../store/logSlice';

function Login() {

    const logValue=useSelector((store)=>store.log)
    const dispatch=useDispatch()
    console.log(logValue.log)

    function login() {
        dispatch(logActions.logged())
        console.log(logValue.log);
    }

    const buttonInfoSignup = { link: "", text: "Send OTP" }
    const buttonInfoOtp = { link: "", text: "Verify OTP" }
    const emailRef = useRef()
    let email,type;
    const otpRef = useRef()
    const typeRef = useRef()

    const navigate = useNavigate()


    const handleSignup = async (event) => {
        event.preventDefault()

        function visibilityChanger() {
            const signUp = document.querySelector('.signup')
            const otpVerify = document.querySelector('.otp-verify')
            signUp.style.visibility = 'hidden'
            otpVerify.style.visibility = 'visible'
        } visibilityChanger()

        email = emailRef.current.value;
        type = typeRef.current.value;

        try {
            const { data } = await axios.post("http://localhost:3000/login/", {
                email,
                type,
            })
            console.log(data)
            emailRef.current.value = "";
            toast.success(data.message)
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    const handleotp = async (event) => {
        event.preventDefault()

        const otp = otpRef.current.value;
        const type=typeRef.current.value;
        console.log(otp)
        try {
            const { data } = await axios.post("http://localhost:3000/otp-verify/", {
                otp,
                receiver: email,
                type,
            }, {
                withCredentials: true,
            })
            console.log(data)
            otpRef.current.value = "";
            toast.success(data.message)
            login()
            // navigate('/dashboard')
        } catch (error) {
            otpRef.current.value = "";
            console.log(error)
            toast.error(error.response.data.message)
        }
        typeRef.current.value=""
        otpRef.current.value=""
        emailRef.current.value=""
    }

    return (
        <>
            <div className="login-bg">
                <video className='video-dashboard' src="/Darken.mp4" type="video/mp4" autoPlay muted loop>
                </video>
            </div>

            <div className="signup">
                <div className="signup-heading">Sign Up</div>
                <div className="signup-text"><br /> Enter your email address.</div>
                <form action="" className="signup-form" onSubmit={handleSignup}>
                    <input type="email" ref={emailRef} className="input-mobile" placeholder='Your email here.' required />
                    <input type="text" ref={typeRef} className="input-mobile" placeholder='Your type here.' required />
                    <button type='submit' className="button-signup">
                        Submit
                    </button>
                </form>
            </div>

            <div className="otp-verify">
                <div className="otp-heading">OTP Sent!</div>
                <div className="otp-text"> Enter the OTP sent to your email.</div>
                <form action="" className="otp-form" onSubmit={handleotp}>
                    <input type="number" ref={otpRef} className="input-otp" maxLength={6} required />
                    <button type='submit' className="button-otp">
                        {/* <ButtonSolid props={buttonInfoOtp} /> */}Submit
                    </button>
                </form>
            </div>
            {/* <ToastContainer theme="dark" position='top-right' /> */}

        </>
    )
}

export default Login
