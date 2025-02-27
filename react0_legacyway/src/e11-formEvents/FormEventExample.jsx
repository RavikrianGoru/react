import React, { useEffect, useState } from 'react'

function FormEventExample() {

  const [userName, setUserName] = useState('');
  const [userNameNew, setUserNameNew] = useState('');

  const getUserName = (event) => {
    setUserName(event.target.value);
  }

  const getUserNameNew = () => {
    setUserNameNew(userName);
  }



  return (
    <section className='formSection'>
      <h2>Hellow!,{userName}</h2>
      <h2>Hellow!,{userNameNew}</h2>

      <div className='inputDiv'>
        <input type="text" placeholder='Enter your name' onChange={getUserName} />
        <br />
        <button className='submittBtn' onClick={getUserNameNew}> Submit</button>
      </div>
    </section>
  )
}

export default FormEventExample
