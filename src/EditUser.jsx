import React, { useState } from 'react'
import Input from './components/inputs'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { edit } from './stateSlicer'

function EditUser() {
  const params = useParams()
  const dispatch = useDispatch()
  const users = useSelector((store) => store.users)
  const navigate = useNavigate()

  const existingUser = users.filter((user) => user.id === params.id)
  const { name, email } = existingUser[0]

  const [value, setValues] = useState({
    name,
    email,
  })

  const editUser = (e) => {
    e.preventDefault()
    if (value.name === '' || value.email === '') return
    setValues({ name: '', email: '' })
    dispatch(edit({id:params.id,name:value.name,email:value.email}))
    navigate('/')
  }

  return (
    <form onSubmit={editUser}>
      <div className='mt-10 max-w-xl mx-auto space-y-8'>
        <Input
          label='Name'
          value={value.name}
          onChange={(e) => setValues({ ...value, name: e.target.value })}
          inputprops={{
            type: 'text',
            placeholder: 'name',
            form: 'add-user-form',
          }}
        />
        <Input
          label='Email'
          value={value.email}
          onChange={(e) => setValues({ ...value, email: e.target.value })}
          inputprops={{
            type: 'text',
            placeholder: 'email',
            form: 'add-user-form',
          }}
        />

        <button
          type='submit'
          className='bg-emerald-400 px-4 py-2 text-neutral-50 rounded-md'
        >
          Update
        </button>
      </div>
    </form>
  )
}

export default EditUser
