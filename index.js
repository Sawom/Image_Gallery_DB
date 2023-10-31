const express = require('express');
const cors = require('cors');
require('dotenv').config(); 

const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

// mongodb connection
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bsdjaxv.mongodb.net/?retryWrites=true&w=majority` ;
const client = new MongoClient(uri, { serverApi: {version: ServerApiVersion.v1, strict: true, deprecationErrors: true,}});

async function run(){
    try{
        await client.connect();
        console.log('connected successfully!');
    }
    finally{

    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('image gallery is running');
})

app.listen(port, ()=> {
    console.log(`image gallery server running at ${port}` );
}) 