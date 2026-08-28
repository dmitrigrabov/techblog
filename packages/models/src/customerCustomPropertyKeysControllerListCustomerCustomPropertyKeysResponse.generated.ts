import { z } from "zod";

export type CustomerCustomPropertyKeysControllerListCustomerCustomPropertyKeysResponse = {
  items: Array<string>;
};

export const customerCustomPropertyKeysControllerListCustomerCustomPropertyKeysResponse = z.object({
  items: z.array(z.string()),
});
