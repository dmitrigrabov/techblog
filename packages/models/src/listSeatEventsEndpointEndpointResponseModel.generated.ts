import { type SeatEvent, seatEvent } from "packages/models/src/seatEvent.generated.ts";
import {
  type PaginationMeta2,
  paginationMeta2,
} from "packages/models/src/paginationMeta2.generated.ts";
import { z } from "zod";

export type ListSeatEventsEndpointEndpointResponseModel = {
  items: Array<SeatEvent>;
  pagination: PaginationMeta2;
};

export const listSeatEventsEndpointEndpointResponseModel = z.object({
  items: z.array(seatEvent),
  pagination: paginationMeta2,
});
