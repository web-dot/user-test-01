  /**
 *  external modules
 */
const express = require('express');
const path = require('path');
const Datastore = require('nedb')


  /**
 *  app variables
 */
const app = express();
const port = process.env.PORT || "3000"

  /**
 *  app configuration
 */
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json({ limit: '1mb' }));

const database = new Datastore('database.db');
database.loadDatabase();


app.post('/api', function(request, response){
  console.log(request.body);
  
  const data = request.body;

  database.insert(data);
  
  response.json({
    status: "success",
    choice: data
  })
})

  /**
 *  server activation
 */

app.listen(port, function(){
  console.log(`listening at http://localhost:${port}`)
});