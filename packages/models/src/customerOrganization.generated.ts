import {
  type CustomerIdWithName,
  customerIdWithName,
} from "packages/models/src/customerIdWithName.generated.ts";
import { z } from "zod";

export type CustomerOrganization = {
  id: string;
  owner: CustomerIdWithName;
  members: Array<CustomerIdWithName>;
};

export const customerOrganization = z.object({
  id: z.string(),
  owner: customerIdWithName,
  members: z.array(customerIdWithName),
});
