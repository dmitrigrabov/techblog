import { Hono } from "hono";
import type { Env } from "../env";
import { withAuth, type AuthVariables, type AuthUser } from "../middleware/auth";
import { toErrorResponse, validate } from "./errors";
import { z } from "zod";
import { createDb, type Db } from "../db";
import {
  getSequenceAccountsId,
  putSequenceAccountsId,
  getUsersId,
  deleteUsersId,
  getTaxRatesId,
  putTaxRatesId,
  deleteTaxRatesId,
  getTaxRegistrationsId,
  putTaxRegistrationsId,
  deleteTaxRegistrationsId,
  postTaxRatesIdArchive,
  getQuotesIdDownload,
  getQuotesIdAnalytics,
  putCustomerAliasesId,
  deleteCustomerAliasesId,
  getCustomersIdAliases,
  putCustomerOrganizationsIdMembers,
  postCustomerOrganizationsIdMembers,
  getCustomersId,
  putCustomersId,
  postCustomersIdArchive,
  getUsageMetricsId,
  putUsageMetricsId,
  deleteUsageMetricsId,
  getSeatMetricsId,
  putSeatMetricsId,
  deleteSeatMetricsId,
  getSeatEventsId,
  getActivityLogsId,
  postProductsIdArchive,
  getListPricesId,
  putListPricesId,
  postListPricesIdArchive,
  getProductsId,
  putProductsId,
  getCreditsId,
  deleteCreditsId,
  getPricesId,
  putPricesId,
  deletePricesId,
  getDiscountsId,
  putDiscountsId,
  deleteDiscountsId,
  postCreditNotesIdMarkAsSent,
  postInvoicesIdSendPaymentReminder,
  getInvoicesId,
  putInvoicesId,
  deleteInvoicesId,
  patchInvoicesId,
  getCreditNotesId,
  putCreditNotesId,
  deleteCreditNotesId,
  postInvoicesIdFinalizeAndSend,
  postInvoicesIdVoid,
  postInvoicesIdSend,
  postCreditNotesIdVoid,
  getInvoicesIdDownload,
  postInvoicesIdDraft,
  putInvoicesIdPaymentStatus,
  getInvoicesIdCurrencyConversions,
  patchInvoicesIdSent,
  postCreditNotesIdFinalizeAndSend,
  postInvoicesIdMarkAsSent,
  postInvoicesIdFinalize,
  postCreditNotesIdFinalize,
  getCreditNotesIdDownload,
  postCreditNotesIdSend,
} from "./handlers/{id}";
import type { SequenceAccount } from "packages/models/src/sequenceAccount.generated.ts";
import {
  updateSequenceAccountProductEndpointUpdateSequenceAccountRequest,
  type UpdateSequenceAccountProductEndpointUpdateSequenceAccountRequest,
} from "packages/models/src/updateSequenceAccountProductEndpointUpdateSequenceAccountRequest.generated.ts";
import type { SequenceUserResponse } from "packages/models/src/sequenceUserResponse.generated.ts";
import type { TaxRateResponse } from "packages/models/src/taxRateResponse.generated.ts";
import {
  updateTaxRateRequest,
  type UpdateTaxRateRequest,
} from "packages/models/src/updateTaxRateRequest.generated.ts";
import type { ProductGetTaxRegistrationResponseModel } from "packages/models/src/productGetTaxRegistrationResponseModel.generated.ts";
import {
  updateTaxRegistrationRequestModel,
  type UpdateTaxRegistrationRequestModel,
} from "packages/models/src/updateTaxRegistrationRequestModel.generated.ts";
import type { ProductUpdateTaxRegistrationResponseModel } from "packages/models/src/productUpdateTaxRegistrationResponseModel.generated.ts";
import type { ProductDeleteTaxRegistrationResponseModel } from "packages/models/src/productDeleteTaxRegistrationResponseModel.generated.ts";
import type { ProductArchiveTaxRateResponseModel } from "packages/models/src/productArchiveTaxRateResponseModel.generated.ts";
import type { GetQuoteViewTrackingResponse } from "packages/models/src/getQuoteViewTrackingResponse.generated.ts";
import {
  updateCustomerAliasRequestModel,
  type UpdateCustomerAliasRequestModel,
} from "packages/models/src/updateCustomerAliasRequestModel.generated.ts";
import type { CustomerAliasResponseModel } from "packages/models/src/customerAliasResponseModel.generated.ts";
import type { GetCustomerAliasesResponse } from "packages/models/src/getCustomerAliasesResponse.generated.ts";
import {
  customerOrganizationMembers,
  type CustomerOrganizationMembers,
} from "packages/models/src/customerOrganizationMembers.generated.ts";
import type { CustomerOrganization } from "packages/models/src/customerOrganization.generated.ts";
import type { Customer } from "packages/models/src/customer.generated.ts";
import {
  createOrUpdateCustomerRequest,
  type CreateOrUpdateCustomerRequest,
} from "packages/models/src/createOrUpdateCustomerRequest.generated.ts";
import type { GetUsageMetricEndpointProductGetUsageMetricResponseModel } from "packages/models/src/getUsageMetricEndpointProductGetUsageMetricResponseModel.generated.ts";
import {
  updateUsageMetricEndpointUpdateUsageMetricRequestModel,
  type UpdateUsageMetricEndpointUpdateUsageMetricRequestModel,
} from "packages/models/src/updateUsageMetricEndpointUpdateUsageMetricRequestModel.generated.ts";
import type { UpdateUsageMetricEndpointProductUpdateUsageMetricResponseModel } from "packages/models/src/updateUsageMetricEndpointProductUpdateUsageMetricResponseModel.generated.ts";
import type { DeleteUsageMetricEndpointProductDeleteUsageMetricResponseModel } from "packages/models/src/deleteUsageMetricEndpointProductDeleteUsageMetricResponseModel.generated.ts";
import type { GetSeatMetricEndpointProductGetSeatMetricResponseModel } from "packages/models/src/getSeatMetricEndpointProductGetSeatMetricResponseModel.generated.ts";
import {
  updateSeatMetricRequest,
  type UpdateSeatMetricRequest,
} from "packages/models/src/updateSeatMetricRequest.generated.ts";
import type { SeatMetric } from "packages/models/src/seatMetric.generated.ts";
import type { SeatEvent } from "packages/models/src/seatEvent.generated.ts";
import type { ActivityLogResponse } from "packages/models/src/activityLogResponse.generated.ts";
import type { Stable20240509ProductResponse } from "packages/models/src/stable20240509ProductResponse.generated.ts";
import type { OneTimeListPriceResponse } from "packages/models/src/oneTimeListPriceResponse.generated.ts";
import type { FixedListPriceResponse } from "packages/models/src/fixedListPriceResponse.generated.ts";
import type { LinearListPriceResponse } from "packages/models/src/linearListPriceResponse.generated.ts";
import type { PackageListPriceResponse } from "packages/models/src/packageListPriceResponse.generated.ts";
import type { SeatBasedListPriceResponse } from "packages/models/src/seatBasedListPriceResponse.generated.ts";
import type { GraduatedListPriceResponse } from "packages/models/src/graduatedListPriceResponse.generated.ts";
import type { VolumeListPriceResponse } from "packages/models/src/volumeListPriceResponse.generated.ts";
import {
  oneTimeListPriceRequest,
  type OneTimeListPriceRequest,
} from "packages/models/src/oneTimeListPriceRequest.generated.ts";
import {
  fixedListPriceRequest,
  type FixedListPriceRequest,
} from "packages/models/src/fixedListPriceRequest.generated.ts";
import {
  linearListPriceRequest,
  type LinearListPriceRequest,
} from "packages/models/src/linearListPriceRequest.generated.ts";
import {
  packageListPriceRequest,
  type PackageListPriceRequest,
} from "packages/models/src/packageListPriceRequest.generated.ts";
import {
  seatBasedListPriceRequest,
  type SeatBasedListPriceRequest,
} from "packages/models/src/seatBasedListPriceRequest.generated.ts";
import {
  graduatedListPriceRequest,
  type GraduatedListPriceRequest,
} from "packages/models/src/graduatedListPriceRequest.generated.ts";
import {
  volumeListPriceRequest,
  type VolumeListPriceRequest,
} from "packages/models/src/volumeListPriceRequest.generated.ts";
import type { Stable20240730ProductResponse } from "packages/models/src/stable20240730ProductResponse.generated.ts";
import {
  stable20240730ProductRequest,
  type Stable20240730ProductRequest,
} from "packages/models/src/stable20240730ProductRequest.generated.ts";
import type { CreditGrant } from "packages/models/src/creditGrant.generated.ts";
import type { CreditGrantResponse } from "packages/models/src/creditGrantResponse.generated.ts";
import type { OneTimePriceResponse } from "packages/models/src/oneTimePriceResponse.generated.ts";
import type { FixedPriceResponse } from "packages/models/src/fixedPriceResponse.generated.ts";
import type { LinearPriceResponse } from "packages/models/src/linearPriceResponse.generated.ts";
import type { PackagePriceResponse } from "packages/models/src/packagePriceResponse.generated.ts";
import type { SeatBasedPriceResponse } from "packages/models/src/seatBasedPriceResponse.generated.ts";
import type { GraduatedPriceResponse } from "packages/models/src/graduatedPriceResponse.generated.ts";
import type { VolumePriceResponse } from "packages/models/src/volumePriceResponse.generated.ts";
import {
  updatePriceRequest,
  type UpdatePriceRequest,
} from "packages/models/src/updatePriceRequest.generated.ts";
import type { DiscountResponse } from "packages/models/src/discountResponse.generated.ts";
import {
  updateDiscountRequest,
  type UpdateDiscountRequest,
} from "packages/models/src/updateDiscountRequest.generated.ts";
import type { CreditNote } from "packages/models/src/creditNote.generated.ts";
import type { Invoice } from "packages/models/src/invoice.generated.ts";
import type { InvoiceResponse } from "packages/models/src/invoiceResponse.generated.ts";
import {
  stable20240101UpdateInvoiceRequest,
  type Stable20240101UpdateInvoiceRequest,
} from "packages/models/src/stable20240101UpdateInvoiceRequest.generated.ts";
import type { DeleteInvoiceEndpointProductDeleteInvoiceResponseModel } from "packages/models/src/deleteInvoiceEndpointProductDeleteInvoiceResponseModel.generated.ts";
import {
  stable20240101PatchInvoiceRequest,
  type Stable20240101PatchInvoiceRequest,
} from "packages/models/src/stable20240101PatchInvoiceRequest.generated.ts";
import {
  updateCreditNoteEndpointUpdateCreditNoteRequestModel,
  type UpdateCreditNoteEndpointUpdateCreditNoteRequestModel,
} from "packages/models/src/updateCreditNoteEndpointUpdateCreditNoteRequestModel.generated.ts";
import {
  updateInvoicePaymentStatusEndpointRequestModel,
  type UpdateInvoicePaymentStatusEndpointRequestModel,
} from "packages/models/src/updateInvoicePaymentStatusEndpointRequestModel.generated.ts";
import type { InvoiceCurrencyConversionsListResponse } from "packages/models/src/invoiceCurrencyConversionsListResponse.generated.ts";
import {
  patchSentInvoiceEndpointPatchSentInvoiceRequest,
  type PatchSentInvoiceEndpointPatchSentInvoiceRequest,
} from "packages/models/src/patchSentInvoiceEndpointPatchSentInvoiceRequest.generated.ts";

