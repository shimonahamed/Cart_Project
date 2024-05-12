import React from 'react';
import NavberPage from "./NavberPage.jsx";
import FooterPage from "./FooterPage.jsx";
import {Toaster} from "react-hot-toast";

const MasterLayout = (props) => {
    return (
        <div>
            <NavberPage/>
            {props.children}
            <Toaster position="bottom-center"/>
            <FooterPage/>
        </div>
    );
};

export default MasterLayout;