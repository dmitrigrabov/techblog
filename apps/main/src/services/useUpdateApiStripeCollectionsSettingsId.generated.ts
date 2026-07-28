import type { UpdateStripeCollectionSettingsEndpointUpdateStripeCollectionSettingsRequest } from "packages/models/src/updateStripeCollectionSettingsEndpointUpdateStripeCollectionSettingsRequest.generated.ts";
import {
  stripeCollectionSettings,
  type StripeCollectionSettings,
} from "packages/models/src/stripeCollectionSettings.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseUpdateApiStripeCollectionsSettingsIdArgs = {
  id: string;
  "Sequence-Version"?: "2024-07-30" | undefined;
  body: UpdateStripeCollectionSettingsEndpointUpdateStripeCollectionSettingsRequest;
};

export const useUpdateApiStripeCollectionsSettingsId = (
  options: UseMutationOptions<
    StripeCollectionSettings,
    Error,
    UseUpdateApiStripeCollectionsSettingsIdArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseUpdateApiStripeCollectionsSettingsIdArgs) =>
      apiFetch(
        buildUrl("/stripe/collections/settings/{id}", { id: args.id }),
        stripeCollectionSettings,
        {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(args.body),
        },
      ),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Stripe Collection Settings"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
