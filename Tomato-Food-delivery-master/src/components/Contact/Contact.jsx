// eslint-disable-next-line
import React from 'react'
import './Contact.css'


const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "cd1f1d73-c44d-4915-bd19-6b514f516872");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact' id='contactus'>
        <div className="contact-col">
            <h1>Contact Us</h1>
            <h3>Send us a message </h3>
            <p>Feel free to reach out through contact form or find out our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional services to our cafe community</p>
            <ul>
                <li>Contact@CafeBliss.com</li>
                <li>+1 123-456-7890</li>
                <li>Hyderabad,Telangana<br/>India</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}> 
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required />
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your phone number' required />
                <label>Write your messages here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now </button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact