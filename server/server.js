const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const cors = require('cors');
const logger = require('morgan');
const knex = require('./db/knex');

//routes
const index = require('./routes/indexRoutes');
const loanRoutes = require('./routes/loanRoutes');

//authentication
const jwt = require("jsonwebtoken");
const jwtSecret = "sandyseashellsbytheseashore";
const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', index);

// paths put after this line will run authentication check
app.use(jwtUserAuth);
app.use('/loans', loanRoutes);

app.listen(port, function() {
  console.log("listening on port: ", port);
})

function jwtUserAuth(req, res, next){
   //send as a query parameter
   let token = req.body.token || req.query.token || req.headers['access-token']|| req.params.token;
   // decode token
   if (token) {
       // verifies secret and checks exp
       jwt.verify(token, jwtSecret, function(err, decoded) {
           if (err) {
               return res.json({ success: false, message: 'Failed to authenticate token.' });
           } else {
               // if everything is good, save to request for use in other routes
               req.decoded = decoded;
               console.log("request decoded" + req.decoded);
               next();
           }
       });

   } else {
       return res.status(403).send({
           success: false,
           message: 'No token provided.'
       });
   }
}
