import { z } from "zod";

export type AssetFormat =
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

export const assetFormat = z.enum([
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
