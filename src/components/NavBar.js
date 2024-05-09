import { Link } from "react-router-dom";

function  NavBar(){
    return( 
    <>

<div class="container">  

<nav   class="fixed-top navbar navbar-expand-sm bg-dark navbar-dark">

  
  <a class="navbar-brand" href="/">		
		<i style={{fontSize:"40px"}} class="bi bi-house-heart"></i>    
  </a>
  
  
  <button 	class="navbar-toggler" type="button" 
					data-bs-toggle="collapse" 
					data-bs-target="#div1">
    <span class="navbar-toggler-icon"></span>
  </button>
    
   
  <div class="collapse navbar-collapse" id="div1">
  
    <ul class="navbar-nav">
    <li className="nav-item">
              <Link className="nav-link" to="/">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"/>
                </svg>
              </Link>
            </li>
    <li class="nav-item">     
        <Link class="nav-link" to="/Login">Login</Link>
      </li>
      <li class="nav-item">     
        <Link class="nav-link" to="/Admin">Admin</Link>
      </li>
      <li class="nav-item">      
        <Link class="nav-link" to="/AllProducts">Products</Link>
      </li>
      <li class="nav-item">      
        <Link class="nav-link" to="/ShoppingCart">Cart</Link>
      </li>

    
    <li class="nav-item dropdown">
      <a 	class="nav-link dropdown-toggle" href="#" id="navbardrop" 
			data-bs-toggle="dropdown">
       Categories
      </a>
      <div class="dropdown-menu">       
        <Link class="dropdown-item" to="/ProductByCategory/Mobile">Luxery Mobiles</Link>
        <Link class="dropdown-item" to="/ProductByCategory/Gaming">Gaming Mobiles</Link>
        <Link class="dropdown-item" to="/ProductByCategory/Earbuds">Earbuds</Link>
         
      </div>   
	</li>
	
	</ul>
  </div>  
  
</nav> 

</div>        
    </>);
  };


 export default NavBar; 