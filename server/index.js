// ------------it stablice connect with database----------
require("dotenv").config();
let express = require("express");
let cors = require('cors');
let app = express();
let router = require('./router/auth_router');
let routerContact = require('./router/auth_contact')
let connectDB = require('./utils/db');
const errorMiddleware = require("./middlewarse/error_middleware");

let corsOption={
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    Credential: true
}

app.use(cors(corsOption));
// -----------for get json data---------
app.use(express.json());



// -----------parent api----------
app.use('/api/ben', router);
// ------------contact------------
app.use('/api/form', routerContact);



// error middleware--------
app.use(errorMiddleware)

connectDB().then(()=>{
  // ---------------server -------------
  app.listen(20202, ()=>{
     console.log("server is runing at port => 20202")
  })
})
