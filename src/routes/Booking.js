import react from "react";
import carhotel from "../assets/carHotel.png"
function Booking() {
    return (
        <div className="booking">
            <h1>Booking</h1>
            <img src={carhotel} alt="" className='carhotel'/>
        </div>
    )
}
export default Booking;