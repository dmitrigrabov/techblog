import {
  type IntegrationService,
  integrationService,
} from "packages/models/src/integrationService.generated.ts";
import { z } from "zod";

export type IntegrationId2 = { service: IntegrationService; id: string; isPending: boolean };

export const integrationId2 = z.object({
  service: integrationService,
  id: z.string(),
  isPending: z.boolean(),
});
