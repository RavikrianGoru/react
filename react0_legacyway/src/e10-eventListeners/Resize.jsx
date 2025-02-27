import React, { useEffect, useState } from 'react'




function Resize() {

    const [screenSize,setScreenSize]=useState(
        {
            width:window.innerWidth,
            height:window.innerHeight
        }
    );

    const updateScreenSize=()=>{
        setScreenSize(
            {
                width:window.innerWidth,
                height:window.innerHeight 
            }
        );
    };

useEffect(()=>{
    window.addEventListener('resize',updateScreenSize);
    return ()=>
    {
        window.removeEventListener('resize',updateScreenSize);
    }
},[]);



  return (
    <div>
        <h2>Resize Demo with EventListeners: update the screensize</h2>
        <p style={{color:"red"}}> width: {screenSize.width}px </p>
        <p style={{color:"red"}}> height: {screenSize.height}px </p>
    </div>
  )
}

export default Resize
