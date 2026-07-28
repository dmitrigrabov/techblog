import {
  type IntegrationService,
  integrationService,
} from "packages/models/src/integrationService.generated.ts";
import { z } from "zod";

export type IntegrationId1 = {
  service: IntegrationService;
  id: string;
  lastSynced?: string | undefined;
  isPending: boolean;
};

export const integrationId1 = z.object({
  service: integrationService,
  id: z.string(),
  lastSynced: z.string().optional(),
  isPending: z.boolean(),
});
