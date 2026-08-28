import { z } from "zod";

export type CustomerOrganizationRequest = { ownerId: string; memberIds: Array<string> };

export const customerOrganizationRequest = z.object({
  ownerId: z.string(),
  memberIds: z.array(z.string()),
});
