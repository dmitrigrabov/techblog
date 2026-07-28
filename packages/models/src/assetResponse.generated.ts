import { type AssetType, assetType } from "packages/models/src/assetType.generated.ts";
import { type AssetFormat, assetFormat } from "packages/models/src/assetFormat.generated.ts";
import { z } from "zod";

export type AssetResponse = {
  id: string;
  createdBy: string;
  type: AssetType;
  format: AssetFormat;
  fileName: string;
  fileSizeBytes: number;
  url: string;
  createdAt: string;
};

export const assetResponse = z.object({
  id: z.string(),
  createdBy: z.string(),
  type: assetType,
  format: assetFormat,
  fileName: z.string(),
  fileSizeBytes: z.number().int(),
  url: z.string(),
  createdAt: z.string(),
});
