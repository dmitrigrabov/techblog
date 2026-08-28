import {
  type ProductListTaxRegistrationResponseModel,
  productListTaxRegistrationResponseModel,
} from "packages/models/src/productListTaxRegistrationResponseModel.generated.ts";
import {
  type PaginationMeta,
  paginationMeta,
} from "packages/models/src/paginationMeta.generated.ts";
import { z } from "zod";

export type ProductListTaxRegistrationPaginatedResponseModel = {
  items: Array<ProductListTaxRegistrationResponseModel>;
  pagination: PaginationMeta;
};

export const productListTaxRegistrationPaginatedResponseModel = z.object({
  items: z.array(productListTaxRegistrationResponseModel),
  pagination: paginationMeta,
});
