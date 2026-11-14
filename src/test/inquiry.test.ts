import { describe, expect, it } from "vitest";

import { inquirySchema, toInquiryRow } from "@/lib/inquiry";

const valid = {
  fullName: "Jane Smith",
  email: "jane@company.com",
  company: "",
  service: "Business Workflow Automation",
  budget: "",
  description: "We want to automate our lead intake from forms into HubSpot.",
};

describe("project inquiry form rules", () => {
  it("accepts a complete inquiry and treats empty optional fields as missing", () => {
    const result = inquirySchema.parse(valid);
    expect(result.company).toBeUndefined();
    expect(toInquiryRow(result)).toMatchObject({
      company: null,
      budget: null,
      full_name: "Jane Smith",
    });
  });

  it("requires a valid business email", () => {
    expect(inquirySchema.safeParse({ ...valid, email: "not-an-email" }).success).toBe(false);
  });

  it("requires a service to be chosen", () => {
    expect(inquirySchema.safeParse({ ...valid, service: "" }).success).toBe(false);
  });

  it("requires a project description of at least 20 characters", () => {
    expect(inquirySchema.safeParse({ ...valid, description: "Too short" }).success).toBe(false);
  });
});
