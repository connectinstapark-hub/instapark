import { describe, expect, it } from "bun:test";
import { permissions, requiresConsent } from "./tracking-consent";
describe("regional consent", () => {
  it("blocks unresolved and UK/EU regions until a choice", () => {
    for (const region of ["XX", "T1", "", "GB", "DE", "FR", "BR", "CA"]) {
      expect(requiresConsent(region)).toBe(true);
      expect(permissions(region, null, false)).toEqual({ analytics: false, advertising: false });
    }
  });
  it("allows ordinary tracking in India without a banner", () => {
    expect(requiresConsent("IN")).toBe(false);
    expect(permissions("IN", null, false)).toEqual({ analytics: true, advertising: true });
  });
  it("never overrides explicit refusal with geography", () => {
    expect(permissions("IN", { analytics: false, advertising: false }, false)).toEqual({ analytics: false, advertising: false });
  });
  it("keeps advertising and analytics separate", () => {
    expect(permissions("DE", { analytics: true, advertising: false }, false)).toEqual({ analytics: true, advertising: false });
  });
  it("honors advertising opt-outs even after acceptance", () => {
    expect(permissions("IN", { analytics: true, advertising: true }, true)).toEqual({ analytics: true, advertising: false });
  });
});