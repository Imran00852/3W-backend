import mongoose from "mongoose";
import { config } from "dotenv";
if (process.env.NODE_ENV != "production") {
  config();
}
export const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URL, {
    dbName: "3W",
  }).then((c) => {
    console.log(c.connection.host);
  })
  .catch((err) => {
    console.log(err);
  });
};

  
