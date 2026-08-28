import type { OneTimePriceRequest } from "packages/models/src/oneTimePriceRequest.generated.ts";
import type { FixedPriceRequest } from "packages/models/src/fixedPriceRequest.generated.ts";
import type { LinearPriceRequest } from "packages/models/src/linearPriceRequest.generated.ts";
import type { PackagePriceRequest } from "packages/models/src/packagePriceRequest.generated.ts";
import type { SeatBasedPriceRequest } from "packages/models/src/seatBasedPriceRequest.generated.ts";
import type { GraduatedPriceRequest } from "packages/models/src/graduatedPriceRequest.generated.ts";
import type { VolumePriceRequest } from "packages/models/src/volumePriceRequest.generated.ts";
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
import { apiFetch } from "@/lib/api/client";

export type UseCreateApiPricesArgs = {
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
  body:
    | OneTimePriceRequest
    | FixedPriceRequest
    | LinearPriceRequest
    | PackagePriceRequest
    | SeatBasedPriceRequest
    | GraduatedPriceRequest
    | VolumePriceRequest;
};

export const useCreateApiPricesResponse = z.union([
  oneTimePriceResponse,
  fixedPriceResponse,
  linearPriceResponse,
  packagePriceResponse,
  seatBasedPriceResponse,
  graduatedPriceResponse,
  volumePriceResponse,
]);

export type UseCreateApiPricesResponse =
  | OneTimePriceResponse
  | FixedPriceResponse
  | LinearPriceResponse
  | PackagePriceResponse
  | SeatBasedPriceResponse
  | GraduatedPriceResponse
  | VolumePriceResponse;

export type CreateApiPricesBody =
  | OneTimePriceRequest
  | FixedPriceRequest
  | LinearPriceRequest
  | PackagePriceRequest
  | SeatBasedPriceRequest
  | GraduatedPriceRequest
  | VolumePriceRequest;

export const useCreateApiPrices = (
  options: UseMutationOptions<
    UseCreateApiPricesResponse,
    Error,
    UseCreateApiPricesArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseCreateApiPricesArgs) =>
      apiFetch("/prices", useCreateApiPricesResponse, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(args.body),
      }),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Prices"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
