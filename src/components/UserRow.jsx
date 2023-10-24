import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";


const UserRow = ({user, users, setUsers}) => {
    const {name, email, gender, status} = user;
    

    // delte user 
    const deleteUser = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${id}`, {
                    method : "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.deletedCount > 0){
                        const remainingUser = users.filter(user => user._id !== id)
                        setUsers(remainingUser)
                        Swal.fire(
                            'Deleted!',
                            'User deleted',
                            'success'
                            )
                           
                          
                    }
                })
            }
          })
    

     
    }
    return (
        <tr>
        <th>1</th>
        <td>{name}</td>
        <td>{email}</td>
        <td>{gender}</td>
        <td>{status}</td>
        <th className="space-x-4">
            <button className="btn btn-sm btn-success">Edit</button>
            <button className="btn btn-sm btn-error" onClick={() => deleteUser(user._id)}>Delete</button>
        </th>
      </tr>
    );
};

export default UserRow;