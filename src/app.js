// To set all express-related code
import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/tasks.routes.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(morgan("dev")); // Dev config is just to see a message on console
app.use(express.json()); // Express can now read JSON!
app.use(cookieParser()); // Makes cookies readable as a JSON

app.use("/api", authRoutes);
app.use("/api", taskRoutes);

export default app;
