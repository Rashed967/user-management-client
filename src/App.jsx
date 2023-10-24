
import { useLoaderData } from 'react-router-dom'
import './App.css'
import { useState } from 'react'
import UserRow from './components/UserRow'

function App() {
  const loadeduser = useLoaderData()
  const [users, setUsers] = useState(loadeduser)
  // const [count, setCount] = useState(0)
 

  return (
    <>
     <h1 className="text-3xl font-bold underline">
      Total user : {users.length}
    </h1>
   
      <div className="overflow-x-auto mt-10">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
        {
          users.map((user, idx) => <UserRow 
          key={user._id}
          index={idx}
          user={user}
          users={users}
          setUsers={setUsers}
          />)
        }
       
        </tbody>
      </table>
    </div>
    
    </>
  )
}

export default App
