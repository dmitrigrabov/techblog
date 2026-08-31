import { z } from "zod";

export type IntegrationService =
  | "Amazon_Redshift"
  | "GoCardless"
  | "Google_BigQuery"
  | "Google_Sheets"
  | "HubSpot"
  | "NetSuite"
  | "QuickBooks_Online"
  | "Salesforce"
  | "Slack"
  | "Snowflake"
  | "Stripe"
  | "Xero"
  | "Avalara"
  | "Anrok"
  | "Attio"
  | "Numeral"
  | "Rillet"
  | "Sphere";

export const integrationService = z.enum([
  "Amazon_Redshift",
  "GoCardless",
  "Google_BigQuery",
  "Google_Sheets",
  "HubSpot",
  "NetSuite",
  "QuickBooks_Online",
  "Salesforce",
  "Slack",
  "Snowflake",
  "Stripe",
  "Xero",
  "Avalara",
  "Anrok",
  "Attio",
  "Numeral",
  "Rillet",
  "Sphere",
]);
