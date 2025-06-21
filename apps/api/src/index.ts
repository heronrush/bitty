import express from "express";
import { rootRouter } from "./route/route";

const app = express();

app.use(express.json());

app.use(rootRouter);

app.get("/", (req, res) => {
  res.json({ msg: "hello from backend api" });
});

// catch all route
app.use((req, res, next) => {
  res.json({ msg: "route not found" });
});

app.listen(3002, () => {
  console.log("server is listening on port 3002");
});
