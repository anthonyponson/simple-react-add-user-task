import { createSlice } from '@reduxjs/toolkit'

const initialState = [
]

const stateSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload)
    },
    edit: (state, action) => {
        const {id, name, email} = action.payload
        const existingUser = state.find(user => user.id === id)
        if(existingUser){
            existingUser.name = name
            existingUser.email = email
        }
    },
    userRemove: (state, action) => {
        const {id} = action.payload
        const existingUser = state.find(user => user.id === id)
        if(existingUser){
            return state.filter(user => user.id !== id)
        }
    }
  },
})


export const {addUser, edit, userRemove } = stateSlice.actions

export default stateSlice.reducer
