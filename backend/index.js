const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Import all custom modular routes.
const adminRoute = require('./routes/admin');

// Define and attach the routes to the main app.
app.use('/admin', adminRoute);

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});