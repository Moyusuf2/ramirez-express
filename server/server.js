const express = require('express')

const app = express();

//express.static uses string as argument
// new file and make available to who wants them.
app.use(express.static('./server/public'));

app.listen(3000,function(){
    console.log('We\'re live!');
});
console.log('In server.js');
