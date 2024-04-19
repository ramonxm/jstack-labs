import { useAuth } from "@app/contexts/AuthContext";
import {
  createLazyFileRoute,
  redirect,
  useNavigate,
} from "@tanstack/react-router";

export const Route = createLazyFileRoute("/dashboard")({
  beforeLoad: ({ context, location }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: "/",
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: Dashboard,
});

function Dashboard() {
  const navigate = useNavigate({ from: "/dashboard" });
  const auth = useAuth();

  const handleLogout = () => {
    auth.setUser(null);
    navigate({ to: "/" });
  };

  return (
    <div className="p-2">
      <h3>Dashboard page</h3>
      <p>Hi {auth.user}!</p>
      <p>If you can see this, that means you are authenticated.</p>
      <div className="mt-4">
        <button
          type="button"
          onClick={handleLogout}
          className="bg-slate-500 text-white py-2 px-4 rounded-md"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
