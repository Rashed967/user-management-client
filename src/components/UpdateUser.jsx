import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateUser = () => {
    const loadedUser = useLoaderData()

    const {name, email, gender, status, _id} = loadedUser


    // update user function 
    const updateUser = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const gender = form.gender.value;
        const status = form.status.value;
        const user = {name, email, gender, status}

        // send form data to the server 
        fetch(`http://localhost:5000/users/${_id}`, {
            method : "PUT",
            headers : {'content-type' : 'application/json'},
            body : JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'user info created',
                    showConfirmButton: false,
                    timer: 1500
                  }) 
                  form.reset();
            }
        })
        
    }


    return (
       <div className="mt-12">
            <h1 className="text-3xl font-bold underline"> update info <span className="text-blue-600">({loadedUser.name})</span></h1>

            {/* form div  */}
                <form  onSubmit={updateUser}>
            <div className="w-1/2 mx-auto mt-12 space-y-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Name</span>
                        </label>
                        <input defaultValue={name} name="name" type="text" placeholder="Your name" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Email</span>
                        </label>
                        <input defaultValue={email} name="email" type="text" placeholder="Your email" className="input input-bordered w-full " />
                    </div>

                    {/* gender  */}
                    <div className=" w-full flex items-center gap-10">
                        <span className="text-lg font-semibold">Gender</span>

                      <div className="flex items-center">
                        <label className="">
                            <span className="mr-3">Male</span>
                        </label>
                        <input  type="radio" value={"Male"} name="gender" className="radio radio-success"  />
                        </div>

                       
                        <div className="flex items-center">
                        <label className="">
                            <span className="mr-3">Female</span>
                        </label>
                        <input type="radio" value={"Female"} name="gender" className="radio radio-success" />
                        <div/>
                    </div>
                    </div>

                    {/* status  */}

                    <div className=" w-full flex items-center gap-10">
                        <span className="text-lg font-semibold">Status</span>

                      <div className="flex items-center">
                        <label className="">
                            <span className="mr-3">Active</span>
                        </label>
                        <input  type="radio" value={"Active"} name="status" className="radio radio-success"  />
                        </div>


                        <div className="flex items-center">
                        <label className="">
                            <span className="mr-3">Inactive</span>
                        </label>
                        <input  type="radio" value={"Inactive"} name="status" className="radio radio-success" />
                        <div/>
                    </div>
                    </div>

                    <div className=" w-full">
                        
                    <button className="btn btn-info w-full">Create</button>
                    </div>
                    
            </div>
                </form>
        </div>
    );
};

export default UpdateUser;