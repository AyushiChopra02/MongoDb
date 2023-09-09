const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp' , {useNewUrlParser: true , useUnifiedTopology: true});

.then(() => {
    console.log("connection open")
})
.catch(err => {
    console.log("oh no error!!!")
})