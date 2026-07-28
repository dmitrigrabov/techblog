import { Hono } from "hono";
import type { Env } from "../env";
import { withAuth, type AuthVariables, type AuthUser } from "../middleware/auth";
import { toErrorResponse, validate } from "./errors";
import { z } from "zod";
import { createDb, type Db } from "../db";
import {
  getActivityLogs,
  getBillingSchedules,
  postBillingSchedules,
  getDiscounts,
  getBillingScheduleCustomFieldKeys,
  getCredits,
  postCredits,
  getBillingProducts,
  getPrices,
  postPrices,
  getUsageMetrics,
  postUsageMetrics,
  getUsageEvents,
  postUsageEvents,
  getSeatMetrics,
  postSeatMetrics,
  getSeatEvents,
  postSeatEvents,
  getSeatBalances,
  getQuotes,
  postCreditNoteApplications,
  getInvoices,
  postInvoices,
  getCreditNotes,
  postCreditNotes,
  getUsers,
  getSequenceAccounts,
  postCustomerOrganizations,
  getCustomerAliases,
  postCustomerAliases,
  getCustomers,
  postCustomers,
  getCustomerCustomPropertyKeys,
  getTaxRates,
  postTaxRates,
  getTaxRegistrations,
  postTaxRegistrations,
  getProducts,
  postProducts,
  getListPrices,
  postListPrices,
} from "./handlers/undefined";
import type { ActivityLogListResponse } from "packages/models/src/activityLogListResponse.generated.ts";
import type { ListBillingSchedulesResponse } from "packages/models/src/listBillingSchedulesResponse.generated.ts";
import {
  createBillingScheduleRequest,
  type CreateBillingScheduleRequest,
} from "packages/models/src/createBillingScheduleRequest.generated.ts";
import type { BillingScheduleResponse } from "packages/models/src/billingScheduleResponse.generated.ts";
import type { ListDiscountsResponse } from "packages/models/src/listDiscountsResponse.generated.ts";
import type { ListBillingScheduleCustomFieldKeysResponse } from "packages/models/src/listBillingScheduleCustomFieldKeysResponse.generated.ts";
import type { ListCreditGrantsResponse } from "packages/models/src/listCreditGrantsResponse.generated.ts";
import {
  createCreditGrantRequest,
  type CreateCreditGrantRequest,
} from "packages/models/src/createCreditGrantRequest.generated.ts";
import type { CreditGrantResponse2 } from "packages/models/src/creditGrantResponse2.generated.ts";
import type { ListBillingProductsResponse } from "packages/models/src/listBillingProductsResponse.generated.ts";
import type { PriceResponsePaginatedPriceResponseModel } from "packages/models/src/priceResponsePaginatedPriceResponseModel.generated.ts";
import {
  oneTimePriceRequest,
  type OneTimePriceRequest,
} from "packages/models/src/oneTimePriceRequest.generated.ts";
import {
  fixedPriceRequest,
  type FixedPriceRequest,
} from "packages/models/src/fixedPriceRequest.generated.ts";
import {
  linearPriceRequest,
  type LinearPriceRequest,
} from "packages/models/src/linearPriceRequest.generated.ts";
import {
  packagePriceRequest,
  type PackagePriceRequest,
} from "packages/models/src/packagePriceRequest.generated.ts";
import {
  seatBasedPriceRequest,
  type SeatBasedPriceRequest,
} from "packages/models/src/seatBasedPriceRequest.generated.ts";
import {
  graduatedPriceRequest,
  type GraduatedPriceRequest,
} from "packages/models/src/graduatedPriceRequest.generated.ts";
import {
  volumePriceRequest,
  type VolumePriceRequest,
} from "packages/models/src/volumePriceRequest.generated.ts";
import type { OneTimePriceResponse } from "packages/models/src/oneTimePriceResponse.generated.ts";
import type { FixedPriceResponse } from "packages/models/src/fixedPriceResponse.generated.ts";
import type { LinearPriceResponse } from "packages/models/src/linearPriceResponse.generated.ts";
import type { PackagePriceResponse } from "packages/models/src/packagePriceResponse.generated.ts";
import type { SeatBasedPriceResponse } from "packages/models/src/seatBasedPriceResponse.generated.ts";
import type { GraduatedPriceResponse } from "packages/models/src/graduatedPriceResponse.generated.ts";
import type { VolumePriceResponse } from "packages/models/src/volumePriceResponse.generated.ts";
import type { ListUsageMetricEndpointProductResponseModel } from "packages/models/src/listUsageMetricEndpointProductResponseModel.generated.ts";
import {
  createUsageMetricEndpointCreateUsageMetricRequestModel,
  type CreateUsageMetricEndpointCreateUsageMetricRequestModel,
} from "packages/models/src/createUsageMetricEndpointCreateUsageMetricRequestModel.generated.ts";
import type { CreateUsageMetricEndpointProductCreateUsageMetricResponseModel } from "packages/models/src/createUsageMetricEndpointProductCreateUsageMetricResponseModel.generated.ts";
import type { ListUsageEventEndpointEndpointResponseModel } from "packages/models/src/listUsageEventEndpointEndpointResponseModel.generated.ts";
import {
  createUsageEventEndpointCreateUsageEventRequestModel,
  type CreateUsageEventEndpointCreateUsageEventRequestModel,
} from "packages/models/src/createUsageEventEndpointCreateUsageEventRequestModel.generated.ts";
import type { CreateUsageEventEndpointProductCreateUsageEventResponseModel } from "packages/models/src/createUsageEventEndpointProductCreateUsageEventResponseModel.generated.ts";
import type { ListSeatMetricEndpointProductListSeatMetricPaginatedResponseModel } from "packages/models/src/listSeatMetricEndpointProductListSeatMetricPaginatedResponseModel.generated.ts";
import {
  createSeatMetricRequest,
  type CreateSeatMetricRequest,
} from "packages/models/src/createSeatMetricRequest.generated.ts";
import type { SeatMetric } from "packages/models/src/seatMetric.generated.ts";
import type { ListSeatEventsEndpointEndpointResponseModel } from "packages/models/src/listSeatEventsEndpointEndpointResponseModel.generated.ts";
import {
  createSeatEventEndpointCreateSeatEventRequestModel,
  type CreateSeatEventEndpointCreateSeatEventRequestModel,
} from "packages/models/src/createSeatEventEndpointCreateSeatEventRequestModel.generated.ts";
import type { CreateSeatEventEndpointProductCreateSeatEventResponseModel } from "packages/models/src/createSeatEventEndpointProductCreateSeatEventResponseModel.generated.ts";
import type { ListCustomerSeatBalancesEndpointListCustomerSeatBalancesPaginatedResponseModel } from "packages/models/src/listCustomerSeatBalancesEndpointListCustomerSeatBalancesPaginatedResponseModel.generated.ts";
import type { ListQuoteEndpointListQuotePaginatedResponseModel } from "packages/models/src/listQuoteEndpointListQuotePaginatedResponseModel.generated.ts";
import {
  createCreditNoteApplicationEndpointCreateCreditNoteApplicationRequestModel,
  type CreateCreditNoteApplicationEndpointCreateCreditNoteApplicationRequestModel,
} from "packages/models/src/createCreditNoteApplicationEndpointCreateCreditNoteApplicationRequestModel.generated.ts";
import type { ListInvoiceEndpointListInvoicePaginatedResponseModel } from "packages/models/src/listInvoiceEndpointListInvoicePaginatedResponseModel.generated.ts";
import {
  stable20240101CreateInvoiceRequest,
  type Stable20240101CreateInvoiceRequest,
} from "packages/models/src/stable20240101CreateInvoiceRequest.generated.ts";
import type { InvoiceResponse } from "packages/models/src/invoiceResponse.generated.ts";
import type { ListCreditNoteEndpointProductListCreditNotePaginatedResponseModel } from "packages/models/src/listCreditNoteEndpointProductListCreditNotePaginatedResponseModel.generated.ts";
import {
  createCreditNoteEndpointCreateCreditNoteRequestModel,
  type CreateCreditNoteEndpointCreateCreditNoteRequestModel,
} from "packages/models/src/createCreditNoteEndpointCreateCreditNoteRequestModel.generated.ts";
import type { CreditNote } from "packages/models/src/creditNote.generated.ts";
import type { ListSequenceUsersResponse } from "packages/models/src/listSequenceUsersResponse.generated.ts";
import type { ListSequenceAccountsResponse } from "packages/models/src/listSequenceAccountsResponse.generated.ts";
import {
  customerOrganizationRequest,
  type CustomerOrganizationRequest,
} from "packages/models/src/customerOrganizationRequest.generated.ts";
import type { CustomerOrganization } from "packages/models/src/customerOrganization.generated.ts";
import type { ListCustomerAliasPaginatedResponseModel } from "packages/models/src/listCustomerAliasPaginatedResponseModel.generated.ts";
import {
  createCustomerAliasRequestModel,
  type CreateCustomerAliasRequestModel,
} from "packages/models/src/createCustomerAliasRequestModel.generated.ts";
import type { CustomerAliasResponseModel } from "packages/models/src/customerAliasResponseModel.generated.ts";
import type { ListCustomerResponse } from "packages/models/src/listCustomerResponse.generated.ts";
import {
  createOrUpdateCustomerRequest,
  type CreateOrUpdateCustomerRequest,
} from "packages/models/src/createOrUpdateCustomerRequest.generated.ts";
import type { Customer } from "packages/models/src/customer.generated.ts";
import type { CustomerCustomPropertyKeysControllerListCustomerCustomPropertyKeysResponse } from "packages/models/src/customerCustomPropertyKeysControllerListCustomerCustomPropertyKeysResponse.generated.ts";
import type { ListResponse } from "packages/models/src/listResponse.generated.ts";
import {
  createTaxRateRequest,
  type CreateTaxRateRequest,
} from "packages/models/src/createTaxRateRequest.generated.ts";
import type { TaxRateResponse } from "packages/models/src/taxRateResponse.generated.ts";
import type { ListTaxRegistrationEndpointProductListTaxRegistrationPaginatedResponseModel } from "packages/models/src/listTaxRegistrationEndpointProductListTaxRegistrationPaginatedResponseModel.generated.ts";
import {
  createTaxRegistrationEndpointCreateTaxRegistrationRequestModel,
  type CreateTaxRegistrationEndpointCreateTaxRegistrationRequestModel,
} from "packages/models/src/createTaxRegistrationEndpointCreateTaxRegistrationRequestModel.generated.ts";
import type { CreateTaxRegistrationEndpointProductCreateTaxRegistrationResponseModel } from "packages/models/src/createTaxRegistrationEndpointProductCreateTaxRegistrationResponseModel.generated.ts";
import type { Stable20240730ListResponseModel } from "packages/models/src/stable20240730ListResponseModel.generated.ts";
import {
  stable20240730ProductRequest,
  type Stable20240730ProductRequest,
} from "packages/models/src/stable20240730ProductRequest.generated.ts";
import type { Stable20240730ProductResponse } from "packages/models/src/stable20240730ProductResponse.generated.ts";
import type { ListListPricesEndpointResponseModel } from "packages/models/src/listListPricesEndpointResponseModel.generated.ts";
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
import type { OneTimeListPriceResponse } from "packages/models/src/oneTimeListPriceResponse.generated.ts";
import type { FixedListPriceResponse } from "packages/models/src/fixedListPriceResponse.generated.ts";
import type { LinearListPriceResponse } from "packages/models/src/linearListPriceResponse.generated.ts";
import type { PackageListPriceResponse } from "packages/models/src/packageListPriceResponse.generated.ts";
import type { SeatBasedListPriceResponse } from "packages/models/src/seatBasedListPriceResponse.generated.ts";
import type { GraduatedListPriceResponse } from "packages/models/src/graduatedListPriceResponse.generated.ts";
import type { VolumeListPriceResponse } from "packages/models/src/volumeListPriceResponse.generated.ts";

