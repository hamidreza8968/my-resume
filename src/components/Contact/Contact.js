import "./Contact.css"
import Button from "../Button/Button";
import {useState} from "react";

export default function Contact() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [message,setMessage]=useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (!name || !email || !message) return  alert("Please complete all the form's items!");

        const newMessage = {Sender:name, Email:email, text:message};
        console.log(newMessage);

        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <div>
            <h1 className="heading">Contact me</h1>
            <p className="contact-text">This form is just a view and doesn't have any backend database</p>
            <form className="form" onSubmit={handleSubmit} action="#">
                <div className="form-item">
                    <label htmlFor="name">Name</label>
                    <input className="input" value={name} onChange={(e) => setName(e.target.value)} type="text" id="name"/>
                </div>
                <div className="form-item">
                    <label htmlFor="email">Email</label>
                    <input className="input" value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email"/>
                </div>
                <div className="form-item">
                    <label htmlFor="message">Message</label>
                    <textarea className="input" value={message} onChange={(e) => setMessage(e.target.value)} name="message" id="message" cols="40" rows="8" placeholder="Type your message..."></textarea>
                </div>
                <div className="form-item">
                    <Button handleClick={handleSubmit}>submit</Button>
                </div>
            </form>
        </div>
    )

}