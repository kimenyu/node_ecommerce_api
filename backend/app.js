const express = require('express');
const mongoose = require('mongoose');
const accountRoutes = require('./accounts/routes/accountRoutes');
const productRoutes = require('./products/routes/productRoutes')

const app = express();
const port = 5000;

app.set('view engine', 'ejs');  // Set the view engine to 'ejs'
app.use(express.static('public'));
app.use(express.json());

// CORS middleware
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
});

// MongoDB connection and route setup
const dbURI = "mongodb+srv://kimenyu:Boyfaded7552@cluster0.cbu4pnw.mongodb.net/nodeauth";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });

app.use(accountRoutes, productRoutes);
