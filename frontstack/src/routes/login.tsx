import { isAuthenticated, signOut, signIn } from "@app/utils/auth";
import { createFileRoute, useRouter } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  const router = useRouter();

  return (
    <>
      <h2>Login</h2>
      {isAuthenticated() ? (
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
