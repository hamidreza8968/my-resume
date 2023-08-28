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

    console.log(form);

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
            <p className="contact-text">This form is just a view and doesn't have any backend database</p>
            <form className="form" onSubmit={handleSubmit} action="#">
                <div className="form-item">
                    <label htmlFor="name">Name</label>
                    <input className="input" value={form.name}
                           onChange={(e) => setForm((prevState) => ({
                               ...prevState, name: e.target.value,
                           }))}
                           type="text"
                           id="name"/>

                    {isSubmitted && !form.name && <p className="error-message">Please fill the fields!</p>}
                </div>
                <div className="form-item">
                    <label htmlFor="email">Email</label>
                    <input className={isValidEmail ? "input" : "input invalid"} value={form.email} type="email" id="email"
                           onChange={(e) => {
                               setForm((prevState) => ({
                                   ...prevState,
                                   email: e.target.value,
                               }));
                               setIsValidEmail(validateEmail(e.target.value));
                           }}/>
                    {isSubmitted && !form.email && <p className="error-message">Please fill the fields!</p>}
                    {!isValidEmail && form.email!=="" && <p className="error-message">Please enter a valid email address.</p>}
                </div>
                <div className="form-item">
                    <label htmlFor="message">Message</label>
                    <textarea className="input" value={form.message}
                              onChange={(e) => setForm((prevState) => ({
                                  ...prevState,
                                  message: e.target.value,
                              }))}
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