export const app = new Hono<{ Bindings: Env; Variables: AuthVariables }>();

app.onError(toErrorResponse);

app.use("*", withAuth);

app.get("/sequence-accounts/:id", validate("param", z.object({ id: z.string() })), async (c) => {
  const db = createDb(c.env.DB);
  const params = c.req.valid("param");
  return c.json(await getSequenceAccountsId({ db, env: c.env, user: c.var.user, params }));
});
app.put(
  "/sequence-accounts/:id",
  validate("param", z.object({ id: z.string() })),
  validate("json", updateSequenceAccountProductEndpointUpdateSequenceAccountRequest),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    const body = c.req.valid("json");
    return c.json(await putSequenceAccountsId({ db, env: c.env, user: c.var.user, params, body }));
  },
);
app.get("/users/:id", validate("param", z.object({ id: z.string() })), async (c) => {
  const db = createDb(c.env.DB);
  const params = c.req.valid("param");
  return c.json(await getUsersId({ db, env: c.env, user: c.var.user, params }));
});
app.delete("/users/:id", validate("param", z.object({ id: z.string() })), async (c) => {
  const db = createDb(c.env.DB);
  const params = c.req.valid("param");
  return c.json(await deleteUsersId({ db, env: c.env, user: c.var.user, params }));
});
app.get("/tax-rates/:id", validate("param", z.object({ id: z.string() })), async (c) => {
  const db = createDb(c.env.DB);
  const params = c.req.valid("param");
  return c.json(await getTaxRatesId({ db, env: c.env, user: c.var.user, params }));
});
app.put(
  "/tax-rates/:id",
  validate("param", z.object({ id: z.string() })),
  validate("json", updateTaxRateRequest),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    const body = c.req.valid("json");
    return c.json(await putTaxRatesId({ db, env: c.env, user: c.var.user, params, body }));
  },
);
app.delete("/tax-rates/:id", validate("param", z.object({ id: z.string() })), async (c) => {
  const db = createDb(c.env.DB);
  const params = c.req.valid("param");
  return c.json(await deleteTaxRatesId({ db, env: c.env, user: c.var.user, params }));
});
app.get("/tax-registrations/:id", validate("param", z.object({ id: z.string() })), async (c) => {
  const db = createDb(c.env.DB);
  const params = c.req.valid("param");
  return c.json(await getTaxRegistrationsId({ db, env: c.env, user: c.var.user, params }));
});
app.put(
  "/tax-registrations/:id",
  validate("param", z.object({ id: z.string() })),
  validate("json", updateTaxRegistrationRequestModel),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    const body = c.req.valid("json");
    return c.json(await putTaxRegistrationsId({ db, env: c.env, user: c.var.user, params, body }));
  },
);
app.delete("/tax-registrations/:id", validate("param", z.object({ id: z.string() })), async (c) => {
  const db = createDb(c.env.DB);
  const params = c.req.valid("param");
  return c.json(await deleteTaxRegistrationsId({ db, env: c.env, user: c.var.user, params }));
});
app.post("/tax-rates/:id/archive", validate("param", z.object({ id: z.string() })), async (c) => {
  const db = createDb(c.env.DB);
  const params = c.req.valid("param");
  return c.json(await postTaxRatesIdArchive({ db, env: c.env, user: c.var.user, params }));
});
app.get("/quotes/:id/download", validate("param", z.object({ id: z.string() })), async (c) => {
  const db = createDb(c.env.DB);
  const params = c.req.valid("param");
  return c.json(await getQuotesIdDownload({ db, env: c.env, user: c.var.user, params }));
});
app.get("/quotes/:id/analytics", validate("param", z.object({ id: z.string() })), async (c) => {
  const db = createDb(c.env.DB);
  const params = c.req.valid("param");
  return c.json(await getQuotesIdAnalytics({ db, env: c.env, user: c.var.user, params }));
});
app.put(
  "/customer-aliases/:id",
  validate("param", z.object({ id: z.string() })),
  validate("json", updateCustomerAliasRequestModel),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    const body = c.req.valid("json");
    return c.json(await putCustomerAliasesId({ db, env: c.env, user: c.var.user, params, body }));
  },
);
app.delete("/customer-aliases/:id", validate("param", z.object({ id: z.string() })), async (c) => {
  const db = createDb(c.env.DB);
  const params = c.req.valid("param");
  return c.json(await deleteCustomerAliasesId({ db, env: c.env, user: c.var.user, params }));
});
app.get("/customers/:id/aliases", validate("param", z.object({ id: z.string() })), async (c) => {
  const db = createDb(c.env.DB);
  const params = c.req.valid("param");
  return c.json(await getCustomersIdAliases({ db, env: c.env, user: c.var.user, params }));
});
app.put(
  "/customer-organizations/:id/members",
  validate("param", z.object({ id: z.string() })),
  validate("json", customerOrganizationMembers),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    const body = c.req.valid("json");
    return c.json(
      await putCustomerOrganizationsIdMembers({ db, env: c.env, user: c.var.user, params, body }),
    );
  },
);
app.post(
  "/customer-organizations/:id/members",
  validate("param", z.object({ id: z.string() })),
  validate("json", customerOrganizationMembers),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    const body = c.req.valid("json");
    return c.json(
      await postCustomerOrganizationsIdMembers({ db, env: c.env, user: c.var.user, params, body }),
    );
  },
);
app.get("/customers/:id", validate("param", z.object({ id: z.string() })), async (c) => {
  const db = createDb(c.env.DB);
  const params = c.req.valid("param");
  return c.json(await getCustomersId({ db, env: c.env, user: c.var.user, params }));
});
app.put(
  "/customers/:id",
  validate("param", z.object({ id: z.string() })),
  validate("json", createOrUpdateCustomerRequest),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    const body = c.req.valid("json");
    return c.json(await putCustomersId({ db, env: c.env, user: c.var.user, params, body }));
  },
);
app.post("/customers/:id/archive", validate("param", z.object({ id: z.string() })), async (c) => {
  const db = createDb(c.env.DB);
  const params = c.req.valid("param");
  return c.json(await postCustomersIdArchive({ db, env: c.env, user: c.var.user, params }));
});
app.get("/usage-metrics/:id", validate("param", z.object({ id: z.string() })), async (c) => {
  const db = createDb(c.env.DB);
  const params = c.req.valid("param");
  return c.json(await getUsageMetricsId({ db, env: c.env, user: c.var.user, params }));
});
app.put(
  "/usage-metrics/:id",
  validate("param", z.object({ id: z.string() })),
  validate("json", updateUsageMetricEndpointUpdateUsageMetricRequestModel),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    const body = c.req.valid("json");
    return c.json(await putUsageMetricsId({ db, env: c.env, user: c.var.user, params, body }));
  },
);
app.delete("/usage-metrics/:id", validate("param", z.object({ id: z.string() })), async (c) => {
  const db = createDb(c.env.DB);
  const params = c.req.valid("param");
  return c.json(await deleteUsageMetricsId({ db, env: c.env, user: c.var.user, params }));
});
app.get("/seat-metrics/:id", validate("param", z.object({ id: z.string() })), async (c) => {
  const db = createDb(c.env.DB);
  const params = c.req.valid("param");
  return c.json(await getSeatMetricsId({ db, env: c.env, user: c.var.user, params }));
});
app.put(
  "/seat-metrics/:id",
  validate("param", z.object({ id: z.string() })),
  validate("json", updateSeatMetricRequest),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    const body = c.req.valid("json");
    return c.json(await putSeatMetricsId({ db, env: c.env, user: c.var.user, params, body }));
  },
);
app.delete("/seat-metrics/:id", validate("param", z.object({ id: z.string() })), async (c) => {
  const db = createDb(c.env.DB);
  const params = c.req.valid("param");
  return c.json(await deleteSeatMetricsId({ db, env: c.env, user: c.var.user, params }));
});
app.get("/seat-events/:id", validate("param", z.object({ id: z.string() })), async (c) => {
  const db = createDb(c.env.DB);
  const params = c.req.valid("param");
  return c.json(await getSeatEventsId({ db, env: c.env, user: c.var.user, params }));
});
app.get("/activity-logs/:id", validate("param", z.object({ id: z.string() })), async (c) => {
  const db = createDb(c.env.DB);
  const params = c.req.valid("param");
  return c.json(await getActivityLogsId({ db, env: c.env, user: c.var.user, params }));
});
app.post("/products/:id/archive", validate("param", z.object({ id: z.string() })), async (c) => {
  const db = createDb(c.env.DB);
  const params = c.req.valid("param");
  return c.json(await postProductsIdArchive({ db, env: c.env, user: c.var.user, params }));
});
app.get("/list-prices/:id", validate("param", z.object({ id: z.string() })), async (c) => {
  const db = createDb(c.env.DB);
  const params = c.req.valid("param");
  return c.json(await getListPricesId({ db, env: c.env, user: c.var.user, params }));
});
app.put(
  "/list-prices/:id",
  validate("param", z.object({ id: z.string() })),
  validate("json", putListPricesIdBody),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    const body = c.req.valid("json");
    return c.json(await putListPricesId({ db, env: c.env, user: c.var.user, params, body }));
  },
);
app.post("/list-prices/:id/archive", validate("param", z.object({ id: z.string() })), async (c) => {
  const db = createDb(c.env.DB);
  const params = c.req.valid("param");
  return c.json(await postListPricesIdArchive({ db, env: c.env, user: c.var.user, params }));
});
app.get("/products/:id", validate("param", z.object({ id: z.string() })), async (c) => {
  const db = createDb(c.env.DB);
  const params = c.req.valid("param");
  return c.json(await getProductsId({ db, env: c.env, user: c.var.user, params }));
});
app.put(
  "/products/:id",
  validate("param", z.object({ id: z.string() })),
  validate("json", stable20240730ProductRequest),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    const body = c.req.valid("json");
    return c.json(await putProductsId({ db, env: c.env, user: c.var.user, params, body }));
  },
);
app.get("/credits/:id", validate("param", z.object({ id: z.string() })), async (c) => {
  const db = createDb(c.env.DB);
  const params = c.req.valid("param");
  return c.json(await getCreditsId({ db, env: c.env, user: c.var.user, params }));
});
app.delete("/credits/:id", validate("param", z.object({ id: z.string() })), async (c) => {
  const db = createDb(c.env.DB);
  const params = c.req.valid("param");
  return c.json(await deleteCreditsId({ db, env: c.env, user: c.var.user, params }));
});
app.get("/prices/:id", validate("param", z.object({ id: z.string() })), async (c) => {
  const db = createDb(c.env.DB);
  const params = c.req.valid("param");
  return c.json(await getPricesId({ db, env: c.env, user: c.var.user, params }));
});
app.put(
  "/prices/:id",
  validate("param", z.object({ id: z.string() })),
  validate("json", updatePriceRequest),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    const body = c.req.valid("json");
    return c.json(await putPricesId({ db, env: c.env, user: c.var.user, params, body }));
  },
);
app.delete("/prices/:id", validate("param", z.object({ id: z.string() })), async (c) => {
  const db = createDb(c.env.DB);
  const params = c.req.valid("param");
  return c.json(await deletePricesId({ db, env: c.env, user: c.var.user, params }));
});
app.get("/discounts/:id", validate("param", z.object({ id: z.string() })), async (c) => {
  const db = createDb(c.env.DB);
  const params = c.req.valid("param");
  return c.json(await getDiscountsId({ db, env: c.env, user: c.var.user, params }));
});
app.put(
  "/discounts/:id",
  validate("param", z.object({ id: z.string() })),
  validate("json", updateDiscountRequest),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    const body = c.req.valid("json");
    return c.json(await putDiscountsId({ db, env: c.env, user: c.var.user, params, body }));
  },
);
app.delete("/discounts/:id", validate("param", z.object({ id: z.string() })), async (c) => {
  const db = createDb(c.env.DB);
  const params = c.req.valid("param");
  return c.json(await deleteDiscountsId({ db, env: c.env, user: c.var.user, params }));
});
app.post(
  "/credit-notes/:id/mark-as-sent",
  validate("param", z.object({ id: z.string() })),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    return c.json(await postCreditNotesIdMarkAsSent({ db, env: c.env, user: c.var.user, params }));
  },
);
app.post(
  "/invoices/:id/send-payment-reminder",
  validate("param", z.object({ id: z.string() })),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    return c.json(
      await postInvoicesIdSendPaymentReminder({ db, env: c.env, user: c.var.user, params }),
    );
  },
);
app.get("/invoices/:id", validate("param", z.object({ id: z.string() })), async (c) => {
  const db = createDb(c.env.DB);
  const params = c.req.valid("param");
  return c.json(await getInvoicesId({ db, env: c.env, user: c.var.user, params }));
});
app.put(
  "/invoices/:id",
  validate("param", z.object({ id: z.string() })),
  validate("json", stable20240101UpdateInvoiceRequest),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    const body = c.req.valid("json");
    return c.json(await putInvoicesId({ db, env: c.env, user: c.var.user, params, body }));
  },
);
app.delete("/invoices/:id", validate("param", z.object({ id: z.string() })), async (c) => {
  const db = createDb(c.env.DB);
  const params = c.req.valid("param");
  return c.json(await deleteInvoicesId({ db, env: c.env, user: c.var.user, params }));
});
app.patch(
  "/invoices/:id",
  validate("param", z.object({ id: z.string() })),
  validate("json", stable20240101PatchInvoiceRequest),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    const body = c.req.valid("json");
    return c.json(await patchInvoicesId({ db, env: c.env, user: c.var.user, params, body }));
  },
);
app.get("/credit-notes/:id", validate("param", z.object({ id: z.string() })), async (c) => {
  const db = createDb(c.env.DB);
  const params = c.req.valid("param");
  return c.json(await getCreditNotesId({ db, env: c.env, user: c.var.user, params }));
});
app.put(
  "/credit-notes/:id",
  validate("param", z.object({ id: z.string() })),
  validate("json", updateCreditNoteEndpointUpdateCreditNoteRequestModel),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    const body = c.req.valid("json");
    return c.json(await putCreditNotesId({ db, env: c.env, user: c.var.user, params, body }));
  },
);
app.delete("/credit-notes/:id", validate("param", z.object({ id: z.string() })), async (c) => {
  const db = createDb(c.env.DB);
  const params = c.req.valid("param");
  return c.json(await deleteCreditNotesId({ db, env: c.env, user: c.var.user, params }));
});
app.post(
  "/invoices/:id/finalize-and-send",
  validate("param", z.object({ id: z.string() })),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    return c.json(
      await postInvoicesIdFinalizeAndSend({ db, env: c.env, user: c.var.user, params }),
    );
  },
);
app.post("/invoices/:id/void", validate("param", z.object({ id: z.string() })), async (c) => {
  const db = createDb(c.env.DB);
  const params = c.req.valid("param");
  return c.json(await postInvoicesIdVoid({ db, env: c.env, user: c.var.user, params }));
});
app.post("/invoices/:id/send", validate("param", z.object({ id: z.string() })), async (c) => {
  const db = createDb(c.env.DB);
  const params = c.req.valid("param");
  return c.json(await postInvoicesIdSend({ db, env: c.env, user: c.var.user, params }));
});
app.post("/credit-notes/:id/void", validate("param", z.object({ id: z.string() })), async (c) => {
  const db = createDb(c.env.DB);
  const params = c.req.valid("param");
  return c.json(await postCreditNotesIdVoid({ db, env: c.env, user: c.var.user, params }));
});
app.get("/invoices/:id/download", validate("param", z.object({ id: z.string() })), async (c) => {
  const db = createDb(c.env.DB);
  const params = c.req.valid("param");
  return c.json(await getInvoicesIdDownload({ db, env: c.env, user: c.var.user, params }));
});
app.post("/invoices/:id/draft", validate("param", z.object({ id: z.string() })), async (c) => {
  const db = createDb(c.env.DB);
  const params = c.req.valid("param");
  return c.json(await postInvoicesIdDraft({ db, env: c.env, user: c.var.user, params }));
});
app.put(
  "/invoices/:id/payment-status",
  validate("param", z.object({ id: z.string() })),
  validate("json", updateInvoicePaymentStatusEndpointRequestModel),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    const body = c.req.valid("json");
    return c.json(
      await putInvoicesIdPaymentStatus({ db, env: c.env, user: c.var.user, params, body }),
    );
  },
);
app.get(
  "/invoices/:id/currency-conversions",
  validate("param", z.object({ id: z.string() })),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    return c.json(
      await getInvoicesIdCurrencyConversions({ db, env: c.env, user: c.var.user, params }),
    );
  },
);
app.patch(
  "/invoices/:id/sent",
  validate("param", z.object({ id: z.string() })),
  validate("json", patchSentInvoiceEndpointPatchSentInvoiceRequest),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    const body = c.req.valid("json");
    return c.json(await patchInvoicesIdSent({ db, env: c.env, user: c.var.user, params, body }));
  },
);
app.post(
  "/credit-notes/:id/finalize-and-send",
  validate("param", z.object({ id: z.string() })),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    return c.json(
      await postCreditNotesIdFinalizeAndSend({ db, env: c.env, user: c.var.user, params }),
    );
  },
);
app.post(
  "/invoices/:id/mark-as-sent",
  validate("param", z.object({ id: z.string() })),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    return c.json(await postInvoicesIdMarkAsSent({ db, env: c.env, user: c.var.user, params }));
  },
);
app.post("/invoices/:id/finalize", validate("param", z.object({ id: z.string() })), async (c) => {
  const db = createDb(c.env.DB);
  const params = c.req.valid("param");
  return c.json(await postInvoicesIdFinalize({ db, env: c.env, user: c.var.user, params }));
});
app.post(
  "/credit-notes/:id/finalize",
  validate("param", z.object({ id: z.string() })),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    return c.json(await postCreditNotesIdFinalize({ db, env: c.env, user: c.var.user, params }));
  },
);
app.get(
  "/credit-notes/:id/download",
  validate("param", z.object({ id: z.string() })),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    return c.json(await getCreditNotesIdDownload({ db, env: c.env, user: c.var.user, params }));
  },
);
app.post("/credit-notes/:id/send", validate("param", z.object({ id: z.string() })), async (c) => {
  const db = createDb(c.env.DB);
  const params = c.req.valid("param");
  return c.json(await postCreditNotesIdSend({ db, env: c.env, user: c.var.user, params }));
});

