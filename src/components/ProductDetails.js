import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetails(props) {
    let dataObj = {
        "id": 0,
        "productName": "",
        "category": "",
        "description": "",
        "unitPrice": 0,
        "productImage": ""
    };

    const [productObj, setProductObj] = useState(dataObj);
    const [qty, setQty] = useState(1); 
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getSelectedProductDetails();
    }, []);

    function getSelectedProductDetails() {
        let url = "http://localhost:3500/products/" + id;
        axios.get(url).then((resData) => {
            setProductObj(resData.data);
        });
    }

    function  addToCartButtonClick()
    {
        let userId = sessionStorage.getItem("USER_ID");
        if(userId == null || userId == undefined)
        {
            alert("Please Login before adding items to Cart");
            navigate("/Login");
            return;
        }

        let cartObj = {};
      
        cartObj.productName		= 	productObj.productName;			
        cartObj.unitPrice = productObj.unitPrice;
        cartObj.quantity  =  qty;
        cartObj.total       =   productObj.unitPrice * qty;			  			 
        cartObj.userId   =   sessionStorage.getItem("USER_ID");

        let url = "http://localhost:3500/cart";
        axios.post(url,  cartObj).then((resData)=>
        {
            navigate("/ShoppingCart");
        });
       
    }

    return (
        <div>
            <h3 style={{ textAlign: "center" }}>Product Details</h3>
            <hr />

            <div className="d-flex justify-content-center">
                <div id="carouselExampleRide" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={productObj.productImage} className="d-block" style={{ height: "500px", width: "500px", margin: "0 auto" }} alt="First Slide" />
                        </div>
                        
                        <div className="carousel-item">
                            <img src={productObj.productImage} className="d-block" style={{ height: "500px", width: "500px", margin: "0 auto" }} alt="Third Slide" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div style={{ textAlign: "center" }}>
                <br />
                <h1><b>{productObj.productName}</b></h1>  <br />
                <span className="prdPrice"> <b>₹ {productObj.unitPrice.toFixed(2)}</b></span>
                <br />
                <span><b>Quantity :</b>   &nbsp;&nbsp;
                <button onClick={() => { if (qty > 1) setQty(qty - 1)}}>-</button>
                 &nbsp;&nbsp;
                    {qty} 
                    &nbsp;&nbsp;
                    <button onClick={() => setQty(qty + 1)}>+</button> 
                   
                    
                </span> <br/>
                <br />
                <span> <b> Product Description : </b>   <b style={{color:'blue'}}>{ productObj.description}</b></span>
                <br />
                <button  onClick={addToCartButtonClick}>Add To Cart</button>   
            </div> <hr/>
        <div style={{textAlign:'center'}}>    <Link className='btn btn-primary' to="/AllProducts" >Back to Products</Link></div>
        </div>
    );
}
export default ProductDetails;