require("dotenv").config();
const express = require("express");
const db = require("./db/connection");
const cors = require('cors');
const cookieParser = require("cookie-parser");
const app = express();

// Importing Routes:
const authRoutes = require("./routes/auth.routes");  
const userRoutes = require("./routes/user.routes");

// Connecting DB:
db();

// Middleware:
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

app.get('/', (req, res) => {
    res.send("Welcome!!!");
})

app.use('/api', authRoutes);
app.use("/api", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App is running on PORT ${PORT}`);
})