export const app = new Hono<{ Bindings: Env; Variables: AuthVariables }>();

app.onError(toErrorResponse);

app.use("*", withAuth);

app.get(
  "/activity-logs",
  validate(
    "query",
    z.object({
      before: z.string().optional(),
      after: z.string().optional(),
      limit: z.coerce.number().int().optional(),
      sortOrder: z.string().optional(),
      activityLogObjectId: z.string().optional(),
      activityLogObjectEntityId: z.string().optional(),
    }),
  ),
  async (c) => {
    const db = createDb(c.env.DB);
    const query = c.req.valid("query");
    return c.json(await getActivityLogs({ db, env: c.env, user: c.var.user, query }));
  },
);
app.get(
  "/billing-schedules",
  validate(
    "query",
    z.object({
      customerId: z.string().optional(),
      billingScheduleStatus: z.string().optional(),
      autoSendInvoices: z.string().optional(),
      label: z.string().optional(),
      includeArchivedSchedules: z.string().optional(),
      startingBefore: z.string().optional(),
      startingAfter: z.string().optional(),
      endingBefore: z.string().optional(),
      endingAfter: z.string().optional(),
      includeOpenEndedSchedules: z.string().optional(),
      recurrenceDayOfMonth: z.string().optional(),
      sortBy: z.string().optional(),
      before: z.string().optional(),
      after: z.string().optional(),
      limit: z.coerce.number().int().optional(),
      sortOrder: z.string().optional(),
    }),
  ),
  async (c) => {
    const db = createDb(c.env.DB);
    const query = c.req.valid("query");
    return c.json(await getBillingSchedules({ db, env: c.env, user: c.var.user, query }));
  },
);
app.post("/billing-schedules", validate("json", createBillingScheduleRequest), async (c) => {
  const db = createDb(c.env.DB);
  const body = c.req.valid("json");
  return c.json(await postBillingSchedules({ db, env: c.env, user: c.var.user, body }), 201);
});
app.get(
  "/discounts",
  validate(
    "query",
    z.object({
      limit: z.coerce.number().int().optional(),
      after: z.string().optional(),
      before: z.string().optional(),
    }),
  ),
  async (c) => {
    const db = createDb(c.env.DB);
    const query = c.req.valid("query");
    return c.json(await getDiscounts({ db, env: c.env, user: c.var.user, query }));
  },
);
app.get("/billing-schedule-custom-field-keys", async (c) => {
  const db = createDb(c.env.DB);
  return c.json(await getBillingScheduleCustomFieldKeys({ db, env: c.env, user: c.var.user }));
});
app.get(
  "/credits",
  validate(
    "query",
    z.object({
      limit: z.coerce.number().int().optional(),
      after: z.string().optional(),
      before: z.string().optional(),
    }),
  ),
  async (c) => {
    const db = createDb(c.env.DB);
    const query = c.req.valid("query");
    return c.json(await getCredits({ db, env: c.env, user: c.var.user, query }));
  },
);
app.post("/credits", validate("json", createCreditGrantRequest), async (c) => {
  const db = createDb(c.env.DB);
  const body = c.req.valid("json");
  return c.json(await postCredits({ db, env: c.env, user: c.var.user, body }), 201);
});
app.get(
  "/billing-products",
  validate(
    "query",
    z.object({
      limit: z.coerce.number().int().optional(),
      after: z.string().optional(),
      before: z.string().optional(),
      name: z.string().optional(),
      taxCategoryId: z.string().optional(),
      recognitionMethod: z.string().optional(),
    }),
  ),
  async (c) => {
    const db = createDb(c.env.DB);
    const query = c.req.valid("query");
    return c.json(await getBillingProducts({ db, env: c.env, user: c.var.user, query }));
  },
);
app.get(
  "/prices",
  validate(
    "query",
    z.object({
      limit: z.coerce.number().int().optional(),
      after: z.string().optional(),
      before: z.string().optional(),
      sortOrder: z.string().optional(),
      currency: z.string().optional(),
      name: z.string().optional(),
      billingFrequency: z.string().optional(),
      productId: z.string().optional(),
    }),
  ),
  async (c) => {
    const db = createDb(c.env.DB);
    const query = c.req.valid("query");
    return c.json(await getPrices({ db, env: c.env, user: c.var.user, query }));
  },
);
app.post("/prices", validate("json", postPricesBody), async (c) => {
  const db = createDb(c.env.DB);
  const body = c.req.valid("json");
  return c.json(await postPrices({ db, env: c.env, user: c.var.user, body }), 201);
});
app.get(
  "/usage-metrics",
  validate(
    "query",
    z.object({
      limit: z.coerce.number().int().optional(),
      after: z.string().optional(),
      before: z.string().optional(),
      name: z.string().optional(),
      id: z.string().optional(),
      eventType: z.string().optional(),
      eventProperty: z.string().optional(),
      aggregationType: z.string().optional(),
    }),
  ),
  async (c) => {
    const db = createDb(c.env.DB);
    const query = c.req.valid("query");
    return c.json(await getUsageMetrics({ db, env: c.env, user: c.var.user, query }));
  },
);
app.post(
  "/usage-metrics",
  validate("json", createUsageMetricEndpointCreateUsageMetricRequestModel),
  async (c) => {
    const db = createDb(c.env.DB);
    const body = c.req.valid("json");
    return c.json(await postUsageMetrics({ db, env: c.env, user: c.var.user, body }), 201);
  },
);
app.get(
  "/usage-events",
  validate(
    "query",
    z.object({
      before: z.string().optional(),
      after: z.string().optional(),
      limit: z.coerce.number().int().optional(),
      sortOrder: z.string().optional(),
      offset: z.coerce.number().int().optional(),
      customerAlias: z.array(z.unknown()).optional(),
      unmappedAliasesOnly: z
        .preprocess((v) => (v === "true" ? true : v === "false" ? false : v), z.boolean())
        .optional(),
      eventType: z.string().optional(),
      eventId: z.string().optional(),
      eventTimestampBefore: z.string().optional(),
      eventTimestampAfter: z.string().optional(),
      sortBy: z.string().optional(),
    }),
  ),
  async (c) => {
    const db = createDb(c.env.DB);
    const query = c.req.valid("query");
    return c.json(await getUsageEvents({ db, env: c.env, user: c.var.user, query }));
  },
);
app.post(
  "/usage-events",
  validate("json", createUsageEventEndpointCreateUsageEventRequestModel),
  async (c) => {
    const db = createDb(c.env.DB);
    const body = c.req.valid("json");
    return c.json(await postUsageEvents({ db, env: c.env, user: c.var.user, body }), 201);
  },
);
app.get(
  "/seat-metrics",
  validate(
    "query",
    z.object({
      limit: z.coerce.number().int().optional(),
      after: z.string().optional(),
      before: z.string().optional(),
    }),
  ),
  async (c) => {
    const db = createDb(c.env.DB);
    const query = c.req.valid("query");
    return c.json(await getSeatMetrics({ db, env: c.env, user: c.var.user, query }));
  },
);
app.post("/seat-metrics", validate("json", createSeatMetricRequest), async (c) => {
  const db = createDb(c.env.DB);
  const body = c.req.valid("json");
  return c.json(await postSeatMetrics({ db, env: c.env, user: c.var.user, body }), 201);
});
app.get(
  "/seat-events",
  validate(
    "query",
    z.object({
      before: z.string().optional(),
      after: z.string().optional(),
      limit: z.coerce.number().int().optional(),
      sortOrder: z.string().optional(),
      customerAlias: z.string().optional(),
      customerIds: z.string().optional(),
      seatType: z.string().optional(),
      customerEventId: z.string().optional(),
      eventTimestampBefore: z.string().optional(),
      eventTimestampAfter: z.string().optional(),
      sortBy: z.string().optional(),
    }),
  ),
  async (c) => {
    const db = createDb(c.env.DB);
    const query = c.req.valid("query");
    return c.json(await getSeatEvents({ db, env: c.env, user: c.var.user, query }));
  },
);
app.post(
  "/seat-events",
  validate("json", createSeatEventEndpointCreateSeatEventRequestModel),
  async (c) => {
    const db = createDb(c.env.DB);
    const body = c.req.valid("json");
    return c.json(await postSeatEvents({ db, env: c.env, user: c.var.user, body }), 201);
  },
);
app.get(
  "/seat-balances",
  validate(
    "query",
    z.object({
      excludeZeroQuantity: z
        .preprocess((v) => (v === "true" ? true : v === "false" ? false : v), z.boolean())
        .optional(),
      customerAliases: z.string().optional(),
      customerIds: z.string().optional(),
    }),
  ),
  async (c) => {
    const db = createDb(c.env.DB);
    const query = c.req.valid("query");
    return c.json(await getSeatBalances({ db, env: c.env, user: c.var.user, query }));
  },
);
app.get(
  "/quotes",
  validate(
    "query",
    z.object({
      limit: z.coerce.number().int().optional(),
      after: z.string().optional(),
      before: z.string().optional(),
      customerId: z.string().optional(),
      includeArchived: z
        .preprocess((v) => (v === "true" ? true : v === "false" ? false : v), z.boolean())
        .optional(),
      status: z.string().optional(),
      createdBy: z.string().optional(),
      title: z.string().optional(),
      hasActiveApprovalWorkflow: z
        .preprocess((v) => (v === "true" ? true : v === "false" ? false : v), z.boolean())
        .optional(),
      sortBy: z.string().optional(),
      sortOrder: z.string().optional(),
    }),
  ),
  async (c) => {
    const db = createDb(c.env.DB);
    const query = c.req.valid("query");
    return c.json(await getQuotes({ db, env: c.env, user: c.var.user, query }));
  },
);
app.post(
  "/credit-note-applications",
  validate("json", createCreditNoteApplicationEndpointCreateCreditNoteApplicationRequestModel),
  async (c) => {
    const db = createDb(c.env.DB);
    const body = c.req.valid("json");
    return c.json(await postCreditNoteApplications({ db, env: c.env, user: c.var.user, body }));
  },
);
app.get(
  "/invoices",
  validate(
    "query",
    z.object({
      before: z.string().optional(),
      after: z.string().optional(),
      limit: z.coerce.number().int().optional(),
      sortOrder: z.enum(["ASC", "DESC"]).optional(),
      sortBy: z.string().optional(),
      invoiceStatus: z.string().optional(),
      invoicePaymentStatus: z.string().optional(),
      customerId: z.string().optional(),
      billingScheduleId: z.string().optional(),
      dueBefore: z.string().optional(),
      dueAfter: z.string().optional(),
      sentBefore: z.string().optional(),
      sentAfter: z.string().optional(),
      invoiceBefore: z.string().optional(),
      invoiceAfter: z.string().optional(),
      excludeZeroQuantity: z
        .preprocess((v) => (v === "true" ? true : v === "false" ? false : v), z.boolean())
        .optional(),
      invoiceCurrency: z.string().optional(),
      search: z.string().optional(),
      invoiceNumber: z.string().optional(),
      netTotal: z.coerce.number().optional(),
      excludeInvoiceStatus: z.string().optional(),
      excludeInvoicePaymentStatus: z.string().optional(),
      excludeCustomerId: z.string().optional(),
      excludeBillingScheduleId: z.string().optional(),
      excludeInvoiceCurrency: z.string().optional(),
      excludeInvoiceNumber: z.string().optional(),
      excludeNetTotal: z.coerce.number().optional(),
      excludeSearch: z.string().optional(),
    }),
  ),
  async (c) => {
    const db = createDb(c.env.DB);
    const query = c.req.valid("query");
    return c.json(await getInvoices({ db, env: c.env, user: c.var.user, query }));
  },
);
app.post("/invoices", validate("json", stable20240101CreateInvoiceRequest), async (c) => {
  const db = createDb(c.env.DB);
  const body = c.req.valid("json");
  return c.json(await postInvoices({ db, env: c.env, user: c.var.user, body }), 201);
});
app.get(
  "/credit-notes",
  validate(
    "query",
    z.object({
      before: z.string().optional(),
      after: z.string().optional(),
      limit: z.coerce.number().int().optional(),
      sortOrder: z.enum(["ASC", "DESC"]).optional(),
      sortBy: z.string().optional(),
      creditNoteStatus: z.string().optional(),
      customerId: z.string().optional(),
      sentBefore: z.string().optional(),
      sentAfter: z.string().optional(),
      searchCreditNoteNumber: z.string().optional(),
    }),
  ),
  async (c) => {
    const db = createDb(c.env.DB);
    const query = c.req.valid("query");
    return c.json(await getCreditNotes({ db, env: c.env, user: c.var.user, query }));
  },
);
app.post(
  "/credit-notes",
  validate("json", createCreditNoteEndpointCreateCreditNoteRequestModel),
  async (c) => {
    const db = createDb(c.env.DB);
    const body = c.req.valid("json");
    return c.json(await postCreditNotes({ db, env: c.env, user: c.var.user, body }), 201);
  },
);
app.get(
  "/users",
  validate(
    "query",
    z.object({
      limit: z.coerce.number().int().optional(),
      after: z.string().optional(),
      before: z.string().optional(),
    }),
  ),
  async (c) => {
    const db = createDb(c.env.DB);
    const query = c.req.valid("query");
    return c.json(await getUsers({ db, env: c.env, user: c.var.user, query }));
  },
);
app.get(
  "/sequence-accounts",
  validate(
    "query",
    z.object({
      limit: z.coerce.number().int().optional(),
      after: z.string().optional(),
      before: z.string().optional(),
    }),
  ),
  async (c) => {
    const db = createDb(c.env.DB);
    const query = c.req.valid("query");
    return c.json(await getSequenceAccounts({ db, env: c.env, user: c.var.user, query }));
  },
);
app.post("/customer-organizations", validate("json", customerOrganizationRequest), async (c) => {
  const db = createDb(c.env.DB);
  const body = c.req.valid("json");
  return c.json(await postCustomerOrganizations({ db, env: c.env, user: c.var.user, body }), 201);
});
app.get(
  "/customer-aliases",
  validate(
    "query",
    z.object({
      value: z.string().optional(),
      limit: z.coerce.number().int().optional(),
      after: z.string().optional(),
      before: z.string().optional(),
    }),
  ),
  async (c) => {
    const db = createDb(c.env.DB);
    const query = c.req.valid("query");
    return c.json(await getCustomerAliases({ db, env: c.env, user: c.var.user, query }));
  },
);
app.post("/customer-aliases", validate("json", createCustomerAliasRequestModel), async (c) => {
  const db = createDb(c.env.DB);
  const body = c.req.valid("json");
  return c.json(await postCustomerAliases({ db, env: c.env, user: c.var.user, body }), 201);
});
app.get(
  "/customers",
  validate(
    "query",
    z.object({
      sortBy: z.string().optional(),
      legalName: z.string().optional(),
      email: z.string().optional(),
      alias: z.string().optional(),
      label: z.string().optional(),
      includeArchived: z
        .preprocess((v) => (v === "true" ? true : v === "false" ? false : v), z.boolean())
        .optional(),
      billingStatus: z.enum(["ACTIVE", "INACTIVE"]).optional(),
      limit: z.coerce.number().int().optional(),
      after: z.string().optional(),
      before: z.string().optional(),
      sortOrder: z.enum(["ASC", "DESC"]).optional(),
    }),
  ),
  async (c) => {
    const db = createDb(c.env.DB);
    const query = c.req.valid("query");
    return c.json(await getCustomers({ db, env: c.env, user: c.var.user, query }));
  },
);
app.post("/customers", validate("json", createOrUpdateCustomerRequest), async (c) => {
  const db = createDb(c.env.DB);
  const body = c.req.valid("json");
  return c.json(await postCustomers({ db, env: c.env, user: c.var.user, body }), 201);
});
app.get("/customer-custom-property-keys", async (c) => {
  const db = createDb(c.env.DB);
  return c.json(await getCustomerCustomPropertyKeys({ db, env: c.env, user: c.var.user }));
});
app.get(
  "/tax-rates",
  validate(
    "query",
    z.object({
      limit: z.coerce.number().int().optional(),
      after: z.string().optional(),
      before: z.string().optional(),
    }),
  ),
  async (c) => {
    const db = createDb(c.env.DB);
    const query = c.req.valid("query");
    return c.json(await getTaxRates({ db, env: c.env, user: c.var.user, query }));
  },
);
app.post("/tax-rates", validate("json", createTaxRateRequest), async (c) => {
  const db = createDb(c.env.DB);
  const body = c.req.valid("json");
  return c.json(await postTaxRates({ db, env: c.env, user: c.var.user, body }), 201);
});
app.get(
  "/tax-registrations",
  validate(
    "query",
    z.object({
      limit: z.coerce.number().int().optional(),
      after: z.string().optional(),
      before: z.string().optional(),
    }),
  ),
  async (c) => {
    const db = createDb(c.env.DB);
    const query = c.req.valid("query");
    return c.json(await getTaxRegistrations({ db, env: c.env, user: c.var.user, query }));
  },
);
app.post(
  "/tax-registrations",
  validate("json", createTaxRegistrationEndpointCreateTaxRegistrationRequestModel),
  async (c) => {
    const db = createDb(c.env.DB);
    const body = c.req.valid("json");
    return c.json(await postTaxRegistrations({ db, env: c.env, user: c.var.user, body }), 201);
  },
);
app.get(
  "/products",
  validate(
    "query",
    z.object({
      name: z.string().optional(),
      limit: z.coerce.number().int().optional(),
      after: z.string().optional(),
      before: z.string().optional(),
    }),
  ),
  async (c) => {
    const db = createDb(c.env.DB);
    const query = c.req.valid("query");
    return c.json(await getProducts({ db, env: c.env, user: c.var.user, query }));
  },
);
app.post("/products", validate("json", stable20240730ProductRequest), async (c) => {
  const db = createDb(c.env.DB);
  const body = c.req.valid("json");
  return c.json(await postProducts({ db, env: c.env, user: c.var.user, body }), 201);
});
app.get(
  "/list-prices",
  validate(
    "query",
    z.object({
      currency: z.string().optional(),
      productId: z.string().optional(),
      billingFrequency: z.string().optional(),
      includeArchived: z
        .preprocess((v) => (v === "true" ? true : v === "false" ? false : v), z.boolean())
        .optional(),
      limit: z.coerce.number().int().optional(),
      after: z.string().optional(),
      before: z.string().optional(),
    }),
  ),
  async (c) => {
    const db = createDb(c.env.DB);
    const query = c.req.valid("query");
    return c.json(await getListPrices({ db, env: c.env, user: c.var.user, query }));
  },
);
app.post("/list-prices", validate("json", postListPricesBody), async (c) => {
  const db = createDb(c.env.DB);
  const body = c.req.valid("json");
  return c.json(await postListPrices({ db, env: c.env, user: c.var.user, body }), 201);
});

