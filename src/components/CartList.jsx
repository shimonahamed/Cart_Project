import React, {useEffect, useState} from 'react';
import axios from "axios";
import Helper from "../utility/Helper.jsx";
import {toast} from "react-hot-toast";
import FullScreenLoader from "./FullScreenLoader.jsx";

const CartList = () => {
    let [data,setdata]=useState(null)
    let [loader,setloder]=useState(false)

    useEffect(() => {
        (async ()=>{
            await CallProductList()
        })()
    }, []);

    const CallProductList=async ()=>{
        let res = await axios.get(`${Helper.API_BASE}/cart-list`,Helper.tokenHeader())
        let productList=res.data['data']
        setdata(productList)

    }
    const RemoveCart=async (id)=>{
        setloder(true)
        try{
            let res =await axios.get(`${Helper.API_BASE}/remove-cart/${id}`,Helper.tokenHeader())
            setloder(false)
            if (res.data['msg']==="success"){
                toast.success("Remove Has Been Completed")
                await CallProductList()
            }else {
                toast.error("Remove Has Been Failed")
            }
        }catch (e){
            Helper.Unauthorized(e.response.status)
        }
    }
    return (
            <div>
                {data == null || loader ? (<FullScreenLoader/>) : (
                    <div className="container">
                        <div className="row">
                            {
                                data.map((item, i) => {
                                    return (
                                        <div className="col-md-3 p-1">
                                            <div className="card p-3">
                                                <img className="w-100" src={item['product']['image']}/>
                                                <h4>Price:$
                                                    {item['product']['discount'] == 0 ? (<span>{item['product']['price']}</span>) : (
                                                        <span><strike>{
                                                            <span>{item['product']['price']}</span>}</strike> {
                                                            <span>{item['product']['discount_price']}</span>}</span>)}
                                                </h4>

                                                <p>{item['product']["title"]}</p>

                                                <button onClick={async () => {await RemoveCart(item['product']['id'])
                                                }} className="btn btn-outline-danger">Remove Cart!
                                                </button>

                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                )}


            </div>

    );
};

export default CartList;