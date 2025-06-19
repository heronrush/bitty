import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "hello world api route" });
});

app.listen(3005, () => {
  console.log("server is listening on port 3005");
});
