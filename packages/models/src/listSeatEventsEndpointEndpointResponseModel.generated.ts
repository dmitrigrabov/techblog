import { type SeatEvent, seatEvent } from "packages/models/src/seatEvent.generated.ts";
import {
  type PaginationMeta1,
  paginationMeta1,
} from "packages/models/src/paginationMeta1.generated.ts";
import { z } from "zod";

export type ListSeatEventsEndpointEndpointResponseModel = {
  items: Array<SeatEvent>;
  pagination: PaginationMeta1;
};

export const listSeatEventsEndpointEndpointResponseModel = z.object({
  items: z.array(seatEvent),
  pagination: paginationMeta1,
});
