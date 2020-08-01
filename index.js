//access express
const express = require('express');
const compression = require('compression');
var helmet = require('helmet');

app.use(helmet());
app.use(compression());
//invoke express
let app = express();

//start listening
app.listen(5500, () => console.log('listening at 5500'));

//access index.html
app.use(express.static("public"));
// app.use(express.json({limit: '1mb'}))

//define route using callback handler
app.post('/api', (request, response) => {
  console.log(request);
})