const Transactions = require("../models/Transactions");
const Transaction = require("../models/Transactions");
// @desc get all transactions
// @route GET /api/v1/transactions
// @access public

exports.getTransactions = async (req,res,send) => {
    try {
        let transactions = await Transaction.find();
        return res.status(200).json({
            success: true,
            count:transactions.length,
            data:transactions
        });
    }
    catch(err) {
        return res.status(500).json({
            success: false,
            error:"Server Error"
        });
    }
}

// @desc add transaction
// @route POST /api/v1/transactions
// @access public
exports.addTransaction = async (req,res,send) => {
    try {
        let {text, amount} = req.body;
        let transaction = await Transaction.create(req.body);
        return res.status(201).json({
            success: true,
            data: transaction
        });
    } catch (err) {
        if (err.name==="ValidationError") {
            let messages = Object.values(err.errors).map(value => value.message);
            return res.status(400).json({
                success:false,
                error:messages
            });
        }
        else {
            return res.status(500).json({
                success: false,
                error:"Server Error"
            });
        }
    }
}

// @desc delete transaction
// @route DELETE /api/v1/transactions
// @access public
exports.deleteTransaction = async (req,res,send) => {
    try {
        let transaction = await Transactions.findById(req.params.id);
        if(!transaction) {
            return res.status(404).json({
                success:false,
                error:"No Transaction found"
            });
        }
        await transaction.deleteOne()
        return res.status(200).json({
            success:true,
            data:{}
        });
    }
    catch(err) {
        return res.status(500).json({
            success: false,
            error:"Server Error"
        });
    }
}






