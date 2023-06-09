let express = require("express")
let dotenv = require("dotenv")
let colors = require("colors")
let morgan = require("morgan")
let connectoDB = require('./config/db');

dotenv.config({path : "./config/config.env"});
connectoDB();

let transactions = require('./routes/transactions')

let app = express();
app.use(express.json());
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
app.use('/api/v1/transactions',transactions);

let PORT = process.env.PORT || 5000;
app.listen(PORT,console.log(`Server Running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold));
