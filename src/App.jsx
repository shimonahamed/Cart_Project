
import React from 'react';
import {BrowserRouter, Route , Routes} from "react-router-dom";
import ProductPage from "./pages/ProductPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import VeryfiyPage from "./pages/VeryfiyPage.jsx";
import CartListPage from "./pages/CartListPage.jsx";
import Helper from "./utility/Helper.jsx";
import NotFound from "./pages/NotFound.jsx";



const App = () => {
    if(Helper.isLogin()){
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ProductPage/>}/>
                    <Route path='/cartList' element={<CartListPage/>}/>
                    <Route path='*' element={<NotFound/>}/>

                </Routes>
            </BrowserRouter>
        );

    }else {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ProductPage/>}/>
                    <Route path='/login' element={<LoginPage/>}/>
                    <Route path='/veryfiy' element={<VeryfiyPage/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        );
    }

};

export default App;