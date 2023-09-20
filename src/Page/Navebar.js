import "./Navebar.css"
import { useNavigate } from "react-router-dom";
import logo from "../assets/loginlogo.png"
import { useSelector} from "react-redux";
const Navebar=()=>{
    const count = useSelector((state)=>state.cartInfo.value)
    const history=useNavigate()
    const logoutTapped=()=>{
        localStorage.setItem("isitem",false)
            history("/")
    }
return(
    <div className="navebar">
 <h1>Amazon</h1>
 <button onClick={logoutTapped}className="logOut"> <img className="logoo" src={logo} alt="" /></button>
 <h1>cart {count}</h1>
</div>
)
}
export default Navebar;
