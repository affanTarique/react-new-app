import React from 'react'

const page = () => {
  let marks = 79
  const changeMarks = () =>
  return (
    <>
    <h1 className = 'font-bold text-xl'> My total marks were {marks} </h1>
    <button onClick= {()=> {
      marks = 40
     }}className='bg-gray-500 px-5 py-2 rounded mt-5 text-white font-bold'> update </button>
    </>
  )
}

export default page