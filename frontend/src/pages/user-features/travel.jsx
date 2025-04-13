import { useRef } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

function TravelForm() {
    const nameRef = useRef();
    const ageRef = useRef();
    const genderRef = useRef();
    const mobileNumberRef = useRef();
    const emailRef = useRef();
    const photoRef = useRef();
    const medicalConditionsRef = useRef();
    const sourceRef = useRef();
    const destinationRef = useRef();
    const dateRef = useRef();
    const travelModeRef = useRef();
    const specialRequirementsRef = useRef();
    const estimatedTravelCostRef = useRef();
    const reimbursementRef = useRef();
    const reimbursementAmountRef = useRef();

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", nameRef.current.value);
        formData.append("age", ageRef.current.value);
        formData.append("gender", genderRef.current.value);
        formData.append("mobileNumber", mobileNumberRef.current.value);
        formData.append("email", emailRef.current.value);
        formData.append("photo", photoRef.current.files[0]);
        formData.append("medicalConditions", medicalConditionsRef.current.value);
        formData.append("source", sourceRef.current.value);
        formData.append("destination", destinationRef.current.value);
        formData.append("date", dateRef.current.value);
        formData.append("travelMode", travelModeRef.current.value);
        formData.append("specialRequirements", specialRequirementsRef.current.value);
        formData.append("estimatedTravelCost", estimatedTravelCostRef.current.value);
        formData.append("reimbursement", reimbursementRef.current.checked);
        formData.append("reimbursementAmount", reimbursementAmountRef.current.value);

        try {
            const response = await axios.post("https//localhost:3000/travel", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            toast.success("Travel request submitted successfully!");
            console.log("Response:", response.data);
        } catch (error) {
            console.error("Error:", error);
            toast.error("Failed to submit travel request.");
        }

        // Reset form fields
        nameRef.current.value = "";
        ageRef.current.value = "";
        genderRef.current.value = "";
        mobileNumberRef.current.value = "";
        emailRef.current.value = "";
        photoRef.current.value = "";
        medicalConditionsRef.current.value = "";
        sourceRef.current.value = "";
        destinationRef.current.value = "";
        dateRef.current.value = "";
        travelModeRef.current.value = "";
        specialRequirementsRef.current.value = "";
        estimatedTravelCostRef.current.value = "";
        reimbursementRef.current.checked = false;
        reimbursementAmountRef.current.value = "";
    };

    return (
        <>
            <ToastContainer />
            <h1>Travel Request Form</h1>
            <form onSubmit={handleFormSubmit}>
                <input type="text" ref={nameRef} placeholder="Name" required />
                <input type="text" ref={ageRef} placeholder="Age" required />
                <div>
                    <label>
                        <input type="checkbox" value="Male" ref={genderRef} /> Male
                    </label>
                    <label>
                        <input type="checkbox" value="Female" ref={genderRef} /> Female
                    </label>
                    <label>
                        <input type="checkbox" value="Other" ref={genderRef} /> Other
                    </label>
                </div>
                <input type="number" ref={mobileNumberRef} placeholder="Mobile Number" required />
                <input type="email" ref={emailRef} placeholder="Email" required />
                <input type="file" ref={photoRef} accept="image/*" required />
                <input type="text" ref={medicalConditionsRef} placeholder="Medical Conditions" />
                <input type="text" ref={sourceRef} placeholder="Source" required />
                <input type="text" ref={destinationRef} placeholder="Destination" required />
                <input type="date" ref={dateRef} placeholder="Date" required />
                <input type="text" ref={travelModeRef} placeholder="Travel Mode" required />
                <input type="text" ref={specialRequirementsRef} placeholder="Special Requirements" required />
                <input type="number" ref={estimatedTravelCostRef} placeholder="Estimated Travel Cost" required />
                <label>
                    <input type="checkbox" ref={reimbursementRef} /> Reimbursement Needed
                </label>
                <input type="number" ref={reimbursementAmountRef} placeholder="Reimbursement Amount" />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default TravelForm;