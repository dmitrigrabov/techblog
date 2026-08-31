import { type Address1, address1 } from "packages/models/src/address1.generated.ts";
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
  type CanadianBankAccountDestination,
  canadianBankAccountDestination,
} from "packages/models/src/canadianBankAccountDestination.generated.ts";
import {
  type CanadianInternationalDestination,
  canadianInternationalDestination,
} from "packages/models/src/canadianInternationalDestination.generated.ts";
import {
  type AustralianBankAccountDestination,
  australianBankAccountDestination,
} from "packages/models/src/australianBankAccountDestination.generated.ts";
import {
  type SwedishBankgiroDestination,
  swedishBankgiroDestination,
} from "packages/models/src/swedishBankgiroDestination.generated.ts";
import { type KeyValuePair, keyValuePair } from "packages/models/src/keyValuePair.generated.ts";
import { z } from "zod";

export type InvoiceMerchantDetails = {
  address: Address1;
  phoneNumber?: string | undefined;
  email: string;
  taxId?: string | undefined;
  iban?: string | undefined;
  ukAccountDetails?: SortCodeAccountNumber | undefined;
  usAchDetails?: UsAchDestination | undefined;
  usWireDetails?: UsWireDestination | undefined;
  caBankAccountDetails?: CanadianBankAccountDestination | undefined;
  canadianInternationalDestination?: CanadianInternationalDestination | undefined;
  australianDestination?: AustralianBankAccountDestination | undefined;
  swedishBankgiroDestination?: SwedishBankgiroDestination | undefined;
  logoUrl?: string | undefined;
  legalCompanyName: string;
  primaryColour?: string | undefined;
  customFields: Array<KeyValuePair>;
  includeBeneficiaryAddressInPaymentDetails: boolean;
};

export const invoiceMerchantDetails = z.object({
  address: address1,
  phoneNumber: z.string().optional(),
  email: z.string(),
  taxId: z.string().optional(),
  iban: z.string().optional(),
  ukAccountDetails: sortCodeAccountNumber.optional(),
  usAchDetails: usAchDestination.optional(),
  usWireDetails: usWireDestination.optional(),
  caBankAccountDetails: canadianBankAccountDestination.optional(),
  canadianInternationalDestination: canadianInternationalDestination.optional(),
  australianDestination: australianBankAccountDestination.optional(),
  swedishBankgiroDestination: swedishBankgiroDestination.optional(),
  logoUrl: z.string().optional(),
  legalCompanyName: z.string(),
  primaryColour: z.string().optional(),
  customFields: z.array(keyValuePair),
  includeBeneficiaryAddressInPaymentDetails: z.boolean(),
});
