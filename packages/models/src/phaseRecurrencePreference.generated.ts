import { z } from "zod";

export type PhaseRecurrencePreference = "CONTINUE_FROM_PREVIOUS_PHASE" | "RESET";

export const phaseRecurrencePreference = z.enum(["CONTINUE_FROM_PREVIOUS_PHASE", "RESET"]);
