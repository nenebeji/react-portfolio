import React, {useState} from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either Name, Email, and Message
    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'message'){
      setMessage(inputValue);
    }
  };
  // const [isActive, setIsActive] = useState(false);

  const handleBlur = event => {
    // 👇️ toggle isActive state on click
    // setIsActive(!isActive);
    if(event.target.value === '') {
      event.target.classList.add('is-invalid');
      return false;
    } else {event.target.classList.remove('is-invalid');
    return true;
    }
  }
  return (
    <div id="contact" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <div className="row text-center" id="contacttextinfo" style={{margin: 'auto'}}>
      <div className="row">
        <h2 id="contacttext" style={{marginBottom: '5%'}}>Get In Touch</h2>
        {/* contact form */}
        <form className="contactform">
          {/* add is-invalid className to input and textarea if no value is entered */}
          <div className="mb-3">
            <label for="Name" className="form-label">Name:</label>
            <input type="name" 
            name='name'
            onChange={handleInputChange}
            className="form-control"
            onBlur={handleBlur}
            id="NameInput"
            value={name} 
            aria-describedby="NameFeedback" required>
            </input>
            <div id="NameFeedback" className="invalid-feedback">
              Please enter your Name.
            </div>
          </div>
          <div className="mb-3">
            <label for="Email" className="form-label">Email:</label>
            <input type="email"
            name='email'
            onChange={handleInputChange} 
            className="form-control"
            onBlur={handleBlur}
            id="EmailInput"
            value={email} 
            aria-describedby="EmailFeedback" required pattern="^([a-zA-Z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$">
            </input>
            <div id="EmailFeedback" className="invalid-feedback">
              Please enter a valid Email.
            </div>
          </div>
          <div className="mb-3">
            <label for="Message" className="form-label">Message:</label>
            <textarea 
            name='message'
            onChange={handleInputChange}
            className="form-control"
            onBlur={handleBlur}
            id="MessageInput" 
            placeholder="Please enter message here" style={{height: '200px'}} required>
            {message}</textarea>
            <div className="invalid-feedback">
              Please enter a message.
            </div>
          </div>
          {/* add disabled className until when values are inputed  */}
          <div className="mb-3" style={{marginTop: '5%'}}>
            <button className="btn btn-primary" id="btnsubmit" type="submit">Submit form</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
}
