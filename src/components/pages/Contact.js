import React from 'react'


export default function Contact() {
  return (
    <div className='px-5 py-4'>
      <h1>Contact Me</h1>
      <p>
        Email: bartgloyd@gmail.com
      </p>
      <form>
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="name" class="form-control" id="name" placeholder="Name" />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" class="form-control" id="email" placeholder="Email" />
        </div>
        <div class="form-group">
          <label class="form-check-label" for="message">Message:</label>
          <input type="textArea" class="form-control" id="message" placeholder='Message' />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}