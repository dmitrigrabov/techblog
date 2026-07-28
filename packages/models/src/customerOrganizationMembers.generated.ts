import { z } from "zod";

export type CustomerOrganizationMembers = { customerIds: Array<string> };

export const customerOrganizationMembers = z.object({ customerIds: z.array(z.string()) });
