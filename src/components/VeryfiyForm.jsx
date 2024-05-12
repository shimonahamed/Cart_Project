import React, {useState} from 'react';
import ButtonSpinner from "./ButtonSpinner.jsx";
import Helper from "../utility/Helper.jsx";
import {toast} from "react-hot-toast";
import axios from "axios";

const VeryfiyForm = () => {

    let [submit,setsubmit]=useState( false)

    const onSubmit= async (e)=> {
        console.log("jibon")
        e.preventDefault();
        const formdata = new FormData(e.target)
        const otp = formdata.get('otp')
        if (Helper.isEmpty(otp)) {
            toast.error("Veryfication Code Required!")

        } else {

            let email=sessionStorage.getItem('email')
            setsubmit(true)
            let res = await axios.post(`${Helper.API_BASE}/verify-login`, {UserEmail: email,OTP:otp})
            setsubmit(false)
            if (res.data['msg'] === 'success') {
                sessionStorage.removeItem('email')
                sessionStorage.setItem("token",res.data['data'])
                window.location.href="/"

            } else {
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
                        <form onSubmit={onSubmit} className="p-4">

                            <label>Veryficetion Code</label>
                            <input className="form-control" name="otp" type="text" placeholder="Type Your Otp Code"/>
                            <button type="submit" disabled={submit} className="btn btn-danger w-100 mt-3">
                                {submit ? (<ButtonSpinner/>) : ("Submit")}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default VeryfiyForm;