export type GetSequenceAccountsIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type GetSequenceAccountsIdHandler = (
  input: GetSequenceAccountsIdInput,
) => Promise<SequenceAccount>;

export type PutSequenceAccountsIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
  body: UpdateSequenceAccountProductEndpointUpdateSequenceAccountRequest;
};

export type PutSequenceAccountsIdHandler = (
  input: PutSequenceAccountsIdInput,
) => Promise<SequenceAccount>;

export type GetUsersIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type GetUsersIdHandler = (input: GetUsersIdInput) => Promise<SequenceUserResponse>;

export type DeleteUsersIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type DeleteUsersIdHandler = (input: DeleteUsersIdInput) => Promise<SequenceUserResponse>;

export type GetTaxRatesIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type GetTaxRatesIdHandler = (input: GetTaxRatesIdInput) => Promise<TaxRateResponse>;

export type PutTaxRatesIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
  body: UpdateTaxRateRequest;
};

export type PutTaxRatesIdHandler = (input: PutTaxRatesIdInput) => Promise<TaxRateResponse>;

export type DeleteTaxRatesIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type DeleteTaxRatesIdHandler = (input: DeleteTaxRatesIdInput) => Promise<TaxRateResponse>;

export type GetTaxRegistrationsIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type GetTaxRegistrationsIdHandler = (
  input: GetTaxRegistrationsIdInput,
) => Promise<ProductGetTaxRegistrationResponseModel>;

