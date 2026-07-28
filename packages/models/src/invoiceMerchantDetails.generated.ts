import { type Address, address } from "packages/models/src/address.generated.ts";
import {
  type SortCodeAccountNumber,
  sortCodeAccountNumber,
} from "packages/models/src/sortCodeAccountNumber.generated.ts";
import {
  type UsAchDestination,
  usAchDestination,
} from "packages/models/src/usAchDestination.generated.ts";
import {
  type UsWireDestination,
  usWireDestination,
} from "packages/models/src/usWireDestination.generated.ts";
import {
  type SwedishBankgiroDestination,
  swedishBankgiroDestination,
} from "packages/models/src/swedishBankgiroDestination.generated.ts";
import { z } from "zod";

export type InvoiceMerchantDetails = {
  address: Address;
  phoneNumber?: string | undefined;
  email: string;
  taxId?: string | undefined;
  iban?: string | undefined;
  ukAccountDetails?: SortCodeAccountNumber | undefined;
  usAchDetails?: UsAchDestination | undefined;
  usWireDetails?: UsWireDestination | undefined;
  swedishBankgiroDestination?: SwedishBankgiroDestination | undefined;
  legalCompanyName: string;
  customFields: Array<unknown>;
  includeBeneficiaryAddressInPaymentDetails: boolean;
};

export const invoiceMerchantDetails = z.object({
  address: address,
  phoneNumber: z.string().optional(),
  email: z.string(),
  taxId: z.string().optional(),
  iban: z.string().optional(),
  ukAccountDetails: sortCodeAccountNumber.optional(),
  usAchDetails: usAchDestination.optional(),
  usWireDetails: usWireDestination.optional(),
  swedishBankgiroDestination: swedishBankgiroDestination.optional(),
  legalCompanyName: z.string(),
  customFields: z.array(z.unknown()),
  includeBeneficiaryAddressInPaymentDetails: z.boolean(),
});
