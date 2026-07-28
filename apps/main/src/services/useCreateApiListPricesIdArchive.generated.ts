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

export type UseCreateApiListPricesIdArchiveArgs = {
  id: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
};

export const useCreateApiListPricesIdArchiveResponse = z.union([
  oneTimeListPriceResponse,
  fixedListPriceResponse,
  linearListPriceResponse,
  packageListPriceResponse,
  seatBasedListPriceResponse,
  graduatedListPriceResponse,
  volumeListPriceResponse,
]);

export type UseCreateApiListPricesIdArchiveResponse =
  | OneTimeListPriceResponse
  | FixedListPriceResponse
  | LinearListPriceResponse
  | PackageListPriceResponse
  | SeatBasedListPriceResponse
  | GraduatedListPriceResponse
  | VolumeListPriceResponse;

export type CreateApiListPricesIdArchiveBody = void;

export const useCreateApiListPricesIdArchive = (
  options: UseMutationOptions<
    UseCreateApiListPricesIdArchiveResponse,
    Error,
    UseCreateApiListPricesIdArchiveArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseCreateApiListPricesIdArchiveArgs) =>
      apiFetch(
        buildUrl("/list-prices/{id}/archive", { id: args.id }),
        useCreateApiListPricesIdArchiveResponse,
        { method: "POST" },
      ),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["List Prices"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
