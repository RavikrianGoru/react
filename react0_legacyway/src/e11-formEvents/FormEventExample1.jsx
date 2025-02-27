import React, { useEffect, useState } from 'react'

function FormEventExample1() {

  const [userName, setUserName] = useState('');
  const [userNameNew, setUserNameNew] = useState('');

  const getUserName = (event) => {
    setUserName(event.target.value);
  }

  const getUserNameNew = (e) => {
    e.preventDefault();
    setUserNameNew(userName);
  }



  return (
    <section className='formSection'>
      <h2>Hellow!,{userName}</h2>
      <h2>Hellow!,{userNameNew}</h2>
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
