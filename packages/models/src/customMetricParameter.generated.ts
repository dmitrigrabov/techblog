import {
  type CustomParameterType,
  customParameterType,
} from "packages/models/src/customParameterType.generated.ts";
import { z } from "zod";

export type CustomMetricParameter = {
  id: string;
  usageMetricId: string;
  name: string;
  type: CustomParameterType;
  description: string;
  defaultValue: string;
};

export const customMetricParameter = z.object({
  id: z.string(),
  usageMetricId: z.string(),
  name: z.string(),
  type: customParameterType,
  description: z.string(),
  defaultValue: z.string(),
});
