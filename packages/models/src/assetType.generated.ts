import { z } from "zod";

export type AssetType = "IMAGE" | "DOCUMENT" | "BINARY";

export const assetType = z.enum(["IMAGE", "DOCUMENT", "BINARY"]);
