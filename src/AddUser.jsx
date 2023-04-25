import { useDispatch } from 'react-redux'
import React, { useId, useState } from 'react'
import Input from './components/inputs'
import { Navigate, useNavigate } from 'react-router-dom'
import {addUser} from './stateSlicer'

function AddUser() {

  const [value, setValues] = useState({
    name: '', 
    email: '',
  })

  const navigate = useNavigate() 
  const dispatch = useDispatch()
  const createid = useId()

  const renderUser = (e) => {
    e.preventDefault()

    if (value.name === '' || value.email === '') return

    dispatch(addUser({
      id:Date.now().toString(),
      // id:createid,
      name:value.name,
      email:value.email
    }))

    setValues({name: '', email: ''})
    navigate('/')
  }

  return (
    <form onSubmit={renderUser}>
      <div className='mt-10 max-w-xl mx-auto space-y-8'>
        <Input
          label='Name'
          value={value.name}
          onChange={(e) => setValues({ ...value, name: e.target.value })}
          inputprops={{ type: 'text', placeholder: 'name', form: 'add-user-form' }}
        />
        <Input
          label='Email'
          value={value.email}
          onChange={(e) => setValues({ ...value, email: e.target.value })}
          inputprops={{ type: 'text', placeholder: 'email', form: 'add-user-form' }}
        />

        <button
          type="submit"
          className='bg-emerald-400 px-4 py-2 text-neutral-50 rounded-md'
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default AddUser