export type PutTaxRegistrationsIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
  body: UpdateTaxRegistrationRequestModel;
};

export type PutTaxRegistrationsIdHandler = (
  input: PutTaxRegistrationsIdInput,
) => Promise<ProductUpdateTaxRegistrationResponseModel>;

export type DeleteTaxRegistrationsIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type DeleteTaxRegistrationsIdHandler = (
  input: DeleteTaxRegistrationsIdInput,
) => Promise<ProductDeleteTaxRegistrationResponseModel>;

export type PostTaxRatesIdArchiveInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type PostTaxRatesIdArchiveHandler = (
  input: PostTaxRatesIdArchiveInput,
) => Promise<ProductArchiveTaxRateResponseModel>;

export type GetQuotesIdDownloadInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type GetQuotesIdDownloadHandler = (input: GetQuotesIdDownloadInput) => Promise<void>;

export type GetQuotesIdAnalyticsInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type GetQuotesIdAnalyticsHandler = (
  input: GetQuotesIdAnalyticsInput,
) => Promise<GetQuoteViewTrackingResponse>;

export type PutCustomerAliasesIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
  body: UpdateCustomerAliasRequestModel;
};

export type PutCustomerAliasesIdHandler = (
  input: PutCustomerAliasesIdInput,
) => Promise<CustomerAliasResponseModel>;

export type DeleteCustomerAliasesIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type DeleteCustomerAliasesIdHandler = (
  input: DeleteCustomerAliasesIdInput,
) => Promise<CustomerAliasResponseModel>;

export type GetCustomersIdAliasesInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type GetCustomersIdAliasesHandler = (
  input: GetCustomersIdAliasesInput,
) => Promise<GetCustomerAliasesResponse>;

export type PutCustomerOrganizationsIdMembersInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
  body: CustomerOrganizationMembers;
};

export type PutCustomerOrganizationsIdMembersHandler = (
  input: PutCustomerOrganizationsIdMembersInput,
) => Promise<CustomerOrganization>;

export type PostCustomerOrganizationsIdMembersInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
  body: CustomerOrganizationMembers;
};

export type PostCustomerOrganizationsIdMembersHandler = (
  input: PostCustomerOrganizationsIdMembersInput,
) => Promise<CustomerOrganization>;

export type GetCustomersIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type GetCustomersIdHandler = (input: GetCustomersIdInput) => Promise<Customer>;

export type PutCustomersIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
  body: CreateOrUpdateCustomerRequest;
};

export type PutCustomersIdHandler = (input: PutCustomersIdInput) => Promise<Customer>;

export type PostCustomersIdArchiveInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type PostCustomersIdArchiveHandler = (
  input: PostCustomersIdArchiveInput,
) => Promise<Customer>;

