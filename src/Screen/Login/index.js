import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../Config/Firebase";
import olx from '../../assest/ulx.svg'

function LoginPage() {
    const navigate = useNavigate();
    const [email ,setEmail] = useState();
    const [password ,setPassword] = useState();

    const handleLoginBtn = async()=>{
        await login({ email, password }).then((res) => {
            console.log("🚀 ~ awaitlogin ~ res:", res)
            if (res && res.user) {
                navigate('/')
            }

        }).catch(err => {
            console.log("🚀 ~ awaitlogin ~ err:", err)
        })
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ background: 'rgb(240, 235, 235)', width: '90%', maxWidth: '400px', textAlign: 'center', padding: '20px' }}>
                <div style={{ display: "flex", justifyContent: 'center' }}>
                    <img style={{ width: '40px', }} src={olx} >
                    </img>
                    <h2 style={{ marginLeft: '10px' }} >OLX Login Page</h2>
                </div>
                <p style={{ display: "flex", marginLeft: '15px' }} >Email</p>
                <input style={{ width: '90%', height: '30px', border: 'none', paddingLeft:10 }} placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
                <p style={{ display: "flex", marginLeft: '15px' }} >Password</p>
                <input style={{ width: '90%', height: '30px', border: 'none', paddingLeft:10 }} placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}  />
                <p style={{ display: "flex", marginLeft: '15px' }} >Forgotten Password</p>
                <button onClick={handleLoginBtn}  style={{ width: '70%', height: '30px', border: 'none',borderRadius:5, background: '#002f34', color: 'white', cursor: "pointer" }} >Login</button>
                <p>Don't You Have An Account.
            <span onClick={() => navigate('/Register')} style={{color:'blue'}} > Register</span>
            </p>
            </div>
        </div>
        </div>
    )
}

export default LoginPage;