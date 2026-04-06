import { Router } from "express";
import { getAuditLogs } from "../controllers/audit.controller";
import { requireAuth } from "../middlewares/auth.middleware";
import { requireRole } from "../middlewares/role.middleware";

const router = Router();

router.get("/", requireAuth, requireRole("owner"), getAuditLogs);

export default router;
