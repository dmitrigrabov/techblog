import {
  oneTimePriceResponse,
  type OneTimePriceResponse,
} from "packages/models/src/oneTimePriceResponse.generated.ts";
import {
  fixedPriceResponse,
  type FixedPriceResponse,
} from "packages/models/src/fixedPriceResponse.generated.ts";
import {
  linearPriceResponse,
  type LinearPriceResponse,
} from "packages/models/src/linearPriceResponse.generated.ts";
import {
  packagePriceResponse,
  type PackagePriceResponse,
} from "packages/models/src/packagePriceResponse.generated.ts";
import {
  seatBasedPriceResponse,
  type SeatBasedPriceResponse,
} from "packages/models/src/seatBasedPriceResponse.generated.ts";
import {
  graduatedPriceResponse,
  type GraduatedPriceResponse,
} from "packages/models/src/graduatedPriceResponse.generated.ts";
import {
  volumePriceResponse,
  type VolumePriceResponse,
} from "packages/models/src/volumePriceResponse.generated.ts";
import { z } from "zod";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseDeleteApiPricesIdArgs = {
  id: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
};

export const useDeleteApiPricesIdResponse = z.union([
  oneTimePriceResponse,
  fixedPriceResponse,
  linearPriceResponse,
  packagePriceResponse,
  seatBasedPriceResponse,
  graduatedPriceResponse,
  volumePriceResponse,
]);

export type UseDeleteApiPricesIdResponse =
  | OneTimePriceResponse
  | FixedPriceResponse
  | LinearPriceResponse
  | PackagePriceResponse
  | SeatBasedPriceResponse
  | GraduatedPriceResponse
  | VolumePriceResponse;

export type DeleteApiPricesIdBody = void;

export const useDeleteApiPricesId = (
  options: UseMutationOptions<
    UseDeleteApiPricesIdResponse,
    Error,
    UseDeleteApiPricesIdArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseDeleteApiPricesIdArgs) =>
      apiFetch(buildUrl("/prices/{id}", { id: args.id }), useDeleteApiPricesIdResponse, {
        method: "DELETE",
      }),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Prices"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
