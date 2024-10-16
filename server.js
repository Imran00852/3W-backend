import express from "express";
import { config } from "dotenv";
import { connectDB } from "./utils/connectDB.js";
import signUpRouter from "./routes/user.js";
import adminRouter from "./routes/admin.js";
import cors from "cors";
const app = express();

if (process.env.NODE_ENV != "production") {
  config();
}
//cors
app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
}))


//connect db
connectDB();

//middleware to read form data
app.use(express.json());

//routes
app.use("/api", signUpRouter);
app.use("/api", adminRouter);

//home route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Home Route",
  });
});

app.listen(8080, () => {
  console.log("Server is running on 8080");
});
