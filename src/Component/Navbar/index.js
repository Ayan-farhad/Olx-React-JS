import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Config/Firebase";
import { useState, useEffect } from "react";
import { userLogout } from "../../Config/Firebase";
import sellicon from '../../assest/sellicon.svg'
import olx from "../../assest/olx.svg";
import olxTop from "../../assest/olx top.svg";
import car from "../../assest/car-front.svg";
import building from "../../assest/building.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { Register, login, SellProduct, getDataFromFirebase } from "../../Config/Firebase";


function Navbar() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null)

    const Logout = () => {
        userLogout(user)
    }

    const [showMediaIcons, setshowMediaIcons] = useState(false)



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
        <>
            <header className="main-header">
                <div className="hamburger-menu">

                    <a href="#" onClick={() => setshowMediaIcons(!showMediaIcons)}>
                        <GiHamburgerMenu />
                    </a>
                </div>
                <div className="logos">
                    <img style={{
                        width: '50%'
                    }} src={olxTop} />
                </div>
                <div className="car">
                    <img style={{
                        width: '13%'
                    }} src={car} />
                    <p>MOTORS</p>
                </div>
                <div className="building">
                    <img style={{
                        width: '13%'
                    }} src={building} />
                    <p>PROPERTY</p>
                </div>
            </header>
            <div style={{ height: '2.9rem' }}  ></div>

            <nav className="main-nav">
                {/* 1st logo */}
                <div className="logo">
                    <img style={{
                        width: '100%',
                    }} src={olx} />
                </div>
                {/* Search Bar */}

                <div className="place-holder">
                    <input placeholder="Pakistan" />
                </div>

                <div className="place-holder2">
                    <input placeholder="Fine Car,Mobile Phone And More..." />
                </div>

                {/* buttons icons */}
                <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
                    {user ?
                        <h4>{user.email}</h4> :
                        <button className="btn1" onClick={() => navigate('/Login')}><u>login</u></button>
                    }
                    {user ?
                        <button onClick={Logout} style={{ height: '3rem', fontWeight: 'bold', fontSize: '20px', marginTop: '10px', border: 'none', background: 'none', width: '7%' }}   >Logout</button> : null
                    }
                    {/* <button className="btn1" onClick={() => navigate('/PostAd')}>+sell</button> */}
                    <div style={{ cursor: 'pointer', marginRight: 20, display: "flex", flexDirection: "column", alignItems: "center", marginRight: 10, marginTop: 10 }}>
                    <div style={{ position: "relative" }}>
                    <img src={sellicon} style={{ width: '5.5rem' }}></img>
                    <span onClick={() => navigate('/PostAd')} style={{ position: "absolute", top: "45%", left: "48%", transform: "translate(-50%, -50%)", color: "black", fontSize: 15, fontWeight: 'bold' }}>+SELL</span>
                    </div>
                    </div>

                </div>
            </nav><br/><br/><br/><br/><br/>
        </>
    )
}

export default Navbar;