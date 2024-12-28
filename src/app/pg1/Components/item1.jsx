import React from 'react'

const Item1 = () => {

    let name = "Sahasawat" // name is a variable
    let surname = "Rueankaew"
    let shortName = "Boss"
    let age = '24'
    let mood = 'Good!'
    console.log(Item1)

  return (
    <>
      <h1 className="text-lg text-center">Test Variable</h1>
      <div className='flex gap-4 items-center justify-center bg-gray-700 py-4'>
        <div>{name}</div>  {/*Render the value of `name` inside the div*/}
        <div>{surname}</div>
        <div>{shortName}</div>
        <div>{age}</div>
        <div>Feel: {mood}</div>
      </div>
    </>
  )
}

export default Item1