import { createServerFn } from "@tanstack/react-start";

// A GA measurement ID is a public tag destination, not an API credential.
export const getTrackingConfig = createServerFn({ method: "GET" }).handler(() => {
  const measurementId = process.env['GOOGLE_ANALYTICS_MEASUREMENT_ID'];
  return { measurementId: measurementId && /^G-[A-Z0-9]+$/.test(measurementId) ? measurementId : null };
});