export type GetActivityLogsInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  query: {
    before?: string | undefined;
    after?: string | undefined;
    limit?: number | undefined;
    sortOrder?: string | undefined;
    activityLogObjectId?: string | undefined;
    activityLogObjectEntityId?: string | undefined;
  };
};

export type GetActivityLogsHandler = (
  input: GetActivityLogsInput,
) => Promise<ActivityLogListResponse>;

export type GetBillingSchedulesInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  query: {
    customerId?: string | undefined;
    billingScheduleStatus?: string | undefined;
    autoSendInvoices?: string | undefined;
    label?: string | undefined;
    includeArchivedSchedules?: string | undefined;
    startingBefore?: string | undefined;
    startingAfter?: string | undefined;
    endingBefore?: string | undefined;
    endingAfter?: string | undefined;
    includeOpenEndedSchedules?: string | undefined;
    recurrenceDayOfMonth?: string | undefined;
    sortBy?: string | undefined;
    before?: string | undefined;
    after?: string | undefined;
    limit?: number | undefined;
    sortOrder?: string | undefined;
  };
};

export type GetBillingSchedulesHandler = (
  input: GetBillingSchedulesInput,
) => Promise<ListBillingSchedulesResponse>;

export type PostBillingSchedulesInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  body: CreateBillingScheduleRequest;
};

