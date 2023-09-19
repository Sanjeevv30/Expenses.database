const express = require("express");
const app = express();
const cors = require("cors");
const Expense = require("./model/expense");

const sequelize = require("./util/database");
const bodyParser = require("body-parser");
const expenseRouter = require("./routes/expenseRouter");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ extended: false }));

app.use("/expense", expenseRouter);

Expense.sync();
sequelize.sync().then((result) => {
  app.listen(8000, () => {
    console.log("Server is running on port 8000");
  });
});
