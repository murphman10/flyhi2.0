<<<<<<< HEAD
import React from "react";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <h1>Welcome to FlyHi</h1>
            <h2>Login</h2>

            <form action="/login">
                <div className="imgcontainer">
                    
                </div>

                <div className="container">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required/>

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required/>
        
                    <button type="submit">Login</button>
                    <label>
                        <input type="checkbox" checked="checked" name="remember"/> Remember me
                    </label>
                </div>
            </form>

=======
import react from "react";
import airport from "../assets/airport.jpg"
import FlightSelection from "./FlightSelection";
function Home() {
    return (
        <div className="home">
            <h1>Home</h1>
            <FlightSelection/>
            <img src={airport} alt="" className='airport'/>
>>>>>>> 720ac07b7562150487d444dd1493aa038b7e2db7
        </div>
    )
}
export default Home;