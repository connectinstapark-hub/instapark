import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { connectRequestEmail, validateConnectRequest, type ConnectRequest } from "./instaconnect";

const valid: ConnectRequest = { name: "Asha Shah", organization: "Lakeview Society", phone: "+91 7990317623", quantity: "50" };
describe("instaConnect requests", () => {
  test("requires Name, Organization/Society Name, Phone and Estimated Tag Quantity for bulk inquiries", () => {
    assert.deepEqual(Object.keys(validateConnectRequest({ name: "", organization: "", phone: "", quantity: "" }, "bulk")).sort(), ["name", "organization", "phone", "quantity"]);
    assert.deepEqual(validateConnectRequest(valid, "bulk"), {});
  });
  test("individual orders do not require an organization", () => {
    assert.deepEqual(validateConnectRequest({ ...valid, organization: "", quantity: "1" }, "individual"), {});
  });
  test("rejects fractional, zero and invalid quantities", () => {
    for (const quantity of ["0", "-1", "1.5", "abc", "1e3"]) assert.ok(validateConnectRequest({ ...valid, quantity }, "bulk").quantity);
  });
  test("rejects invalid phone input", () => {
    assert.ok(validateConnectRequest({ ...valid, phone: "123" }, "individual").phone);
  });
  test("prepares the correct individual or bulk request at the official contact email", () => {
    assert.ok(decodeURIComponent(connectRequestEmail(valid, "bulk")).includes("mailto:connect.instapark@gmail.com?subject=instaConnect — B2B bulk inquiry"));
    assert.ok(decodeURIComponent(connectRequestEmail(valid, "bulk")).includes("Organization / society: Lakeview Society"));
    assert.ok(decodeURIComponent(connectRequestEmail(valid, "individual")).includes("individual tag order request"));
  });
});