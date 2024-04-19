import { AuthContext, useAuth } from "@app/contexts/AuthContext";
import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

interface MyRouterContext {
  auth: AuthContext;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: Root,
});

function Root() {
  const auth = useAuth();

  return (
    <>
      <div className="p-2 flex gap-2 text-lg">
        <Link
          to="/"
          activeProps={{
            className: "font-bold",
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>{" "}
        {auth.isAuthenticated ? (
          <Link
            to={"/dashboard"}
            activeProps={{
              className: "font-bold",
            }}
          >
            Dashboard
          </Link>
        ) : (
          <Link
            to={"/"}
            activeProps={{
              className: "font-bold",
            }}
            search={{ redirect: "/" }}
          >
            Login
          </Link>
        )}
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" initialIsOpen={false} />
    </>
  );
}
