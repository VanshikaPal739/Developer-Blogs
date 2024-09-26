const mongoose = require('mongoose');

// const url='mongodb+srv://vanshikapal44:Vanshika12@cluster0.jbemkc8.mongodb.net/mydevblog?retryWrites=true&w=majority&appName=Cluster0'
const url='mongodb://localhost:27017/developerblog'

// asynchronous function - Promise object
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
    
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;