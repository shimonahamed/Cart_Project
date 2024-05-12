import React, {useState} from 'react';
import Helper from "../utility/Helper.jsx";
import {toast} from "react-hot-toast";
import ButtonSpinner from "./ButtonSpinner.jsx";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const LoginForm = () => {

    let [submit,setsubmit]=useState( false)
    let nevigate=useNavigate()

    const onSubmit= async (e)=>{
        e.preventDefault();
        const formdata=new FormData(e.target)
        const email=formdata.get('email')
        if (Helper.isEmpty(email)){
            toast.error("Email Required!")

        }else {
            setsubmit(true)
            let res=await axios.post(`${Helper.API_BASE}/user-login`,{UserEmail:email})
            setsubmit(false)
            if (res.data['msg']==='success'){
                toast.success(res.data['data'])
                sessionStorage.setItem('email',email)
                nevigate("/veryfiy")
            }else {
                toast.error("Login Fail!")
                setsubmit(false)
            }



        }


    }
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4 ">
                    <div className="card">
                        <form  onSubmit={onSubmit} className="p-4">

                        <label >Your Gmail</label>
                        <input className="form-control" name="email" type="email" placeholder="Type Your Email"/>
                        <button type="submit" disabled={submit} className="btn btn-danger w-100 mt-3">
                            {submit?(<ButtonSpinner/>):("Submit")}
                        </button>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default LoginForm;