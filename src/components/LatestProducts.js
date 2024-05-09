import { useEffect, useState } from "react";
import axios from 'axios';
import './customerProductList.css';
import { Link } from "react-router-dom";
 

function LatestProducts() {

    const [latestProducts, setLatestProducts] = useState([]);


    useEffect(() => {
        getProductsClick();
    }, []);

    function getProductsClick() {
        let url = "http://localhost:3500/products?_sort=id&_order=desc&_limit=3";
        axios.get(url).then((resData) => {
            setLatestProducts(resData.data);
        });
    }



   // Import React and any other necessary modules

// Assuming latestProducts is an array of product objects
let resultArray = latestProducts.map((item, index) => (
    <div className="product-card" key={index}>
        <div className="card">
            <img src={item.productImage} height={100} width="100" />
            <br></br>
            <span className="prdName">{item.productName}</span>
            <br></br>
            <span className="prdPrice"> ₹ {item.unitPrice.toFixed(2)}</span>
            <br></br>
            <Link to={"/ProductDetails/" + item.id}>
                <button className="btn btn-outline-info" style={{ fontSize: '12px', padding: '5px 10px' }}>
                    View Details
                </button>
            </Link>
        </div>
    </div>
));

return (
    <div className="product-container" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {resultArray}
    </div>
);


   
}

export default LatestProducts;