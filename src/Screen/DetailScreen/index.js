import Footer from "../../Component/Footer";
import Navbar from "../../Component/Navbar";
import { useLocation } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
import { IoChatbubbles } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { TiLocation } from "react-icons/ti";

function DetailScreen() {
    const { state } = useLocation();
    console.log("🚀 ~ DetailScreen ~ state:", state)

    return (
        <div>
            <Navbar /><br /><br /><br /><br></br>
            <img src="https://tpc.googlesyndication.com/simgad/2415883724856240815" />

            {/* carousel */}
            <div className="main-section">

                <div className="image-section">
                    <img src={state.item.imageUrl} />
                </div>

                <div className="contact-section">
                    <div style={{ display: 'flex' }}>
                        <div style={{ display: 'flex' }} >
                            <img style={profileimage} src="https://media-mct1-1.cdn.whatsapp.net/v/t61.24694-24/361679144_804898261187815_4000710028089602205_n.jpg?ccb=11-4&oh=01_AdTBAyV6t2M4eHAdcNuG3muDYpr0WoETTO8gAZhdhcxFHw&oe=65DB3F06&_nc_sid=e6ed6c&_nc_cat=104"></img>
                            <p style={p1} >Ayan Farhad</p>
                        </div>
                        <div style={{ display: 'flex' }} >
                            <p style={p2} >member since Jan 2023</p>
                            <h4 style={h4} >see profile</h4>

                        </div>
                    </div>
                    <button style={btn1}><FiPhone />Show phone number</button><br />
                    <button style={btn2}><IoChatbubbles />Chat</button>
                </div>
            </div>

            {/* Items detailscreen section */}

            <div className="price-location">
                <h1>Rs {state.item.price}
                    <span className="span-icon"><IoShareSocialOutline /><CiHeart /></span></h1>
                <p><TiLocation /> Saddar, karachi</p>
            </div>

            <div className="details">
                <h1>Detail</h1>
                <h4>Name: <span style={span}>{state.item.name}</span></h4>
                <h4>Price: <span style={span}> {state.item.price}</span></h4>
                <h3>Description: <span style={span}>{state.item.description}</span></h3>
            </div>


            <br /><br />
            <Footer />
        </div>
    )
}

export default DetailScreen;

const profileimage = {
    width: 60,
    height: 60,
    borderRadius: 70
};
const p1 = {
    fontWeight: "bold",
    marginTop: 1,
    marginLeft: '1rem',
    color: '#002f34'
};
const p2 = {
    marginLeft: '-5.5rem',
    marginTop: 25,
    color: '#002f34'
};
const h4 = {
    marginLeft: '-10.3rem',
    marginTop: 50,
    color: '#002f34'
};
const btn1 = {
    backgroundColor: '#002f34',
    color: 'white',
    width: '90%',
    height: '3rem',
    border: 'none',
    borderRadius: '3px',
    fontSize: '16px'
};
const btn2 = {
    backgroundColor: 'white',
    color: '#002f34',
    width: '90%',
    height: '3rem',
    borderRadius: '3px',
    fontSize: '18px'
};
const span ={
    fontSize:'18px'
}