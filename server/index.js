import express, { json } from "express";
import { config } from "dotenv";
import cors from "cors";
import authRoutes from "./routes/AuthRoutes.js";
import cookieParser from "cookie-parser";
import { servicesRoutes } from "./routes/ServicesRoutes.js";

config()

const app = express()
const port = process.env.PORT;

app.use(cors({origin:[process.env.PUBLIC_URL], methods:["GET", "POST", "PUT", "PATCH", "DELETE"], credentials:true,}))

app.use("/uploads/profiles", express.static("uploads/profiles"));

app.use(cookieParser());
app.use(json());

app.use("/api/auth", authRoutes)
app.use("/api/services", servicesRoutes)

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})