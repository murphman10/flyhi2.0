// CityDropdown.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Booking from "./Booking";
require('browserify-zlib');
import {response} from "express";


const FlightSelection = ({ onSelect }) => {
  const [arrivalFlights, setArrivalFlights] = useState([]);
  const [selectedDepartureCity, setSelectedDepartureCity] = useState('');
  const [selectedArrivalCity, setSelectedArrivalCity] = useState('');
  const [roundTrip, setRoundTrip] = useState(false);
  const [departureFlights, setDepartureFlights] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/departureflights')
      .then(response => {
        const uniqueDepartureCities = Array.from(new Set(response.data.map(departureFlights => departureFlights.departure_airport)));
        setDepartureFlights(response.data);
        setSelectedDepartureCity(uniqueDepartureCities[0]);
      })
      .catch(error => console.error(error));
    axios.get("http://localhost:8080/arrivalflights")
        .then(response =>{
            const uniqueArrivalCities = Array.from(new Set(response.data.map(arrivalFlights => arrivalFlights.arrival_airport)));
            setArrivalFlights(response.data);
            setSelectedArrivalCity(uniqueArrivalCities[0]);


        })
  }, []);




  const handleRoundTripChange = () => {
    setRoundTrip(!roundTrip);
    onSelect(selectedDepartureCity,selectedArrivalCity, !roundTrip);
  };


return (

    <div>
        <label>Select Departure City:</label>
        <select value={selectedDepartureCity} onChange={(e) => setSelectedDepartureCity(e.target.value)}>
            {departureFlights.map((flight, index) => (
          <option key={index} value={departureFlights.departure_airport}>
            {departureFlights.departure_airport}
          </option>
        ))}
        </select>
        <label>Select Arrival City:</label>
        <select value={selectedArrivalCity}  onChange={(e) => setSelectedDepartureCity(e.target.value)}>
            {arrivalFlights.map((flight, index) => (
          <option key={index} value={arrivalFlights.arrical_airport}>
            {arrivalFlights.arrival_airport}
          </option>
        ))}
      </select>

        <label>
            <input type="checkbox" checked={roundTrip} onChange={handleRoundTripChange}/>
            Round Trip
        </label>
        <label>
            <input type='submit' checked={Booking}/>
        </label>
    </div>


);
};


export default FlightSelection;
