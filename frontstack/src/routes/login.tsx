import { useAuth } from "@app/hooks/useAuth";
import { createFileRoute, useRouter } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  const router = useRouter();
  const { isLogged, signIn, signOut } = useAuth();

  return (
    <>
      <h2>Login</h2>
      {isLogged() ? (
        <>
          <p>Hello user!</p>
          <button
            onClick={async () => {
              signOut();
              router.invalidate();
            }}
          >
            Sign out
          </button>
        </>
      ) : (
        <button
          onClick={async () => {
            signIn();
            router.invalidate();
          }}
        >
          Sign in
        </button>
      )}
    </>
  );
}
