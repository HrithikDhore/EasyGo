const express = require("express");
const mysql = require("mysql");
const nodemailer = require('nodemailer');
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your_email@gmail.com',
        pass: 'your_email_password'
    }
});

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "signup"
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

app.post('/register', (req, res) => {
    const sql = `INSERT INTO login (name, email, password) VALUES (?,?,?)`;
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error registering user:', err);
            return res.json("Error");
        }
        return res.json(data);
    });
});

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE email = ? AND password = ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            console.error('Error logging in:', err);
            return res.json("Error");
        }
        if (data.length > 0) {
            return res.json("Success");
        } else {
            return res.json("Fail");
        }
    });
});

app.post('/forgotpassword', (req, res) => {
    const { email } = req.body;
    const sql = "SELECT * FROM login WHERE email = ?";
    db.query(sql, [email], (err, data) => {
        if (err) {
            console.error('Error retrieving user:', err);
            return res.json("Error");
        }
        if (data.length === 0) {
            return res.json("User not found");
        } else {
            const newPassword = generateRandomPassword(); // Implement your logic to generate a random password
            const updateSql = "UPDATE login SET password = ? WHERE email = ?";
            db.query(updateSql, [newPassword, email], (err, result) => {
                if (err) {
                    console.error('Error updating password:', err);
                    return res.json("Error");
                }
                sendPasswordResetEmail(email, newPassword); // Function to send password reset email
                return res.json("Password reset successfully");
            });
        }
    });
});

function sendPasswordResetEmail(email, newPassword) {
    const mailOptions = {
        from: 'your_email@gmail.com',
        to: email,
        subject: 'Password Reset',
        text: `Your new password is: ${newPassword}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending password reset email:', error);
        } else {
            console.log('Password reset email sent:', info.response);
        }
    });
}

function generateRandomPassword() {
    // Implement your logic to generate a random password
    return Math.random().toString(36).slice(-8);
}

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
