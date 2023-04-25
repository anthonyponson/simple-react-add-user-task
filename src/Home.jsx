import { useDispatch } from 'react-redux'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { userRemove } from './stateSlicer'

function Home() {
  const users = useSelector((store) => store.users)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const deleteUser = (id) => {
    dispatch(userRemove({id}))
  }

  const renderCards = () =>
    users.map((user) => (
      <div
        key={user.id}
        className='bg-gray-300 p-5 flex items-center justify-between rounded-lg '
      >
        <div>
          <h3>{user.name}</h3>
          <span>{user.email}</span>
        </div>

        <div>
          <Link to={`edituser/${user.id}`}>
            <button>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
                />
              </svg>
            </button>
          </Link>

          <button onClick={() => deleteUser(user.id)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z'
              />
            </svg>
          </button>
        </div>
      </div>
    ))

  

  return (
    <>
      <div>
        <button
          onClick={() => navigate('/adduser')}
          className='bg-emerald-400 py-2 px-4 rounded mb-6 text-neutral-50'
        >
          Add User
        </button>

        <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
          {users.length ? renderCards() : <p>there is none here</p>}
        </div>
      </div>
    </>
  )
}

export default Home