export type GetUsageMetricsIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type GetUsageMetricsIdHandler = (
  input: GetUsageMetricsIdInput,
) => Promise<GetUsageMetricEndpointProductGetUsageMetricResponseModel>;

export type PutUsageMetricsIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
  body: UpdateUsageMetricEndpointUpdateUsageMetricRequestModel;
};

export type PutUsageMetricsIdHandler = (
  input: PutUsageMetricsIdInput,
) => Promise<UpdateUsageMetricEndpointProductUpdateUsageMetricResponseModel>;

export type DeleteUsageMetricsIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type DeleteUsageMetricsIdHandler = (
  input: DeleteUsageMetricsIdInput,
) => Promise<DeleteUsageMetricEndpointProductDeleteUsageMetricResponseModel>;

export type GetSeatMetricsIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type GetSeatMetricsIdHandler = (
  input: GetSeatMetricsIdInput,
) => Promise<GetSeatMetricEndpointProductGetSeatMetricResponseModel>;

export type PutSeatMetricsIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
  body: UpdateSeatMetricRequest;
};

export type PutSeatMetricsIdHandler = (input: PutSeatMetricsIdInput) => Promise<SeatMetric>;

export type DeleteSeatMetricsIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type DeleteSeatMetricsIdHandler = (input: DeleteSeatMetricsIdInput) => Promise<SeatMetric>;