export type PostBillingSchedulesHandler = (
  input: PostBillingSchedulesInput,
) => Promise<BillingScheduleResponse>;

export type GetDiscountsInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  query: { limit?: number | undefined; after?: string | undefined; before?: string | undefined };
};

export type GetDiscountsHandler = (input: GetDiscountsInput) => Promise<ListDiscountsResponse>;

export type GetBillingScheduleCustomFieldKeysInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
};

export type GetBillingScheduleCustomFieldKeysHandler = (
  input: GetBillingScheduleCustomFieldKeysInput,
) => Promise<ListBillingScheduleCustomFieldKeysResponse>;

export type GetCreditsInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  query: { limit?: number | undefined; after?: string | undefined; before?: string | undefined };
};

export type GetCreditsHandler = (input: GetCreditsInput) => Promise<ListCreditGrantsResponse>;

export type PostCreditsInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  body: CreateCreditGrantRequest;
};

export type PostCreditsHandler = (input: PostCreditsInput) => Promise<CreditGrantResponse2>;

export type GetBillingProductsInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  query: {
    limit?: number | undefined;
    after?: string | undefined;
    before?: string | undefined;
    name?: string | undefined;
    taxCategoryId?: string | undefined;
    recognitionMethod?: string | undefined;
  };
};

