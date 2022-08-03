const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Server is up and running. ヽ(*´∀`)ﾉﾟ");
});

app.get("/getData", function (req, res) {
  const number = req.query.number;
  let result;

  if (number == null) {
    result = "Lack of Parameter.";
  } else if (Number.isInteger(Number(number)) && Number(number) > 0) {
    result = ((1 + Number(number)) * Number(number)) / 2;
  } else {
    result = "Wrong Parameters.";
  }

  res.send(`${result}`);
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
