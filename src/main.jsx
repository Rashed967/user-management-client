import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CreateUser from './components/CreateUser.jsx'
import UpdateUser from './components/UpdateUser.jsx'


const router = createBrowserRouter([
  {
    path : "/",
    element : <App />,
    loader : () => fetch('http://localhost:5000/users')
  },
  {
    path : "createUser",
    element : <CreateUser />
  },
  {
    path : "updateUser/:id",
    element : <UpdateUser />, 
    loader : ({params}) => fetch(`http://localhost:5000/users/${params.id}`) 
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
