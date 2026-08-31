import {
  type IntegrationService,
  integrationService,
} from "packages/models/src/integrationService.generated.ts";
import { z } from "zod";

export type GenerateIntegrationIdRequest2 = { service: IntegrationService; id: string };

export const generateIntegrationIdRequest2 = z.object({
  service: integrationService,
  id: z.string(),
});
