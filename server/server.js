import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import matchRoutes from "./routes/match.js";
import userRouter from "./routes/user.js";
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect(
  "mongodb+srv://praveen:praveen123@cluster0.ptqbo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to mongodb server!");
  }
);

app.get("/", (req, res) => {
  res.send("go to / match");
});
app.use("/match", matchRoutes);
app.use("/user", userRouter);

app.listen(5000, () => {
  console.log("server is running in port 5000");
});
