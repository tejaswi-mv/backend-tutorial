const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth.routes');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully");

    }catch(err){
        console.error(err.message);
        process.exit(1);
    }
}

connectDB();

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Auth API');

});

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=> console.log(`Server running on port ${PORT}`));