export type GetSeatEventsIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type GetSeatEventsIdHandler = (input: GetSeatEventsIdInput) => Promise<SeatEvent>;

export type GetActivityLogsIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type GetActivityLogsIdHandler = (
  input: GetActivityLogsIdInput,
) => Promise<ActivityLogResponse>;

export type PostProductsIdArchiveInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type PostProductsIdArchiveHandler = (
  input: PostProductsIdArchiveInput,
) => Promise<Stable20240509ProductResponse>;

export type GetListPricesIdResponse =
  | OneTimeListPriceResponse
  | FixedListPriceResponse
  | LinearListPriceResponse
  | PackageListPriceResponse
  | SeatBasedListPriceResponse
  | GraduatedListPriceResponse
  | VolumeListPriceResponse;

export type GetListPricesIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type GetListPricesIdHandler = (
  input: GetListPricesIdInput,
) => Promise<GetListPricesIdResponse>;

export const putListPricesIdBody = z.union([
  oneTimeListPriceRequest,
  fixedListPriceRequest,
  linearListPriceRequest,
  packageListPriceRequest,
  seatBasedListPriceRequest,
  graduatedListPriceRequest,
  volumeListPriceRequest,
]);

export type PutListPricesIdBody =
  | OneTimeListPriceRequest
  | FixedListPriceRequest
  | LinearListPriceRequest
  | PackageListPriceRequest
  | SeatBasedListPriceRequest
  | GraduatedListPriceRequest
  | VolumeListPriceRequest;

export type PutListPricesIdResponse =
  | OneTimeListPriceResponse
  | FixedListPriceResponse
  | LinearListPriceResponse
  | PackageListPriceResponse
  | SeatBasedListPriceResponse
  | GraduatedListPriceResponse
  | VolumeListPriceResponse;

export type PutListPricesIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
  body: PutListPricesIdBody;
};

export type PutListPricesIdHandler = (
  input: PutListPricesIdInput,
) => Promise<PutListPricesIdResponse>;

export type PostListPricesIdArchiveResponse =
  | OneTimeListPriceResponse
  | FixedListPriceResponse
  | LinearListPriceResponse
  | PackageListPriceResponse
  | SeatBasedListPriceResponse
  | GraduatedListPriceResponse
  | VolumeListPriceResponse;

export type PostListPricesIdArchiveInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type PostListPricesIdArchiveHandler = (
  input: PostListPricesIdArchiveInput,
) => Promise<PostListPricesIdArchiveResponse>;

export type GetProductsIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type GetProductsIdHandler = (
  input: GetProductsIdInput,
) => Promise<Stable20240730ProductResponse>;

export type PutProductsIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
  body: Stable20240730ProductRequest;
};

export type PutProductsIdHandler = (
  input: PutProductsIdInput,
) => Promise<Stable20240730ProductResponse>;

export type GetCreditsIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type GetCreditsIdHandler = (input: GetCreditsIdInput) => Promise<CreditGrant>;

export type DeleteCreditsIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type DeleteCreditsIdHandler = (input: DeleteCreditsIdInput) => Promise<CreditGrantResponse>;

export type GetPricesIdResponse =
  | OneTimePriceResponse
  | FixedPriceResponse
  | LinearPriceResponse
  | PackagePriceResponse
  | SeatBasedPriceResponse
  | GraduatedPriceResponse
  | VolumePriceResponse;

export type GetPricesIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type GetPricesIdHandler = (input: GetPricesIdInput) => Promise<GetPricesIdResponse>;

export type PutPricesIdResponse =
  | OneTimePriceResponse
  | FixedPriceResponse
  | LinearPriceResponse
  | PackagePriceResponse
  | SeatBasedPriceResponse
  | GraduatedPriceResponse
  | VolumePriceResponse;

export type PutPricesIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
  body: UpdatePriceRequest;
};

