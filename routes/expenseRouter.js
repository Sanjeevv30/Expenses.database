
const express = require('express');
const router = express.Router();
const expenseController = require('../controller/expenseController');

router.post('/add-expense', expenseController.createExpense);

router.get('/get-expense', expenseController.getAllExpenses);

router.delete('/delete/:Id', expenseController.deleteExpense);

router.put('/edit/:Id', expenseController.updateExpense);

module.exports = router;
