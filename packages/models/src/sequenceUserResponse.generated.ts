import { type Role, role } from "packages/models/src/role.generated.ts";
import { z } from "zod";

export type SequenceUserResponse = {
  id: string;
  email: string;
  sequenceAccountIds: Array<string>;
  state: string;
  roles: Array<Role>;
};

export const sequenceUserResponse = z.object({
  id: z.string(),
  email: z.string(),
  sequenceAccountIds: z.array(z.string()),
  state: z.string(),
  roles: z.array(role),
});
