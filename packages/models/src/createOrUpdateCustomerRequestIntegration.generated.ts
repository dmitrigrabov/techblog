import { z } from "zod";

export type CreateOrUpdateCustomerRequestIntegration = "Xero";

export const createOrUpdateCustomerRequestIntegration = z.literal("Xero");
