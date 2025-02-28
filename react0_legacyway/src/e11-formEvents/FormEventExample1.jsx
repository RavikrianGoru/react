import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

function FormEventExample1() {

  const [userName, setUserName] = useState('');
  const [userNameNew, setUserNameNew] = useState('');

  const getUserName = (event) => {
    setUserName(event.target.value);
  }

  const getUserNameNew = (e) => {
    e.preventDefault();
    setUserNameNew(userName);
    notify();
  }

  const notify = () => toast("You data is uploaded!");


  return (
    <section className='formSection'>
      <h2>Hellow!,{userName}</h2>
      <h2>Hellow!,{userNameNew}</h2>
      <ToastContainer />
      <div className='inputDiv2'>
        <form onSubmit={getUserNameNew}>
          <input type="text" placeholder='Enter your name' onChange={getUserName} />
          <br />
          <button className='submittBtn' type='submit'> Submit</button>
        </form>
      </div>
    </section>
  )
}

export default FormEventExample1
