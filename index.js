const express = require('express');
const connectDB =require('./config/db');
const app = express();
//db connexion
connectDB();


app.use(express.json({extented :false}));

//routes definition
app.use('/',require('./Routes/index'));
app.use('/api/url',require('./Routes/url'));


const PORT = 5000;

app.listen(PORT,()=> console.log(`Server running on port ${PORT}`));