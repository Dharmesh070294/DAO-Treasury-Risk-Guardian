import { Response, NextFunction } from "express";
import { addTreasury, fetchTreasuries } from "../services/treasury.service";
import { logAuditEvent } from "../services/audit.service";
import { AuthenticatedRequest } from "../middlewares/auth.middleware";

export async function getTreasuries(
  _req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const treasuries = await fetchTreasuries();

    res.status(200).json({
      success: true,
      data: treasuries,
      message: "Treasuries fetched successfully",
    });
  } catch (error) {
    next(error);
  }
}

export async function createTreasury(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { name, organizationName, chainId, walletAddresses, telegramChatId } = req.body;

    const treasury = await addTreasury({
      name,
      organizationName,
      chainId,
      walletAddresses,
      telegramChatId,
    });

    await logAuditEvent({
      action: "TREASURY_CREATED",
      actorUserId: req.user?.userId,
      actorEmail: req.user?.email,
      resourceType: "treasury",
      resourceId: treasury.id,
      metadata: {
        name: treasury.name,
        organizationName: treasury.organizationName,
        chainId: treasury.chainId,
        walletCount: treasury.walletAddresses.length,
      },
    });

    res.status(201).json({
      success: true,
      data: treasury,
      message: "Treasury created successfully",
    });
  } catch (error) {
    next(error);
  }
}
