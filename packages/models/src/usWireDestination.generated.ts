import { type Address, address } from "packages/models/src/address.generated.ts";
import { z } from "zod";

export type UsWireDestination = {
  accountNumber: string;
  accountName: string;
  bankName: string;
  bankRoutingNumber: string;
  swiftCode: string;
  bankAddress: Address;
};

export const usWireDestination = z.object({
  accountNumber: z.string(),
  accountName: z.string(),
  bankName: z.string(),
  bankRoutingNumber: z.string(),
  swiftCode: z.string(),
  bankAddress: address,
});
