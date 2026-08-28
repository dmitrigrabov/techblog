import { z } from "zod";

export type DueDateStatus = "SET" | "PENDING";

export const dueDateStatus = z.enum(["SET", "PENDING"]);
