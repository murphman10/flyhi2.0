import react from "react";
import airport from "../assets/airport.jpg"
function Home() {
    return (
        <div className="home">
            <h1>Home</h1>
            <img src={airport} alt="" className='airport'/>
        </div>
    )
}
export default Home;