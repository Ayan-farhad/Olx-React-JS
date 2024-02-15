import { useNavigate } from "react-router-dom";
import { Register } from "../../Config/Firebase";
import { useState } from "react";
import olx from '../../assest/ulx.svg';

function RegisterPage() {
    const navigate = useNavigate();
    const [fullname, setfullname] = useState()
    const [age, setAge] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleRegisterBtn = async () => {
        try {
            await Register({ email, password, fullname, age }).then((res) => {
                console.log("🚀 ~ awaitRegister ~ res:", res)
                if (res && res.user) {
                    navigate('/Login');
                }
            })
        } catch (e) {
            console.log("🚀 ~ handleRegisterBtn ~ e:", e)
        }

    };

    return (
        <div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div style={{ background: 'rgb(240, 235, 235)', width: '90%', maxWidth: '400px', textAlign: 'center', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                    <div style={{ display: "flex", justifyContent: 'center' }}>
                        <img style={{ width: '40px', }} src={olx} >
                        </img>
                        <h2 style={{ marginLeft: '10px' }} >OLX Login Page</h2>
                    </div>
                    <input style={{ width: '100%', height: '30px', border: 'none', margin: '10px 0' }} placeholder="Full Name" onChange={(e) => setfullname(e.target.value)} />
                    <input style={{ width: '100%', height: '30px', border: 'none', margin: '10px 0' }} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input style={{ width: '100%', height: '30px', border: 'none', margin: '10px 0' }} placeholder="Age" onChange={(e) => setAge(e.target.value)} />
                    <input style={{ width: '100%', height: '30px', border: 'none', margin: '10px 0' }} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <br />
                    {/* <button style={{ width: '100%', height: '30px', border: 'none', background: 'rgb(51, 47, 122)', color: 'white' }} onClick={handleRegisterBtn}>Create Account</button> */}
                    <button onClick={handleRegisterBtn}  style={{ width: '100%', height: '35px', border: 'none',borderRadius:5, background: '#002f34', color: 'white', cursor: "pointer"}} >Create account</button>
                    <p>
                        Already have an account.
                        <span onClick={() => navigate('/Login')} style={{color:'blue'}}> Login</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;