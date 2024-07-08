import React from 'react'
import { NavLink,useLocation, useNavigate} from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import Login from "./Login"
import toast from 'react-hot-toast';
function Signup() {
    const location=useLocation();
    const navigate=useNavigate();
    const from=location.state?.from?.pathname || "/"
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = async(data) =>{
        const userInfo={
            fullname: data.fullname,
            email: data.email,
            password: data.password,
        };

        await axios.post("http://localhost:4000/user/signup",userInfo)
        .then((res)=>{
            console.log(res.data)
            if(res.data){
                toast.success('Signup Successfully');
                navigate(from,{replace:true});
            }
            localStorage.setItem("Users",JSON.stringify(res.data))
        })
        .catch((err)=>{
            if(err.response){
                console.log(err);
                toast.error("Error: "+ err.response.data.message);
            }
        });
      };
    
    return (
        <>
            <div className="flex h-screen items-center justify-center">
                <div className="w-[600px]">
                    <div className="modal-box dark:bg-slate-800 dark:text-white">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            <NavLink to="/">
                              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ">✕</button>
                            </NavLink>
                            
                        
                        <h3 className="font-bold text-lg">Signup</h3>
                        
                        {/* {name} */}
                        <div className="mt-4 space-y-2">
                            <span>Name</span>
                            <br />
                            <input type="text"
                                placeholder="Enter your fullname" className="w-80 px-3 py-1 border-3 rounded-md outline-none" 
                                {...register("fullname", { required: true })}/>
                                 <br/>
                                 {errors.fullname && <span className="text-sm text-red-500">This field is required</span>}
                        </div>
                        {/* {email} */}
                        <div className="mt-4 space-y-2">
                            <span>Email</span>
                            <br />
                            <input type="email"
                                placeholder="Enter your email" className="w-80 px-3 py-1 border-3 rounded-md outline-none" 
                                {...register("email", { required: true })}/>
                                 <br/>
                                 {errors.email && <span className="text-sm text-red-500">This field is required</span>}
                        </div>


                        {/* {password} */}
                        <div className="mt-4 space-y-2">
                            <span>Password</span>
                            <br />
                            <input type="text"
                                placeholder="Enter your password" className="w-80 px-3 py-1 border-3 rounded-md outline-none" 
                                {...register("password", { required: true })}/>
                                 <br/>
                                 {errors.password && <span className="text-sm text-red-500">This field is required</span>}
                        </div>

                        {/* {button} */}
                        <div className="flex justify-around mt-4">
                            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Signup</button>
                            <p>Already registered?{" "}

                                <button className="underline text-blue-500 cursor-pointer"
                                onClick={()=>{
                                    document.getElementById("my_modal_3").showModal()
                                }}>
                                    Login
                                </button>
                                <Login/>

                            </p>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Signup
