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

             {/* <div className="viewHeight">
//             <div style={{ height: '8rem' }}  ></div>
//             <div style={{ color: "black", width: '100%', position: 'fixed', top: 0 }} >
//                 <header style={{ background: 'rgb(239, 236, 236)' }}>
//                     <div style={{ display: 'flex', justifyContent: 'flex-start' }} >
//                         <img style={{ width: '40px', padding: '0px 30px' }} src={TopOlx} ></img>
//                         <img style={{ padding: '0px 4px 0px 0px' }} src={TopCar} ></img>
//                         <a style={{ padding: '12px 20px 0px 0px' }}>MOTORS</a>
//                         <img style={{ padding: '0px 4px 0px 0px' }} src={TopBuilding} ></img>
//                         <a style={{ padding: '12px 1px 0px 0px' }}>PROPERTY</a>

//                     </div>
//                 </header>
//                 <nav style={{ background: 'rgb(239, 236, 236)', display: 'flex', justifyContent: 'flex-start' }} className='BottomNavbar' >

//                     <img className='mediaremove' style={{ width: '80px', padding: '0px 20px' }} src={BottomOlx} ></img>
//                     <input className='inp1' style={{
//                         width: '15rem',
//                         height: '40px',
//                         margin: '12px 10px 0px 0px',
//                         border: '2px solid black',
//                         borderRadius: '5px'
//                     }} placeholder='Pakistan' ></input>
//                     <input className='Inp2' style={{ width: '45rem', height: '40px', margin: '12px 15px 0px 0px', border: '2px solid black', borderRadius: '5px' }} placeholder='Pakistan' ></input>
//                      {user ?
//                         <h4>{user.email}</h4> :
//                         <button className="btn1" onClick={() => navigate('/Login')}><u>login</u></button>
//                     }
//                     {user ?
//                         <button onClick={Logout} style={{ height: '3rem', fontWeight: 'bold', fontSize: '20px', marginTop: '10px', border: 'none', background: 'none', width: '7%' }}   >Logout</button> : null
//                     }
                    
//                     <div style={{ cursor: 'pointer', marginRight: 20, display: "flex", flexDirection: "column", alignItems: "center", marginRight: 10, marginTop: 10 }}>
//                     <div style={{ position: "relative" }}>
//                     <img src={sellicon} style={{ width: '5.5rem' }}></img>
//                     <span onClick={() => navigate('/PostAd')} style={{ position: "absolute", top: "45%", left: "48%", transform: "translate(-50%, -50%)", color: "black", fontSize: 15, fontWeight: 'bold' }}>+SELL</span>
//                     </div>
//                     </div>
//                     </nav>
                    
//                     </div>
//                 </div> */}


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
            </nav>
        </>
    )
}

export default Navbar;