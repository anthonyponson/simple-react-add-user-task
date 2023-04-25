import { useState, useId } from 'react'
import Home from './Home'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import AddUser from './AddUser'
import EditUser from './EditUser'
import { Provider } from 'react-redux'
import { store } from './Store'


function App() {
  return (
    <>
      <div className='container mx-auto pt-20 md:pt-32 px-4'>
      <BrowserRouter>
      <Provider store={store}>
      <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/adduser' Component={AddUser}/>
          <Route path='/edituser/:id' Component={EditUser}/>
        </Routes>
      </Provider>
    </BrowserRouter>
        
      </div>
    </>
  )
}

export default App
