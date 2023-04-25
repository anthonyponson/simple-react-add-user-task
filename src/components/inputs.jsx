import React, { useState } from 'react'

function Input({ label, inputprops, onChange, value }) {
  

  return (
    <>
      <div className='flex flex-col'>
        <label className='mb-2 text-blue-950-50'>{label}</label>
        <input
          className='p-2 border-2 outline-none rounded-md bg-gray-200'
          {...inputprops}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  )
}

export default Input
