import { z } from "zod";

export type AssetFormat1 =
  | "JPEG"
  | "JPG"
  | "PNG"
  | "PDF"
  | "CSV"
  | "TXT"
  | "RTF"
  | "MD"
  | "XLS"
  | "XLSX"
  | "XLSM"
  | "DOC"
  | "DOCX"
  | "ZIP"
  | "ODT"
  | "ODS";

export const assetFormat1 = z.enum([
  "JPEG",
  "JPG",
  "PNG",
  "PDF",
  "CSV",
  "TXT",
  "RTF",
  "MD",
  "XLS",
  "XLSX",
  "XLSM",
  "DOC",
  "DOCX",
  "ZIP",
  "ODT",
  "ODS",
]);
