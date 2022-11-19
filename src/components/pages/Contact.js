import React from 'react';

export default function Contact() {
  return (
    <div id="contact" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <div class="row text-center" id="contacttextinfo" style={{margin: 'auto'}}>
      <div class="row">
        <h2 id="contacttext" style={{marginBottom: '5%'}}>Get In Touch</h2>
        {/* contact form */}
        <form class="contactform">
          {/* add is-invalid class to input and textarea if no value is entered */}
          <div class="mb-3">
            <label for="Name" class="form-label">Name:</label>
            <input type="text" class="form-control" id="NameInput" aria-describedby="NameFeedback" required>
            </input>
            <div id="NameFeedback" class="invalid-feedback">
              Please enter your Name.
            </div>
          </div>
          <div class="mb-3">
            <label for="Email" class="form-label">Email:</label>
            <input type="text" class="form-control" id="EmailInput" aria-describedby="EmailFeedback" required pattern="^([a-zA-Z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$">
            </input>
            <div id="EmailFeedback" class="invalid-feedback">
              Please enter a valid Email.
            </div>
          </div>
          <div class="mb-3">
            <label for="Message" class="form-label">Message:</label>
            <textarea class="form-control" id="MessageInput" placeholder="Please enter message here" style={{height: '200px'}} required></textarea>
            <div class="invalid-feedback">
              Please enter a message.
            </div>
          </div>
          {/* add disabled class until when values are inputed  */}
          <div class="mb-3" style={{marginTop: '5%'}}>
            <button class="btn btn-primary" id="btnsubmit" type="submit">Submit form</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
}
