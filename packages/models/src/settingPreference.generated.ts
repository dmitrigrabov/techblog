import { z } from "zod";

export type SettingPreference = "ENABLED" | "DISABLED";

export const settingPreference = z.enum(["ENABLED", "DISABLED"]);
