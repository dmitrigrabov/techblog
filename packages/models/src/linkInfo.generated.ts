import {
  type IntegrationService,
  integrationService,
} from "packages/models/src/integrationService.generated.ts";
import { z } from "zod";

export type LinkInfo = {
  externalId: string;
  externalService: IntegrationService;
  syncTime: string;
  externalUrl?: string | undefined;
};

export const linkInfo = z.object({
  externalId: z.string(),
  externalService: integrationService,
  syncTime: z.string(),
  externalUrl: z.string().optional(),
});
