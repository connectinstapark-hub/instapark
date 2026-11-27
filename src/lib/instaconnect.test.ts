import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { connectRequestEmail, validateConnectRequest, type ConnectRequest } from "./instaconnect";

const valid: ConnectRequest = { name: "Asha Shah", organization: "Lakeview Society", phone: "+91 7990317623", city: "Ahmedabad", pack: "Family & Mobility Pack", quantity: "50" };
describe("instaKonnect requests", () => {
  test("requires Name, Organization/Society Name, Phone and Estimated Tag Quantity for bulk inquiries", () => {
    assert.deepEqual(Object.keys(validateConnectRequest({ name: "", organization: "", phone: "", city: "", pack: "", quantity: "" }, "bulk")).sort(), ["city", "name", "organization", "phone", "quantity"]);
    assert.deepEqual(validateConnectRequest(valid, "bulk"), {});
  });
  test("individual orders do not require an organization", () => {
    assert.deepEqual(validateConnectRequest({ ...valid, organization: "", quantity: "1" }, "individual"), {});
  });
  test("rejects fractional, zero and invalid quantities", () => {
    for (const quantity of ["0", "-1", "1.5", "abc", "1e3"]) assert.ok(validateConnectRequest({ ...valid, quantity }, "bulk").quantity);
  });
  test("individual orders require a city and a pack", () => {
    const e = validateConnectRequest({ ...valid, city: "", pack: "" }, "individual");
    assert.ok(e.city); assert.ok(e.pack);
  });
  test("rejects invalid phone input", () => {
    assert.ok(validateConnectRequest({ ...valid, phone: "123" }, "individual").phone);
  });
  test("prepares the correct individual or bulk request at the official contact email", () => {
    assert.ok(decodeURIComponent(connectRequestEmail(valid, "bulk")).includes("mailto:connect.instapark@gmail.com?subject=instaKonnect — B2B bulk inquiry"));
    assert.ok(decodeURIComponent(connectRequestEmail(valid, "bulk")).includes("Organization / society: Lakeview Society"));
    assert.ok(decodeURIComponent(connectRequestEmail(valid, "individual")).includes("individual / family pack order request"));
  });
});
import { validateLead, leadEmail, type LeadField } from "./instaconnect";
describe("instaKonnect vertical lead forms", () => {
  const fields: LeadField[] = [{ key: "name", label: "Contact Person", type: "text", autoComplete: "name" }, { key: "phone", label: "Phone", type: "tel", autoComplete: "tel" }, { key: "flats", label: "Total Flats", type: "number", autoComplete: "off" }];
  test("flags every empty field", () => { assert.deepEqual(Object.keys(validateLead(fields, {})).sort(), ["flats", "name", "phone"]); });
  test("rejects a bad phone and zero quantity", () => { assert.deepEqual(Object.keys(validateLead(fields, { name: "A", phone: "12", flats: "0" })).sort(), ["flats", "phone"]); });
  test("emails the contact address", () => { assert.ok(leadEmail("Pilot", fields, { name: "A", phone: "+917990317623", flats: "50" }).startsWith("mailto:connect.instapark@gmail.com?subject=Pilot")); });
});
