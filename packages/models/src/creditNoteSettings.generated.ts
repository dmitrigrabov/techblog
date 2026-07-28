import {
  type SettingPreference,
  settingPreference,
} from "packages/models/src/settingPreference.generated.ts";
import { z } from "zod";

export type CreditNoteSettings = { generateCashCreditGrant: SettingPreference };

export const creditNoteSettings = z.object({ generateCashCreditGrant: settingPreference });
