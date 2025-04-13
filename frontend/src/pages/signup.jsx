import { useRef } from "react"
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import './signup.css'

function Signup() {

    const navigate=useNavigate();

    const imageInputRef = useRef(null);
    const govidInputRef = useRef(null);
    const typeRef = useRef();
    const nameRef = useRef();
    const ageRef = useRef();
    const genderRef = useRef();
    const emailRef = useRef();
    const numberRef = useRef();
    const addressRef = useRef();


    const handleForm = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("image", imageInputRef.current.files[0]);
        formData.append("govid", govidInputRef.current.files[0]);
        formData.append("type", typeRef.current.value);
        formData.append("name", nameRef.current.value);
        formData.append("age", ageRef.current.value);
        formData.append("gender", genderRef.current.value);
        formData.append("email", emailRef.current.value);
        formData.append("number", numberRef.current.value);
        formData.append("address", addressRef.current.value);

        try {
            const response = await axios.post('https://vridhamitra.onrender.com/sign-up/', formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            console.log("Data Uploaded Successfully", response.data.message);
            navigate("/login")

        } catch (e) {
            console.log("Data could not be uploaded", e);
            toast.error(e.response.data.message)
        }
        imageInputRef.current.value = "";
        govidInputRef.current.value = "";
        typeRef.current.value = "";
        nameRef.current.value = "";
        ageRef.current.value = "";
        genderRef.current.value = "";
        emailRef.current.value = "";
        numberRef.current.value = "";
        addressRef.current.value = "";
    }


    return (
        <>
        <h1 className="signup-heading">Sign Up</h1>
        <div className="signup-container">
            <form onSubmit={handleForm} className="signup-form">
                <input type="text" ref={typeRef} className="form-input" placeholder="Please enter your type!" required />
                <input type="text" ref={nameRef} className="form-input" placeholder="Please enter your good name!" required />
                <input type="number" ref={ageRef} className="form-input" placeholder="Please enter your age!" required />
                <input type="text" ref={genderRef} className="form-input" placeholder="Please enter your Gender!" required />
                <input type="text" ref={emailRef} className="form-input" placeholder="Please enter your Email!" required />
                <input type="text" ref={numberRef} className="form-input" placeholder="Please enter your Number!" required />
                <input type="text" ref={addressRef} className="form-input" placeholder="Please enter your Address!" required />
                <label className="file-label">Upload Image:</label>
                <input type="file" name="image" ref={imageInputRef} className="file-input" />
                <label className="file-label">Upload Government ID:</label>
                <input type="file" name="govid" ref={govidInputRef} className="file-input" />
                <input type="submit" value="Submit" className="form-submit" />
            </form>
        </div>
        </>
    )
}

export default Signup