export type PutPricesIdHandler = (input: PutPricesIdInput) => Promise<PutPricesIdResponse>;

export type DeletePricesIdResponse =
  | OneTimePriceResponse
  | FixedPriceResponse
  | LinearPriceResponse
  | PackagePriceResponse
  | SeatBasedPriceResponse
  | GraduatedPriceResponse
  | VolumePriceResponse;

export type DeletePricesIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type DeletePricesIdHandler = (input: DeletePricesIdInput) => Promise<DeletePricesIdResponse>;

export type GetDiscountsIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type GetDiscountsIdHandler = (input: GetDiscountsIdInput) => Promise<DiscountResponse>;

export type PutDiscountsIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
  body: UpdateDiscountRequest;
};

export type PutDiscountsIdHandler = (input: PutDiscountsIdInput) => Promise<DiscountResponse>;

export type DeleteDiscountsIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type DeleteDiscountsIdHandler = (input: DeleteDiscountsIdInput) => Promise<DiscountResponse>;

export type PostCreditNotesIdMarkAsSentInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type PostCreditNotesIdMarkAsSentHandler = (
  input: PostCreditNotesIdMarkAsSentInput,
) => Promise<CreditNote>;

export type PostInvoicesIdSendPaymentReminderInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type PostInvoicesIdSendPaymentReminderHandler = (
  input: PostInvoicesIdSendPaymentReminderInput,
) => Promise<Invoice>;

export type GetInvoicesIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type GetInvoicesIdHandler = (input: GetInvoicesIdInput) => Promise<InvoiceResponse>;

export type PutInvoicesIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
  body: Stable20240101UpdateInvoiceRequest;
};

export type PutInvoicesIdHandler = (input: PutInvoicesIdInput) => Promise<InvoiceResponse>;

export type DeleteInvoicesIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type DeleteInvoicesIdHandler = (
  input: DeleteInvoicesIdInput,
) => Promise<DeleteInvoiceEndpointProductDeleteInvoiceResponseModel>;

export type PatchInvoicesIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
  body: Stable20240101PatchInvoiceRequest;
};

export type PatchInvoicesIdHandler = (input: PatchInvoicesIdInput) => Promise<Invoice>;

export type GetCreditNotesIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type GetCreditNotesIdHandler = (input: GetCreditNotesIdInput) => Promise<CreditNote>;

export type PutCreditNotesIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
  body: UpdateCreditNoteEndpointUpdateCreditNoteRequestModel;
};

export type PutCreditNotesIdHandler = (input: PutCreditNotesIdInput) => Promise<CreditNote>;

export type DeleteCreditNotesIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type DeleteCreditNotesIdHandler = (input: DeleteCreditNotesIdInput) => Promise<CreditNote>;

export type PostInvoicesIdFinalizeAndSendInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type PostInvoicesIdFinalizeAndSendHandler = (
  input: PostInvoicesIdFinalizeAndSendInput,
) => Promise<Invoice>;

export type PostInvoicesIdVoidInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type PostInvoicesIdVoidHandler = (input: PostInvoicesIdVoidInput) => Promise<Invoice>;

export type PostInvoicesIdSendInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type PostInvoicesIdSendHandler = (input: PostInvoicesIdSendInput) => Promise<Invoice>;

export type PostCreditNotesIdVoidInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type PostCreditNotesIdVoidHandler = (
  input: PostCreditNotesIdVoidInput,
) => Promise<CreditNote>;

export type GetInvoicesIdDownloadInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type GetInvoicesIdDownloadHandler = (input: GetInvoicesIdDownloadInput) => Promise<void>;

export type PostInvoicesIdDraftInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type PostInvoicesIdDraftHandler = (input: PostInvoicesIdDraftInput) => Promise<Invoice>;

export type PutInvoicesIdPaymentStatusInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
  body: UpdateInvoicePaymentStatusEndpointRequestModel;
};

export type PutInvoicesIdPaymentStatusHandler = (
  input: PutInvoicesIdPaymentStatusInput,
) => Promise<Invoice>;

export type GetInvoicesIdCurrencyConversionsInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type GetInvoicesIdCurrencyConversionsHandler = (
  input: GetInvoicesIdCurrencyConversionsInput,
) => Promise<InvoiceCurrencyConversionsListResponse>;

export type PatchInvoicesIdSentInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
  body: PatchSentInvoiceEndpointPatchSentInvoiceRequest;
};

export type PatchInvoicesIdSentHandler = (input: PatchInvoicesIdSentInput) => Promise<Invoice>;

export type PostCreditNotesIdFinalizeAndSendInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type PostCreditNotesIdFinalizeAndSendHandler = (
  input: PostCreditNotesIdFinalizeAndSendInput,
) => Promise<CreditNote>;

export type PostInvoicesIdMarkAsSentInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type PostInvoicesIdMarkAsSentHandler = (
  input: PostInvoicesIdMarkAsSentInput,
) => Promise<Invoice>;

export type PostInvoicesIdFinalizeInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type PostInvoicesIdFinalizeHandler = (
  input: PostInvoicesIdFinalizeInput,
) => Promise<Invoice>;

export type PostCreditNotesIdFinalizeInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type PostCreditNotesIdFinalizeHandler = (
  input: PostCreditNotesIdFinalizeInput,
) => Promise<CreditNote>;

export type GetCreditNotesIdDownloadInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type GetCreditNotesIdDownloadHandler = (
  input: GetCreditNotesIdDownloadInput,
) => Promise<void>;

export type PostCreditNotesIdSendInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type PostCreditNotesIdSendHandler = (
  input: PostCreditNotesIdSendInput,
) => Promise<CreditNote>;
