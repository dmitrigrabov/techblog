import {
  type IntegrationService,
  integrationService,
} from "packages/models/src/integrationService.generated.ts";
import { z } from "zod";

export type IntegrationExternalIdentifier = { key: IntegrationService; value: string };

export const integrationExternalIdentifier = z.object({
  key: integrationService,
  value: z.string(),
});
