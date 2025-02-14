import React from 'react';
import MasterLayout from "../components/MasterLayout.jsx";
import ProductList from "../components/ProductList.jsx";

const ProductPage = () => {
    return (
        <MasterLayout>
            <ProductList/>
        </MasterLayout>
    );
};

export default ProductPage;