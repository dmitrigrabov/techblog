import type { OneTimeListPriceRequest } from "packages/models/src/oneTimeListPriceRequest.generated.ts";
import type { FixedListPriceRequest } from "packages/models/src/fixedListPriceRequest.generated.ts";
import type { LinearListPriceRequest } from "packages/models/src/linearListPriceRequest.generated.ts";
import type { PackageListPriceRequest } from "packages/models/src/packageListPriceRequest.generated.ts";
import type { SeatBasedListPriceRequest } from "packages/models/src/seatBasedListPriceRequest.generated.ts";
import type { GraduatedListPriceRequest } from "packages/models/src/graduatedListPriceRequest.generated.ts";
import type { VolumeListPriceRequest } from "packages/models/src/volumeListPriceRequest.generated.ts";
import {
  oneTimeListPriceResponse,
  type OneTimeListPriceResponse,
} from "packages/models/src/oneTimeListPriceResponse.generated.ts";
import {
  fixedListPriceResponse,
  type FixedListPriceResponse,
} from "packages/models/src/fixedListPriceResponse.generated.ts";
import {
  linearListPriceResponse,
  type LinearListPriceResponse,
} from "packages/models/src/linearListPriceResponse.generated.ts";
import {
  packageListPriceResponse,
  type PackageListPriceResponse,
} from "packages/models/src/packageListPriceResponse.generated.ts";
import {
  seatBasedListPriceResponse,
  type SeatBasedListPriceResponse,
} from "packages/models/src/seatBasedListPriceResponse.generated.ts";
import {
  graduatedListPriceResponse,
  type GraduatedListPriceResponse,
} from "packages/models/src/graduatedListPriceResponse.generated.ts";
import {
  volumeListPriceResponse,
  type VolumeListPriceResponse,
} from "packages/models/src/volumeListPriceResponse.generated.ts";
import { z } from "zod";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseUpdateApiListPricesIdArgs = {
  id: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
  body:
    | OneTimeListPriceRequest
    | FixedListPriceRequest
    | LinearListPriceRequest
    | PackageListPriceRequest
    | SeatBasedListPriceRequest
    | GraduatedListPriceRequest
    | VolumeListPriceRequest;
};

export const useUpdateApiListPricesIdResponse = z.union([
  oneTimeListPriceResponse,
  fixedListPriceResponse,
  linearListPriceResponse,
  packageListPriceResponse,
  seatBasedListPriceResponse,
  graduatedListPriceResponse,
  volumeListPriceResponse,
]);

export type UseUpdateApiListPricesIdResponse =
  | OneTimeListPriceResponse
  | FixedListPriceResponse
  | LinearListPriceResponse
  | PackageListPriceResponse
  | SeatBasedListPriceResponse
  | GraduatedListPriceResponse
  | VolumeListPriceResponse;

export type UpdateApiListPricesIdBody =
  | OneTimeListPriceRequest
  | FixedListPriceRequest
  | LinearListPriceRequest
  | PackageListPriceRequest
  | SeatBasedListPriceRequest
  | GraduatedListPriceRequest
  | VolumeListPriceRequest;

export const useUpdateApiListPricesId = (
  options: UseMutationOptions<
    UseUpdateApiListPricesIdResponse,
    Error,
    UseUpdateApiListPricesIdArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseUpdateApiListPricesIdArgs) =>
      apiFetch(buildUrl("/list-prices/{id}", { id: args.id }), useUpdateApiListPricesIdResponse, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(args.body),
      }),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["List Prices"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
