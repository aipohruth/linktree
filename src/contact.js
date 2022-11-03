import React from 'react'

const Contact = () => {
  return (
    <section className='contact'>
      
        <div className="form-header">
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind</p>
        </div>
        <form className='form'>
          <div className="form-controls">
            <div className="left">
              <label>Firstname</label>
              <input type='text' id='first_name' required placeholder='Enter your first name'/>
            </div>
            <div className="right">
              <label>Lastname</label>
              <input type='text' id='last_name' required placeholder='Enter your last name' />
            </div>
          </div>

        <div className="form-control">
            <label>Email</label>
            <input type='email' id='email' required placeholder='yourname@email.com'/>
        </div>
        <label>Message</label>
        <textarea name="" id="message"  
        placeholder="Send a message and i'll reply as soon as possible..."></textarea>

        <div className="check">
        <input type='checkbox' required />
        <small>You agree to providing your data to aipohruth who may contact you</small>
        </div>

          <div className="button">
        <button type='submit' id='btn__submit'>Send message</button>
        </div>
      
    </form>


        
    
    </section>
  )
}

export default Contact

/* <div className="form-control">
            <label htmlFor='firstname'>First Name
            <input type='text' id='first_name' placeholder='Enter your first name' />
            </label>
             <label className='second' htmlFor='lastname'>Last Name
            <input type='text' id='last_name' placeholder='Enter your last name' />
            </label>
        </div> */
