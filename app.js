const express = require('express');
const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'N0pressure!',
    database: 'guestbook'
});

async function connect(){
    try {
        const conn = await pool.getConnection();
        console.log('Connected to the database');
        return conn;
    } catch (err){
        console.log('Error connecting to the database: ' + err);
    }
}

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false}));
app.use(express.static('public'));


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log('Hello, world - server!')

    res.render('home');
});

app.post('/confirm', async (req, res) => {
    const details = req.body;
    const conn = await connect();
    
    conn.query(`INSERT INTO entries (fname, lname, job, company, linkedIn, email, howWeMet, howWeMetOther, message, mailingList, format) VALUES ('${details.fname}', '${details.lname}', '${details.job}', '${details.company}', '${details.linkedIn}', '${details.email}', '${details.howWeMet}', '${details.howWeMetOther}', '${details.message}', '${details.mailingList}', '${details.format}');`)
    

    res.render('success', {data: details});
})

app.get('/admin', async (req, res) => {
    const conn = await connect();

    const rows = await conn.query(`SELECT * FROM entries;`)

    res.render('entries', {data: rows});
})

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});