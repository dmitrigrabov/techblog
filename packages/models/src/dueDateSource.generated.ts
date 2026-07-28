import { z } from "zod";

export type DueDateSource = "MANUAL" | "CALCULATED";

export const dueDateSource = z.enum(["MANUAL", "CALCULATED"]);
