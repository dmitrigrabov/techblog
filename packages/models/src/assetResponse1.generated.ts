import { type AssetType1, assetType1 } from "packages/models/src/assetType1.generated.ts";
import { type AssetFormat1, assetFormat1 } from "packages/models/src/assetFormat1.generated.ts";
import { z } from "zod";

export type AssetResponse1 = {
  id: string;
  createdBy: string;
  type: AssetType1;
  format: AssetFormat1;
  fileName: string;
  fileSizeBytes: number;
  url: string;
  createdAt: string;
};

export const assetResponse1 = z.object({
  id: z.string(),
  createdBy: z.string(),
  type: assetType1,
  format: assetFormat1,
  fileName: z.string(),
  fileSizeBytes: z.number().int(),
  url: z.string(),
  createdAt: z.string(),
});