export type GetBillingProductsHandler = (
  input: GetBillingProductsInput,
) => Promise<ListBillingProductsResponse>;

export type GetPricesInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  query: {
    limit?: number | undefined;
    after?: string | undefined;
    before?: string | undefined;
    sortOrder?: string | undefined;
    currency?: string | undefined;
    name?: string | undefined;
    billingFrequency?: string | undefined;
    productId?: string | undefined;
  };
};

export type GetPricesHandler = (
  input: GetPricesInput,
) => Promise<PriceResponsePaginatedPriceResponseModel>;

export const postPricesBody = z.union([
  oneTimePriceRequest,
  fixedPriceRequest,
  linearPriceRequest,
  packagePriceRequest,
  seatBasedPriceRequest,
  graduatedPriceRequest,
  volumePriceRequest,
]);

export type PostPricesBody =
  | OneTimePriceRequest
  | FixedPriceRequest
  | LinearPriceRequest
  | PackagePriceRequest
  | SeatBasedPriceRequest
  | GraduatedPriceRequest
  | VolumePriceRequest;

export type PostPricesResponse =
  | OneTimePriceResponse
  | FixedPriceResponse
  | LinearPriceResponse
  | PackagePriceResponse
  | SeatBasedPriceResponse
  | GraduatedPriceResponse
  | VolumePriceResponse;

