import {useState}  from 'react';
import { useNavigate } from 'react-router-dom';

function Login()
{
    const [uname, setUname] = useState("");
    const [password, setPassword] = useState("");
    const [result, setResult] = useState("");
    const navigate = useNavigate();


    function loginClick()
    {
           if(uname == "akshitha" && password == "abcd") 
           {
                // setResult("Welcome to Admin");
                sessionStorage.setItem("USER_ID", uname);
                navigate("/");
           }
           else
           {
                setResult("Invalid User Id or password");
           }
    }

    return (<>

       
       <fieldset style={{textAlign:'center'}}>
            <legend><h1><b>User Login</b></h1></legend>

           <b> User Name :</b>  
            <input  type="text"  onChange={ (e) => setUname(e.target.value) } />
            
            <br/><br/>
           <b> Password:</b>
            <input  type="password"  onChange={ (e) => setPassword(e.target.value) } />
        <br/><br/>
        <input type="button"  onClick={loginClick}  value="Login" />
       <p style={{color:"red"}}>{result}</p>
       </fieldset>
       
    </>);
}
export default Login;