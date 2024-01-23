import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    return (
        <div style={{ backgroundColor: "bisque", color: "black", width: '100%' }} >
            <nav >
                <h1>Navbar</h1>
                <button onClick={() => navigate('/Login')}>Login</button>
                <button onClick={() => navigate('/PostAd')} >Sell</button>
                <button>Logout</button>
            </nav>
        </div>
    )
}

export default Navbar;