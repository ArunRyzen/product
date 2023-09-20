import Leftbar from "./Leftbar";
import Navebar from "./Navebar";
import { useEffect, useState } from "react";
import "./product.css"
import Rightbar from "./Rightbar";
import { increment } from "./Redux/Userslice";
import { useDispatch } from "react-redux";

const Product=()=>{
        const dispatch= useDispatch()
    const [ data, setdata]=useState([]);
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((response)=>{
            return response.json();
        })
        .then((result)=>{
            setdata(result)
            console.log(result)
        })
    },[])
    
    return(
        <div>
            <Navebar/>
            <div className="common">
            <Leftbar/>
            <div className="Product">
        { data.map((item,index)=>{
                 return(
                    <div key={index}>
                        <p>{item.id}</p>
                       <p>{item.title}</p> 
                       <p>{item.price}</p>
                       <div className="image">
                       <img className="picture" alt = "" src={item.image}/>
                       <button className="cart"onClick={()=>dispatch(increment())}>Add To Cart</button>
                       </div>
                        </div>
                )
            })
        }
        </div>
        <Rightbar/>
        </div>
        
        </div>
    )
}
export default Product;