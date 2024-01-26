import mongoose from "mongoose";
import { Config } from "../config.js";

async function connect() {
    const config = Config.getInstance();
  const dbUri = config.get("MONGO_URI");

  try {
    await mongoose.connect(dbUri);
    console.log("Connected to db");
  } catch (error) {
    console.log("Error connecting to db", error);
    process.exit(1);
  }
}

export default connect;