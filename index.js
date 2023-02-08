const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/flip-coin", (req, res) => {
  const coin = Math.random() > 0.5 ? "heads" : "tails";
  res.send(coin);
});

console.log("Hello World!");

app.get("/flip-coins", (req, res) => {
  const times = req.query.times;
  if (times && times > 0) {
    let heads = 0;
    let tails = 0;
    for (let i = 0; i < times; i++) {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        heads++;
      } else {
        tails++;
      }
    }
    res.json({ heads, tails });
  } else {
    res.send("you need to send times as a query parameter");
  }
});

app.listen(5000, () => {
  console.log(`started server on port 5000`);
});
