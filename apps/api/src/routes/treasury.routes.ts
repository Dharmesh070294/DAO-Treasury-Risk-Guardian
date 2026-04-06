import { Router } from "express";
import { createTreasury, getTreasuries } from "../controllers/treasury.controller";
import { validateBody } from "../middlewares/validate.middleware";
import { createTreasurySchema } from "../schemas/treasury.schema";
import { requireAuth } from "../middlewares/auth.middleware";
import { requireRole } from "../middlewares/role.middleware";

const router = Router();

router.get("/", requireAuth, getTreasuries);
router.post("/", requireAuth, requireRole("owner"), validateBody(createTreasurySchema), createTreasury);

export default router;
