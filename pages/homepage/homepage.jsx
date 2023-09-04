import NavBar from "../../components/navBar"
import shirtlogo from "../../assets/SHIRT_LOGO.svg"
export default function HomePage(){
    return (
        <div>
            <NavBar/>
            <div id="shirt-logo">
                <img src={shirtlogo}/>
            </div>
            <h3>Time left to purchase Early Bird ticket</h3>
            
        </div>
    )
}