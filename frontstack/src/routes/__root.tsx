import { IAuthContext } from "@app/contexts/AuthContext";
import { useAuth } from "@app/hooks/useAuth";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

interface AuthRouterContext {
  auth: IAuthContext;
}

export const Route = createRootRouteWithContext<AuthRouterContext>()({
  component: Root,
});

function Root() {
  const auth = useAuth();

  return (
    <>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" initialIsOpen={false} />
    </>
  );
}
