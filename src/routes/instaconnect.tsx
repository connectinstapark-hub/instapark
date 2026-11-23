import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/instaconnect")({
  beforeLoad: () => { throw redirect({ to: "/instakonnect", statusCode: 301 }); },
});
