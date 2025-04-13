// admin-user.js
import { useRef } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import './add-user.css'
import { useNavigate } from "react-router-dom";

function AddUserForm() {
    const navigate=useNavigate()
    const nameRef = useRef();
    const ageRef = useRef();
    const genderRef = useRef();
    const mobileNumberRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();
    const photoRef = useRef();
    const idPhotoRef = useRef();
    const guardianMailRef = useRef();
    const emergencyNumberRef = useRef();
    const emergencyAddressRef = useRef();
    // const recentLocRef = useRef();

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", nameRef.current.value);
        formData.append("age", ageRef.current.value);
        formData.append("gender", genderRef.current.value);
        formData.append("mobileNumber", mobileNumberRef.current.value);
        formData.append("email", emailRef.current.value);
        formData.append("address", addressRef.current.value);
        formData.append("photo", photoRef.current.files[0]);
        formData.append("idPhoto", idPhotoRef.current.files[0]);
        formData.append("guardianMail", guardianMailRef.current.value);
        formData.append("emergencyNumber", emergencyNumberRef.current.value);
        formData.append("emergencyAddress", emergencyAddressRef.current.value);
        // formData.append("recentLoc", recentLocRef.current.value.split(","));

        try {
            const response = await axios.post("https://vridhamitra.onrender.com/add-user/", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            toast.success("User added successfully!");
            console.log("Response:", response.data);
            navigate('/admin-home')
        } catch (error) {
            console.error("Error:", error);
            toast.error("Failed to add user.");
        }

        // Reset form fields
        nameRef.current.value = "";
        ageRef.current.value = "";
        genderRef.current.value = "";
        mobileNumberRef.current.value = "";
        emailRef.current.value = "";
        addressRef.current.value = "";
        photoRef.current.value = "";
        idPhotoRef.current.value = "";
        guardianMailRef.current.value = "";
        emergencyNumberRef.current.value = "";
        emergencyAddressRef.current.value = "";
        // recentLocRef.current.value = "";
    };

    return (
        <>
            <ToastContainer />
            <h1>Add User</h1>
            <form onSubmit={handleFormSubmit}>
                <input type="text" ref={nameRef} className="form-input" placeholder="Name" required />
                <input type="text" ref={ageRef} className="form-input" placeholder="Age" required />
                <input type="text" ref={genderRef} className="form-input" placeholder="Gender" required />
                <input type="number" ref={mobileNumberRef} className="form-input" placeholder="Mobile Number" required />
                <input type="email" ref={emailRef} className="form-input" placeholder="Email" required />
                <input type="text" ref={addressRef} className="form-input" placeholder="Address" required />
                <input type="file" ref={photoRef} className="form-input" accept="image/*" required />
                <input type="file" ref={idPhotoRef} className="form-input" accept="image/*" required />
                <input type="email" ref={guardianMailRef} className="form-input" placeholder="Guardian Email" required />
                <input type="number" ref={emergencyNumberRef} className="form-input" placeholder="Emergency Number" required />
                <input type="text" ref={emergencyAddressRef} className="form-input" placeholder="Emergency Address" required />
                {/* <input type="text" ref={recentLocRef} placeholder="Recent Locations (comma-separated)" required /> */}
                <button type="submit" className="form-submit">Submit</button>
            </form>
        </>
    );
}

export default AddUserForm;