import { useAuth } from "@app/hooks/useAuth";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const auth = useAuth();

  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <p>
        <Link to="/dashboard" className="font-semibold">
          {auth.isLogged() ? "Go" : "Try going"} to the dashboard page
        </Link>
      </p>
    </div>
  );
}
