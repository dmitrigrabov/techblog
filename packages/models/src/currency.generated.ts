import { z } from "zod";

export type Currency =
  | "AED"
  | "ARS"
  | "AUD"
  | "BRL"
  | "BGN"
  | "CAD"
  | "CHF"
  | "CLP"
  | "CNY"
  | "COP"
  | "CZK"
  | "DKK"
  | "EGP"
  | "EUR"
  | "GBP"
  | "HKD"
  | "ILS"
  | "INR"
  | "ISK"
  | "JPY"
  | "KRW"
  | "MXN"
  | "NOK"
  | "NZD"
  | "PLN"
  | "SAR"
  | "SEK"
  | "SGD"
  | "THB"
  | "USD"
  | "UYU"
  | "ZAR";

export const currency = z.enum([
  "AED",
  "ARS",
  "AUD",
  "BRL",
  "BGN",
  "CAD",
  "CHF",
  "CLP",
  "CNY",
  "COP",
  "CZK",
  "DKK",
  "EGP",
  "EUR",
  "GBP",
  "HKD",
  "ILS",
  "INR",
  "ISK",
  "JPY",
  "KRW",
  "MXN",
  "NOK",
  "NZD",
  "PLN",
  "SAR",
  "SEK",
  "SGD",
  "THB",
  "USD",
  "UYU",
  "ZAR",
]);
