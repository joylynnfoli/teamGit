let express = require('express');
let app = express();
let sequelize = require('./db')

// sequelize.sync()

app.use('/test', function(req, res){
    res.send("This is a message fromthe test endpoint on the server!")
})

app.listen(3000, function(){
    console.log('App is listening on port 3000');
})