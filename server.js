const express = require('express');
const multer = require('multer');
const mysql = require('mysql2');
const path = require('path');

const app = express();
const port = 3000;

// Set up Multer for file storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Destination folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Rename file with timestamp
    }
});
const upload = multer({ storage: storage });

// Set up MySQL Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',       // Your MySQL username
    password: '',       // Your MySQL password
    database: 'media_db' // Database name
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database!');
});

// Endpoint for file upload
app.post('/upload', upload.single('mediaFile'), (req, res) => {
    const { filename, mimetype, path: filePath } = req.file;
    
    const query = 'INSERT INTO media (filename, mimetype, file_path) VALUES (?, ?, ?)';
    db.query(query, [filename, mimetype, filePath], (err, result) => {
        if (err) throw err;
        res.send({ message: 'File uploaded successfully!', file: result });
    });
});

// Serve static files (photos/videos)
app.use('/uploads', express.static('uploads'));

// Endpoint to fetch all media from the database
app.get('/media', (req, res) => {
    const query = 'SELECT * FROM media';
    db.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
