import express from "express";
import { rootRouter } from "./route/route";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use(rootRouter);

app.get("/", (req, res) => {
  res.json({ msg: "hello from backend api of shrinky" });
});

// catch all route
app.use((req, res, next) => {
  res.json({ msg: "route not found" });
});

app.listen(3002, () => {
  console.log("server is listening on port 3002");
});
