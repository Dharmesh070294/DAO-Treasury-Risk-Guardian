import { Router } from "express";
import { getAlerts, createTestAlert } from "../controllers/alert.controller";
import { requireAuth } from "../middlewares/auth.middleware";
import { requireRole } from "../middlewares/role.middleware";
import { validateBody } from "../middlewares/validate.middleware";
import { createTestAlertSchema } from "../schemas/alert.schema";

const router = Router();

router.get("/", requireAuth, requireRole("owner", "analyst"), getAlerts);
router.post(
  "/test",
  requireAuth,
  requireRole("owner"),
  validateBody(createTestAlertSchema),
  createTestAlert
);

export default router;
