import "./Contact.css"
import Button from "../Button/Button";
import {useState} from "react";

export default function Contact() {
    const [form, setForm] = useState({name: "", email: "", message: ""});
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validateEmail = (input) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(input);
    };




    function handleChange(e , fieldName) {
        const value = e.target.value;
        setForm((prevState) => ({
            ...prevState, [fieldName]:value}));

        if (fieldName==="email"){
            setIsValidEmail(validateEmail(value));
        }
    }


    function handleSubmit(e) {
        e.preventDefault();
        setIsSubmitted(true);
        if (!form.name || !form.email || !form.message) return;
        const newMessage = {Sender: form.name, Email: form.email, text: form.message};
        console.log(newMessage);
        setForm({name: "", email: "", message: ""});
        setIsSubmitted(false);
    }

    return (
        <div>
            <h1 className="heading">Contact me</h1>
            <p className="contact-text">This form is just a view and doesn't have any backend database!</p>

            <div className="contact-links">
                <div className="contact-linkBox">

                    <a data-title="076-2812532" className="link contact-link tooltip" target="_blank" href="tel:076-2812532">
                        <div className="icon">
                            <ion-icon name="call-outline"/>
                        </div>
                    </a>
                </div>
                <div className="contact-linkBox">
                    <a data-title="hamidreza.seydabadi68@gmail.com" className="link contact-link tooltip" target="_blank"
                       href="https://www.gmail.com/">
                        <div className="icon">
                            <ion-icon name="mail-outline"/>
                        </div>
                    </a>
                </div>
                <div className="contact-linkBox">
                    <a className="link contact-link" target="_blank"
                       href="https://www.linkedin.com/in/hamidreza-seydabadi-b64996267/">
                        <div className="icon">
                            <ion-icon name="logo-linkedin"/>
                        </div>
                    </a>
                </div>
                <div className="contact-linkBox">
                    <a className="link contact-link" target="_blank"
                       href="https://github.com/hamidreza8968">
                        <div className="icon">
                            <ion-icon name="logo-github"/>
                        </div>
                    </a>
                </div>
            </div>

            <form className="form" onSubmit={handleSubmit} action="#">
                <div className="form-item">
                    <label htmlFor="name">Name</label>
                    <input className="input" value={form.name}
                           onChange={(e) => handleChange(e , "name")}
                           type="text"
                           id="name"/>

                    {isSubmitted && !form.name && <p className="error-message">Please fill the fields!</p>}
                </div>
                <div className="form-item">
                    <label htmlFor="email">Email</label>
                    <input className={isValidEmail ? "input" : "input invalid"} value={form.email} type="email"
                           id="email"
                           onChange={(e) => handleChange(e , "email")}/>
                    {isSubmitted && !form.email && <p className="error-message">Please fill the fields!</p>}
                    {!isValidEmail && form.email !== "" &&
                    <p className="error-message">Please enter a valid email address.</p>}
                </div>
                <div className="form-item">
                    <label htmlFor="message">Message</label>
                    <textarea className="input" value={form.message}
                              onChange={(e) => handleChange(e , "message")}
                              name="message" id="message" cols="40" rows="8"
                              placeholder="Type your message..."/>
                    {isSubmitted && !form.message && <p className="error-message">Please fill the fields!</p>}
                </div>
                <div className="form-item">
                    <Button handleClick={handleSubmit}>submit</Button>
                </div>
            </form>
        </div>
    )
}