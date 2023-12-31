import express from "express";
import cors from "cors";
import { userRouter } from "./routes/user.router";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(express.json());
app.use(cors());

app.use("/", userRouter.router);
app.use("/api", userRouter.router);

app.use("/api", userRouter.router);

app.use("/api", userRouter.router);
export default app;
