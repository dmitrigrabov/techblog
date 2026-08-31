import { type Address1, address1 } from "packages/models/src/address1.generated.ts";
import {
  type IntermediaryBank,
  intermediaryBank,
} from "packages/models/src/intermediaryBank.generated.ts";
import { z } from "zod";

export type CanadianInternationalDestination = {
  legalName: string;
  accountNumber: string;
  transitNumber: string;
  bankName: string;
  bankAddress: Address1;
  institutionNumber: string;
  swiftCode: string;
  intermediaryBank?: IntermediaryBank | undefined;
};

export const canadianInternationalDestination = z.object({
  legalName: z.string(),
  accountNumber: z.string(),
  transitNumber: z.string(),
  bankName: z.string(),
  bankAddress: address1,
  institutionNumber: z.string(),
  swiftCode: z.string(),
  intermediaryBank: intermediaryBank.optional(),
});
