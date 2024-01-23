import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../Config/Firebase";

function LoginPage() {
    const navigate = useNavigate();
    const [email ,setEmail] = useState()
    const [password ,setPassword] = useState()

    const handleLoginBtn = ()=>{
        login({email , password});
    }

    return (
        <div>
            <h1>Login page</h1>
            <input placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} /><br />
            <input type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} /><br />

            <button onClick={handleLoginBtn} >Login</button>
            <p>
                don't you have an account.
            <span onClick={() => navigate('/Register')} style={{color:'blue'}} > Register</span>
            </p>
        </div>
    )
}

export default LoginPage;