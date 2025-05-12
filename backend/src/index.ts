import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import orderRoutes from "./routes/orderRoutes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/orders", orderRoutes);

app.listen(4000, () => console.log("Backend running on port 4000"));