import { type Address1, address1 } from "packages/models/src/address1.generated.ts";
import { z } from "zod";

export type IntermediaryBank = {
  bankName: string;
  bankAddress: Address1;
  swiftCode: string;
  routingNumber: string;
};

export const intermediaryBank = z.object({
  bankName: z.string(),
  bankAddress: address1,
  swiftCode: z.string(),
  routingNumber: z.string(),
});
