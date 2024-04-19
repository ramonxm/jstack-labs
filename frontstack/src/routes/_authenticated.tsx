import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: async ({ context }) => {
    const { isLogged } = context.auth;
    if (!isLogged()) {
      throw redirect({ to: "/login" });
    }
  },
});
