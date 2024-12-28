import React from 'react'

//รับค่า props มาจาก parent component
const Item2 = (props) => {

  const name = props.name; //รับค่า name จาก parent component
  const surname = props.surname;
  const age = props.age;

  let ageCheack = age > 60;

  return (
    <>
      <h1 className="text-lg text-center">Custom Prop + Condition </h1>
      <div className='flex gap-4 items-center justify-center bg-gray-700 py-4'>
        <div>{name}</div>  {/*Render the value of `name` inside the div*/}
        <div>{surname}</div>
        <div>{age}</div>
        <div>{ageCheack.toString()}</div>
      </div>
    </>
  )
}

export default Item2