const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

let secureEnv = require('secure-env');
global.env = secureEnv({ secret: 'a1234' });

const app = express();

app.use(express.json());
app.use(cors());

// mongoose.connect("mongodb://127.0.0.1:27017/mern-todo?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => console.log("Connected to DB")).catch(console.error);

app.get('/env', async (req, res) => {
    const data = {
        "api_url2": global.env.Secret_Key,
    }
    res.json(data);
})

app.listen(3001, () => console.log(("Running in port 3001")))