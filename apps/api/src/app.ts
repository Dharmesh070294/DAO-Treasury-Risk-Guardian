import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import treasuryRoutes from "./routes/treasury.routes";
import authRoutes from "./routes/auth.routes";
import auditRoutes from "./routes/audit.routes";
import alertRoutes from "./routes/alert.routes";
import { errorHandler } from "./middlewares/error.middleware";

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (_req, res) => {
  res.status(200).send("DAO Treasury Risk Guardian API");
});

app.get("/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "API is running",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/treasuries", treasuryRoutes);
app.use("/api/audit-logs", auditRoutes);
app.use("/api/alerts", alertRoutes);

app.use(errorHandler);

export default app;
