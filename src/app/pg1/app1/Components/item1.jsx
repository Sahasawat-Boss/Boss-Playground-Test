import React from 'react'

function Item1() {
  return (
<<<<<<< HEAD:src/app/pg1/app1/Components/item1.jsx
    <>
      <h1 className="text-lg text-center my-1">Test Variable fixed at Component</h1>
      <div className='flex gap-4 items-center justify-center bg-gray-700 py-4 px-4'>
        <div>{name}</div>  {/*Render the value of `name` inside the div*/}
        <div>{surname}</div>
        <div>{shortName}</div>
        <div>{age}</div>
        <div>Feel: {mood}</div>
      </div>
    </>
=======
    <div>
      <div>Name</div>
      <div>Surname</div>
      <div>age</div>
    </div>
>>>>>>> parent of c9b6023 (c2):src/app/pg1/Components/item1.jsx
  )
}

export default Item1