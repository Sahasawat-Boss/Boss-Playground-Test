import React from 'react'

//รับค่า props มาจาก parent component
const Item2 = (props) => {

  const name = props.name; //รับค่า name จาก parent component
  const surname = props.surname;
  const age = props.age;
  const calBirth = new Date().getFullYear()-props.age; //newDate.getFull Year << show present year from pc

  let checkOld = age > 60; // if age > 60 show true else show false

  return (
    <>
      <h1 className="text-lg text-center my-1">Custom Prop + Add Condition </h1>
      <div className='flex gap-4 items-center justify-center bg-gray-700 py-4 px-4'>
        <div>{name}</div>  {/*Render the value of `name` inside the div*/}
        <div>{surname}</div>
        <div>Age: {age}</div>
          <div>Birth: {calBirth}</div>
          {/*<div>{checkOld.toString()}</div>  ==== ซ่อนไว้ ถ้าแสดงจะเป็น True False เฉยๆ */}
          <div className={checkOld ? "bg-red-500 text-white px-2 py-1 rounded" : "bg-blue-500 text-white px-2 py-1 rounded"}>
            {checkOld ? "= Old" : "= Young"}
          </div> {/*If checkOld is True show Old, false show young*/}
      </div>
    </>
  )
}

export default Item2