export type PostPricesInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  body: PostPricesBody;
};

export type PostPricesHandler = (input: PostPricesInput) => Promise<PostPricesResponse>;

export type GetUsageMetricsInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  query: {
    limit?: number | undefined;
    after?: string | undefined;
    before?: string | undefined;
    name?: string | undefined;
    id?: string | undefined;
    eventType?: string | undefined;
    eventProperty?: string | undefined;
    aggregationType?: string | undefined;
  };
};

export type GetUsageMetricsHandler = (
  input: GetUsageMetricsInput,
) => Promise<ListUsageMetricEndpointProductResponseModel>;

export type PostUsageMetricsInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  body: CreateUsageMetricEndpointCreateUsageMetricRequestModel;
};

export type PostUsageMetricsHandler = (
  input: PostUsageMetricsInput,
) => Promise<CreateUsageMetricEndpointProductCreateUsageMetricResponseModel>;

export type GetUsageEventsInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  query: {
    before?: string | undefined;
    after?: string | undefined;
    limit?: number | undefined;
    sortOrder?: string | undefined;
    offset?: number | undefined;
    customerAlias?: Array<unknown> | undefined;
    unmappedAliasesOnly?: boolean | undefined;
    eventType?: string | undefined;
    eventId?: string | undefined;
    eventTimestampBefore?: string | undefined;
    eventTimestampAfter?: string | undefined;
    sortBy?: string | undefined;
  };
};

