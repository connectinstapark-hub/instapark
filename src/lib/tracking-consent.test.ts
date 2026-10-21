import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { permissions, requiresConsent } from "./tracking-consent";
describe("regional consent", () => {
  it("blocks unresolved and UK/EU regions until a choice", () => {
    for (const region of ["XX", "T1", "", "GB", "DE", "FR", "BR", "CA"]) {
      assert.equal(requiresConsent(region), true);
      assert.deepEqual(permissions(region, null, false), { analytics: false, advertising: false });
    }
  });
  it("allows ordinary tracking in India without a banner", () => {
    assert.equal(requiresConsent("IN"), false);
    assert.deepEqual(permissions("IN", null, false), { analytics: true, advertising: true });
  });
  it("never overrides explicit refusal with geography", () => {
    assert.deepEqual(permissions("IN", { analytics: false, advertising: false }, false), { analytics: false, advertising: false });
  });
  it("keeps advertising and analytics separate", () => {
    assert.deepEqual(permissions("DE", { analytics: true, advertising: false }, false), { analytics: true, advertising: false });
  });
  it("honors advertising opt-outs even after acceptance", () => {
    assert.deepEqual(permissions("IN", { analytics: true, advertising: true }, true), { analytics: true, advertising: false });
  });
});