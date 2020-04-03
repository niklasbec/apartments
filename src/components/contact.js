import React, { useState } from 'react';

function Contact() {

  const [formValues, setFormValues] = useState({
    fname: '',
    lname: '',
    email: '',
    tel: null,
  })

  const handleChange = event => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <div className="App">
        <h1>Contact</h1>
        
        <form>
          <input onChange={handleChange} type='text' name='fname' placeholder='First Name' value={formValues.fname} />
          <input onChange={handleChange} type='text' name='lname' placeholder='Last Name' value={formValues.lname} />
          <input onChange={handleChange} type='text' name='email' placeholder='Email' value={formValues.email} />
          <input onChange={handleChange} type='text' name='tel' placeholder='Tel' value={formValues.tel} />

          <input type='submit' />
        </form>
    </div>
  );
}

export default Contact;