export type GetUsageEventsHandler = (
  input: GetUsageEventsInput,
) => Promise<ListUsageEventEndpointEndpointResponseModel>;

export type PostUsageEventsInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  body: CreateUsageEventEndpointCreateUsageEventRequestModel;
};

export type PostUsageEventsHandler = (
  input: PostUsageEventsInput,
) => Promise<CreateUsageEventEndpointProductCreateUsageEventResponseModel>;

export type GetSeatMetricsInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  query: { limit?: number | undefined; after?: string | undefined; before?: string | undefined };
};

export type GetSeatMetricsHandler = (
  input: GetSeatMetricsInput,
) => Promise<ListSeatMetricEndpointProductListSeatMetricPaginatedResponseModel>;

export type PostSeatMetricsInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  body: CreateSeatMetricRequest;
};

export type PostSeatMetricsHandler = (input: PostSeatMetricsInput) => Promise<SeatMetric>;

export type GetSeatEventsInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  query: {
    before?: string | undefined;
    after?: string | undefined;
    limit?: number | undefined;
    sortOrder?: string | undefined;
    customerAlias?: string | undefined;
    customerIds?: string | undefined;
    seatType?: string | undefined;
    customerEventId?: string | undefined;
    eventTimestampBefore?: string | undefined;
    eventTimestampAfter?: string | undefined;
    sortBy?: string | undefined;
  };
};

export type GetSeatEventsHandler = (
  input: GetSeatEventsInput,
) => Promise<ListSeatEventsEndpointEndpointResponseModel>;

export type PostSeatEventsInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  body: CreateSeatEventEndpointCreateSeatEventRequestModel;
};

export type PostSeatEventsHandler = (
  input: PostSeatEventsInput,
) => Promise<CreateSeatEventEndpointProductCreateSeatEventResponseModel>;

export type GetSeatBalancesInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  query: {
    excludeZeroQuantity?: boolean | undefined;
    customerAliases?: string | undefined;
    customerIds?: string | undefined;
  };
};

export type GetSeatBalancesHandler = (
  input: GetSeatBalancesInput,
) => Promise<ListCustomerSeatBalancesEndpointListCustomerSeatBalancesPaginatedResponseModel>;

export type GetQuotesInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  query: {
    limit?: number | undefined;
    after?: string | undefined;
    before?: string | undefined;
    customerId?: string | undefined;
    includeArchived?: boolean | undefined;
    status?: string | undefined;
    createdBy?: string | undefined;
    title?: string | undefined;
    hasActiveApprovalWorkflow?: boolean | undefined;
    sortBy?: string | undefined;
    sortOrder?: string | undefined;
  };
};

export type GetQuotesHandler = (
  input: GetQuotesInput,
) => Promise<ListQuoteEndpointListQuotePaginatedResponseModel>;

export type PostCreditNoteApplicationsInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  body: CreateCreditNoteApplicationEndpointCreateCreditNoteApplicationRequestModel;
};

export type PostCreditNoteApplicationsHandler = (
  input: PostCreditNoteApplicationsInput,
) => Promise<void>;

export type GetInvoicesInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  query: {
    before?: string | undefined;
    after?: string | undefined;
    limit?: number | undefined;
    sortOrder?: ("ASC" | "DESC") | undefined;
    sortBy?: string | undefined;
    invoiceStatus?: string | undefined;
    invoicePaymentStatus?: string | undefined;
    customerId?: string | undefined;
    billingScheduleId?: string | undefined;
    dueBefore?: string | undefined;
    dueAfter?: string | undefined;
    sentBefore?: string | undefined;
    sentAfter?: string | undefined;
    invoiceBefore?: string | undefined;
    invoiceAfter?: string | undefined;
    excludeZeroQuantity?: boolean | undefined;
    invoiceCurrency?: string | undefined;
    search?: string | undefined;
    invoiceNumber?: string | undefined;
    netTotal?: number | undefined;
    excludeInvoiceStatus?: string | undefined;
    excludeInvoicePaymentStatus?: string | undefined;
    excludeCustomerId?: string | undefined;
    excludeBillingScheduleId?: string | undefined;
    excludeInvoiceCurrency?: string | undefined;
    excludeInvoiceNumber?: string | undefined;
    excludeNetTotal?: number | undefined;
    excludeSearch?: string | undefined;
  };
};

export type GetInvoicesHandler = (
  input: GetInvoicesInput,
) => Promise<ListInvoiceEndpointListInvoicePaginatedResponseModel>;

export type PostInvoicesInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  body: Stable20240101CreateInvoiceRequest;
};

export type PostInvoicesHandler = (input: PostInvoicesInput) => Promise<InvoiceResponse>;

