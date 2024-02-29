import react from "react";
import airport from "../assets/airport.jpg"
import FlightSelection from "./FlightSelection";
function Home() {
    return (
        <div className="home">
            <h1>Home</h1>
            <FlightSelection/>
            <img src={airport} alt="" className='airport'/>
        </div>
    )
}
export default Home;