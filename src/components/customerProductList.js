import React, { useEffect, useState } from "react";
import axios from 'axios';
import './customerProductList.css';
import { Link } from "react-router-dom";

function CustomerProductList() { 
    const [productsArray, setProductsArray ] = useState([]);
   

    useEffect(() => {
        getProductsClick();
    }, []);

    function getProductsClick() {     
        let url = "http://localhost:3500/products"; 
        axios.get(url)
            .then((res) => {
                setProductsArray(res.data);
            });       
    }

    const resultArray = productsArray.map((item, index) => (
        <div className="productCard" key={index}>
            <img src={item.productImage} height={100} width="100" alt={item.productName} />
            <br/>
            <span className="prdName">{item.productName}</span> <br/>
            <span className="prdPrice"> ₹ {typeof item.unitPrice === 'number' ? item.unitPrice.toFixed(2) : 'Kavala'}</span>
            <br/><br/>
            <button className="btn btn-primary">
                <Link to={`/ProductDetails/${item.id}`} style={{ color: "white", textDecoration: "none" }}>View Details</Link>
            </button>				 
        </div>        
    ));
    

    return (
        <> 
            {resultArray} 
        </>
    );
}
export default CustomerProductList;