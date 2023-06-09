let express = require('express');
let router = express.Router();
let {getTransactions, addTransaction, deleteTransaction} = require('../controllers/transactionsctrl')

router
    .route('/')
    .get(getTransactions)
    .post(addTransaction)

router
    .route('/:id')
    .delete(deleteTransaction)


module.exports = router;