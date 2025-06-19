import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "hello from backend api" });
});

app.listen(3002, () => {
  console.log("server is listening on port 3002");
});
