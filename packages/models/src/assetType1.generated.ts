import { z } from "zod";

export type AssetType1 = "IMAGE" | "DOCUMENT" | "BINARY";

export const assetType1 = z.enum(["IMAGE", "DOCUMENT", "BINARY"]);
