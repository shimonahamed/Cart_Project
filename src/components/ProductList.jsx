import React, {useEffect, useState} from 'react';
import axios from "axios";
import Helper from "../utility/Helper.jsx";
import FullScreenLoader from "./FullScreenLoader.jsx";
import {toast} from "react-hot-toast";

const ProductList = () => {
    let [data,setdata]=useState(null)

    let [loader,setloder]=useState(false)

    useEffect(() => {
        (async ()=>{
            await CallProductList()
        })()
    }, []);
    const CallProductList=async ()=>{
       let res = await axios.get(`${Helper.API_BASE}/product-list`)
        let productList=res.data['data']
        setdata(productList)

    }

    const AddtoCart=async (id)=>{
        setloder(true)
        try{
            let res =await axios.get(`${Helper.API_BASE}/create-cart/${id}`,Helper.tokenHeader())
            setloder(false)
            if (res.data['msg']==="success"){
                toast.success("Added Has Been Completed")
            }else {
                toast.error("Added Has Been Failed")
            }
        }catch (e){
            Helper.Unauthorized(e.response.status)
        }
    }
    return (
        <div>
            {data==null || loader?(<FullScreenLoader/>): (
                <div className="container">
                    <div className="row">
                        {
                            data.map((item, i) => {
                                return (
                                    <div className="col-md-3 p-1">
                                        <div className="card p-3">
                                            <img className="w-100" src={item['image']}/>
                                            <h4>Price:$
                                                 {item['discount'] == 0 ? (<span>{item['price']}</span>) : (<span><strike>{
                                                    <span>{item['price']}</span>}</strike> {<span>{item['discount_price']}</span>}</span>)}
                                            </h4>

                                            <p>{item["title"]}</p>

                                            <button  onClick= {async ()=> { await AddtoCart(item['id'])}} className="btn btn-outline-danger">Add To Cart!</button>

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

export default ProductList;