export type GetCreditNotesInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  query: {
    before?: string | undefined;
    after?: string | undefined;
    limit?: number | undefined;
    sortOrder?: ("ASC" | "DESC") | undefined;
    sortBy?: string | undefined;
    creditNoteStatus?: string | undefined;
    customerId?: string | undefined;
    sentBefore?: string | undefined;
    sentAfter?: string | undefined;
    searchCreditNoteNumber?: string | undefined;
  };
};

export type GetCreditNotesHandler = (
  input: GetCreditNotesInput,
) => Promise<ListCreditNoteEndpointProductListCreditNotePaginatedResponseModel>;

export type PostCreditNotesInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  body: CreateCreditNoteEndpointCreateCreditNoteRequestModel;
};

export type PostCreditNotesHandler = (input: PostCreditNotesInput) => Promise<CreditNote>;

export type GetUsersInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  query: { limit?: number | undefined; after?: string | undefined; before?: string | undefined };
};

export type GetUsersHandler = (input: GetUsersInput) => Promise<ListSequenceUsersResponse>;

export type GetSequenceAccountsInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  query: { limit?: number | undefined; after?: string | undefined; before?: string | undefined };
};

export type GetSequenceAccountsHandler = (
  input: GetSequenceAccountsInput,
) => Promise<ListSequenceAccountsResponse>;

export type PostCustomerOrganizationsInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  body: CustomerOrganizationRequest;
};

export type PostCustomerOrganizationsHandler = (
  input: PostCustomerOrganizationsInput,
) => Promise<CustomerOrganization>;

export type GetCustomerAliasesInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  query: {
    value?: string | undefined;
    limit?: number | undefined;
    after?: string | undefined;
    before?: string | undefined;
  };
};

export type GetCustomerAliasesHandler = (
  input: GetCustomerAliasesInput,
) => Promise<ListCustomerAliasPaginatedResponseModel>;

export type PostCustomerAliasesInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  body: CreateCustomerAliasRequestModel;
};

export type PostCustomerAliasesHandler = (
  input: PostCustomerAliasesInput,
) => Promise<CustomerAliasResponseModel>;

export type GetCustomersInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  query: {
    sortBy?: string | undefined;
    legalName?: string | undefined;
    email?: string | undefined;
    alias?: string | undefined;
    label?: string | undefined;
    includeArchived?: boolean | undefined;
    billingStatus?: ("ACTIVE" | "INACTIVE") | undefined;
    limit?: number | undefined;
    after?: string | undefined;
    before?: string | undefined;
    sortOrder?: ("ASC" | "DESC") | undefined;
  };
};

export type GetCustomersHandler = (input: GetCustomersInput) => Promise<ListCustomerResponse>;

export type PostCustomersInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  body: CreateOrUpdateCustomerRequest;
};

export type PostCustomersHandler = (input: PostCustomersInput) => Promise<Customer>;

export type GetCustomerCustomPropertyKeysInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
};

export type GetCustomerCustomPropertyKeysHandler = (
  input: GetCustomerCustomPropertyKeysInput,
) => Promise<CustomerCustomPropertyKeysControllerListCustomerCustomPropertyKeysResponse>;

export type GetTaxRatesInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  query: { limit?: number | undefined; after?: string | undefined; before?: string | undefined };
};

export type GetTaxRatesHandler = (input: GetTaxRatesInput) => Promise<ListResponse>;

export type PostTaxRatesInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  body: CreateTaxRateRequest;
};

export type PostTaxRatesHandler = (input: PostTaxRatesInput) => Promise<TaxRateResponse>;

export type GetTaxRegistrationsInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  query: { limit?: number | undefined; after?: string | undefined; before?: string | undefined };
};

export type GetTaxRegistrationsHandler = (
  input: GetTaxRegistrationsInput,
) => Promise<ListTaxRegistrationEndpointProductListTaxRegistrationPaginatedResponseModel>;

export type PostTaxRegistrationsInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  body: CreateTaxRegistrationEndpointCreateTaxRegistrationRequestModel;
};

export type PostTaxRegistrationsHandler = (
  input: PostTaxRegistrationsInput,
) => Promise<CreateTaxRegistrationEndpointProductCreateTaxRegistrationResponseModel>;

export type GetProductsInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  query: {
    name?: string | undefined;
    limit?: number | undefined;
    after?: string | undefined;
    before?: string | undefined;
  };
};

export type GetProductsHandler = (
  input: GetProductsInput,
) => Promise<Stable20240730ListResponseModel>;

export type PostProductsInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  body: Stable20240730ProductRequest;
};

export type PostProductsHandler = (
  input: PostProductsInput,
) => Promise<Stable20240730ProductResponse>;

export type GetListPricesInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  query: {
    currency?: string | undefined;
    productId?: string | undefined;
    billingFrequency?: string | undefined;
    includeArchived?: boolean | undefined;
    limit?: number | undefined;
    after?: string | undefined;
    before?: string | undefined;
  };
};

export type GetListPricesHandler = (
  input: GetListPricesInput,
) => Promise<ListListPricesEndpointResponseModel>;

export const postListPricesBody = z.union([
  oneTimeListPriceRequest,
  fixedListPriceRequest,
  linearListPriceRequest,
  packageListPriceRequest,
  seatBasedListPriceRequest,
  graduatedListPriceRequest,
  volumeListPriceRequest,
]);

export type PostListPricesBody =
  | OneTimeListPriceRequest
  | FixedListPriceRequest
  | LinearListPriceRequest
  | PackageListPriceRequest
  | SeatBasedListPriceRequest
  | GraduatedListPriceRequest
  | VolumeListPriceRequest;

export type PostListPricesResponse =
  | OneTimeListPriceResponse
  | FixedListPriceResponse
  | LinearListPriceResponse
  | PackageListPriceResponse
  | SeatBasedListPriceResponse
  | GraduatedListPriceResponse
  | VolumeListPriceResponse;

export type PostListPricesInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  body: PostListPricesBody;
};

export type PostListPricesHandler = (input: PostListPricesInput) => Promise<PostListPricesResponse>;
