const express = require("express");
//const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");

//middleware

//app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

//deliver static content
//app.use(express.static(__dirname + '/public'));

//routes

//Root Route
app.get('/', (req, res) => {

  res.send('this is working');

})

app.use("/authentication", require("./routes/jwtAuth"));

app.use("/dashboard", require("./routes/dashboard"));

app.listen(5000, () => {
  console.log(`Server is starting on port 5000`);
});
