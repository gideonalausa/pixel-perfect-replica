import { z } from "zod";

const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max, `Please keep this under ${max} characters`)
    .optional()
    .transform((v) => (v ? v : undefined));

export const inquirySchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name")
    .max(100, "Please keep your name under 100 characters"),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your business email")
    .email("Please enter a valid email address")
    .max(255, "Email is too long"),
  company: optionalText(120),
  service: z.string().trim().min(1, "Please choose the service you're interested in").max(120),
  budget: optionalText(60),
  description: z
    .string()
    .trim()
    .min(20, "Please share a little more detail (at least 20 characters)")
    .max(4000, "Please keep the description under 4,000 characters"),
});

export type InquiryInput = z.input<typeof inquirySchema>;
export type InquiryData = z.output<typeof inquirySchema>;

/** Maps validated form data to the database row shape. */
export function toInquiryRow(data: InquiryData) {
  return {
    full_name: data.fullName,
    email: data.email,
    company: data.company ?? null,
    service: data.service,
    budget: data.budget ?? null,
    description: data.description,
  };
}
