import { type Contact, contact } from "packages/models/src/contact.generated.ts";
import { z } from "zod";

export type ContactResponseModel = { items: Array<Contact> };

export const contactResponseModel = z.object({ items: z.array(contact) });
