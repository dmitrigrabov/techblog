import {
  type ListTaxRegistrationEndpointProductListTaxRegistrationResponseModel,
  listTaxRegistrationEndpointProductListTaxRegistrationResponseModel,
} from "packages/models/src/listTaxRegistrationEndpointProductListTaxRegistrationResponseModel.generated.ts";
import {
  type PaginationMeta6,
  paginationMeta6,
} from "packages/models/src/paginationMeta6.generated.ts";
import { z } from "zod";

export type ListTaxRegistrationEndpointProductListTaxRegistrationPaginatedResponseModel = {
  items: Array<ListTaxRegistrationEndpointProductListTaxRegistrationResponseModel>;
  pagination: PaginationMeta6;
};

export const listTaxRegistrationEndpointProductListTaxRegistrationPaginatedResponseModel = z.object(
  {
    items: z.array(listTaxRegistrationEndpointProductListTaxRegistrationResponseModel),
    pagination: paginationMeta6,
  },
);
