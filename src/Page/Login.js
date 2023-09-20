import "./Login.css"
import { useNavigate } from "react-router-dom";
import Navebar from "./Navebar";
import { useEffect } from "react";
const Login=()=>{
    const History = useNavigate();
    const name= "Arun"
    const password = "Arun123"
    var user = ""
    var userpass=""
    useEffect(()=>{
        console.log(localStorage.getItem("isitem"));
        if(localStorage.getItem("isitem")==="true"){
            History("/product")
        }
        },[])
    return(
        <div className="App">
            <div className="topbar">
                <Navebar/>
            </div>
            <div className="box">
            <h1 className="head">Login</h1>
            <input className="text" placeholder="userId" onChange={(e)=>user=e.target.value}/>
            <input className="text" placeholder="Password" type="password" onChange={(e)=>userpass= e.target.value}/>
            <button onClick={()=>
            { 
            if(name==user&&password==userpass){
                alert("login successful")
                localStorage.setItem("isitem",true)
                History("/Product")
            }
                else{
                    alert("incorrect")
                }
            }
    
            }>sign-in</button>
            </div>
        </div>
    )
}
export default Login;