import { useState, useEffect } from "react";
import Navbar from "../../Component/Navbar";
import { getDataFromFirebase } from "../../Config/Firebase";
import ApiCards from "../../Component/Cards";
import Footer from "../../Component/Footer";
import Categories from "../../Component/Icons";

function DashBoard() {
    const [postData, setPostData] = useState([]);

    useEffect(() => {
        getUserData();
    }, [])

    const getUserData = async () => {
        const ads = await getDataFromFirebase();
        console.log(ads);
        setPostData(ads);
    }

    return (
        <div>
            <Navbar />
            <Categories />
            {postData.map((item) => {
                console.log("🚀 ~ {postData.map ~ item:", item)
                return <ApiCards item={item} />
            })}

            <Footer />
        </div>
    )
}

export default DashBoard;