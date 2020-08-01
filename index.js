  /**
 *  external modules
 */
const express = require('express');
const path = require('path')


  /**
 *  app variables
 */
const app = express();
const port = process.env.PORT || "3000"

  /**
 *  app configuration
 */
app.use(express.static(path.join(__dirname, "public")));

app.post('/api', function(request, response){
  console.log(request);
})

  /**
 *  server activation
 */

app.listen(port, function(){
  console.log(`listening at http://localhost:${port}`)
});