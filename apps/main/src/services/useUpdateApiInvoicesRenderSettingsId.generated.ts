import type { UpdateInvoiceRenderSettingsEndpointUpdateInvoiceRenderSettingsRequestModel } from "packages/models/src/updateInvoiceRenderSettingsEndpointUpdateInvoiceRenderSettingsRequestModel.generated.ts";
import {
  updateInvoiceRenderSettingsEndpointProductUpdateInvoiceRenderSettingsResponseModel,
  type UpdateInvoiceRenderSettingsEndpointProductUpdateInvoiceRenderSettingsResponseModel,
} from "packages/models/src/updateInvoiceRenderSettingsEndpointProductUpdateInvoiceRenderSettingsResponseModel.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseUpdateApiInvoicesRenderSettingsIdArgs = {
  id: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
  body: UpdateInvoiceRenderSettingsEndpointUpdateInvoiceRenderSettingsRequestModel;
};

export const useUpdateApiInvoicesRenderSettingsId = (
  options: UseMutationOptions<
    UpdateInvoiceRenderSettingsEndpointProductUpdateInvoiceRenderSettingsResponseModel,
    Error,
    UseUpdateApiInvoicesRenderSettingsIdArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseUpdateApiInvoicesRenderSettingsIdArgs) =>
      apiFetch(
        buildUrl("/invoices/render-settings/{id}", { id: args.id }),
        updateInvoiceRenderSettingsEndpointProductUpdateInvoiceRenderSettingsResponseModel,
        {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(args.body),
        },
      ),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Invoice Settings"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
