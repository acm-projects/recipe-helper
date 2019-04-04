//A test for using express server
//NOTE: Use Ctrl+C to stop and exit your server (or else restart your computer if you mess up -_-)

const serveIndex = require('serve-index');
const express = require('express');
const app = express();

//include the express.static and serveIndex middlewares 
//and tell them the path to access from and the name 
//of our folder "public"  
app.use('/', express.static('public'));
app.use('/', serveIndex('public')); //this should list our files in the folder 'public'

app.use((req, res, next) => {
    console.log('Time: ', Date.now()); //this should print the current time in the console
    next();
});

app.get('/', (req, res) => {
    res.send('An alligator approaches!'); 
});

app.listen(3000, () => console.log('Gator app listening on port 3000!'));