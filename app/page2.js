"use client"
import React, { useState } from 'react';

const page2 = () => {
    const [marks, setMarks] = useState(79);

    return (
        <>
        <h1> My marks were {marks} </h1>
        <button onClick= {() => {
            setMarks(50);
        }} > Update </button>

        
        </>

      
    )

}
export default 
