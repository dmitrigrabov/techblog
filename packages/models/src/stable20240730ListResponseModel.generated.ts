import {
  type Stable20240730ProductResponse,
  stable20240730ProductResponse,
} from "packages/models/src/stable20240730ProductResponse.generated.ts";
import {
  type PaginationMeta7,
  paginationMeta7,
} from "packages/models/src/paginationMeta7.generated.ts";
import { z } from "zod";

export type Stable20240730ListResponseModel = {
  items: Array<Stable20240730ProductResponse>;
  pagination: PaginationMeta7;
};

export const stable20240730ListResponseModel = z.object({
  items: z.array(stable20240730ProductResponse),
  pagination: paginationMeta7,
});
