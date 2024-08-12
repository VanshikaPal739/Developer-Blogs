//importing express
const express = require('express');
const UserRouter = require('./Routers/UserRouter');
const BlogRouter = require('./Routers/BlogRouter');
const cors = require('cors');

// initialize express
const app = express();

const port = 5000;

//middleware
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use('/user', UserRouter);
app.use('/blog', BlogRouter);

// endpoint or route
app.get('/', (req, res) => {
    res.send('respond from express');
});


app.get('/add', (req, res) => {
    res.send('respond from add');
});

//getall 
app.get('/getall', (req, res) => {
    res.send('respond from getall');
});

//update
app.get('/update', (req, res) => {
    res.send('respond from update');
});

//starting the express server
app.listen(port, () => {
    console.log('server started');
});