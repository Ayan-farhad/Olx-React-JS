import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Config/Firebase";
import { useState, useEffect } from "react";
import { userLogout } from "../../Config/Firebase";

function Navbar() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null)

    const Logout = ()=>{
        userLogout(user)
    }
    


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("🚀 ~ onAuthStateChanged ~ user:", user)
                setUser(user)
                // ...
            } else {
                setUser(null)
            }
        });
    }, []);

    return (
        <div style={{ backgroundColor: "bisque", color: "black", width: '100%' }} >
            <nav >
                <h1>Navbar</h1>
                {user ?
                <h4>{user.email}</h4>:
                <button onClick={() => navigate('/Login')}>Login</button>
                }
                <button onClick={() => navigate('/PostAd')} >Sell</button>
                <button onClick={Logout} >Logout</button>
            </nav>
        </div>
    )
}

export default Navbar;