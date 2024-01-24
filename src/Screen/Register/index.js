import { useNavigate } from "react-router-dom";
import { Register } from "../../Config/Firebase";
import { useState } from "react";

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
            <h1>Register page</h1>

            <input placeholder="Enter fullname" onChange={(e) => setfullname(e.target.value)} /><br />
            <input placeholder="Enter age" onChange={(e) => setAge(e.target.value)} /><br />
            <input placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} /><br />
            <input type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} /><br />

            <button onClick={handleRegisterBtn} >Register</button>

            <p>
                you have an account.
                <span onClick={() => navigate('/Login')} style={{ color: 'blue' }} > Login</span>
            </p>
        </div>
    )
}

export default RegisterPage;