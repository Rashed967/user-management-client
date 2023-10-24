import Swal from "sweetalert2";


const CreateUser = () => {



    // create user function 
    const createUser = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const gender = form.gender.value;
        const status = form.status.value;
        const user = {name, email, gender, status}

        // send form data to the server 
        fetch('http://localhost:5000/users', {
            method : "POST",
            headers : {'content-type' : 'application/json'},
            body : JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'New user created',
                    showConfirmButton: false,
                    timer: 1500
                  }) 
                  form.reset();
            }
        })
        
    }
    return (
        <div className="mt-12">
            <h1 className="text-3xl font-bold underline"> Create new user</h1>

            {/* form div  */}
                <form onSubmit={createUser}>
            <div className="w-1/2 mx-auto mt-12 space-y-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Name</span>
                        </label>
                        <input name="name" type="text" placeholder="Your name" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Email</span>
                        </label>
                        <input name="email" type="text" placeholder="Your email" className="input input-bordered w-full " />
                    </div>

                    {/* gender  */}
                    <div className=" w-full flex items-center gap-10">
                        <span className="text-lg font-semibold">Gender</span>

                      <div className="flex items-center">
                        <label className="">
                            <span className="">Male</span>
                        </label>
                        <input type="radio" value={"Male"} name="gender" className="radio radio-success" checked />
                        </div>

                       
                        <div className="flex items-center">
                        <label className="">
                            <span className="">Female</span>
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
                            <span className="">Active</span>
                        </label>
                        <input type="radio" value={"Active"} name="status" className="radio radio-success" checked />
                        </div>


                        <div className="flex items-center">
                        <label className="">
                            <span className="">Inactive</span>
                        </label>
                        <input type="radio" value={"Inactive"} name="status" className="radio radio-success" />
                        <div/>
                    </div>
                    </div>

                    <div className=" w-full">
                        
                    <button className="btn btn-info w-full">Info</button>
                    </div>
                    
            </div>
                </form>
        </div>
    );
};

export default CreateUser;