import { z } from "zod";

export type UniqueViewerResponse = {
  visitorIdentifier: string;
  lastViewedAt: string;
  loginType: string;
  email?: string | undefined;
};

export const uniqueViewerResponse = z.object({
  visitorIdentifier: z.string(),
  lastViewedAt: z.string(),
  loginType: z.string(),
  email: z.string().optional(),
});
