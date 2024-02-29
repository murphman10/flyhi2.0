const express = require('express');
const sqlite3 = require('sqlite3');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('flight_data.db');


app.get('/departureflights', (req, res) => {
    const query = `
        SELECT DISTINCT departure_airport
        FROM flights
        GROUP BY departure_airport
        ORDER by departure_airport ASC;
    `;

    db.all(query, (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(rows);
        }
    });
});
app.get('/arrivalflights', (req, res) => {
    const query = `
        SELECT DISTINCT arrival_airport
        FROM flights
        GROUP BY arrival_airport
        ORDER by arrival_airport ASC;
    `;

    db.all(query, (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(rows);
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/booking',(req,res) => {


})
