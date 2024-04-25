import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./views/styles/global.css";

import { ThemeProvider } from "@app/contexts/ThemeContext";
import { BrowserRouter, Link } from "react-router-dom";
import { ThemeSwitcher } from "@views/components/modules/ThemeSwitcher";
import { routes } from "@app/routes";
import { Router } from "@app/routes/router";

const rootElement = document.getElementById("app")!;

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <header className="border-b p-6 mb-10 space-x-6">
          <Link to="/">Home</Link>
          <Link to={routes.createUser}>Criar usuário</Link>
        </header>
        <ThemeSwitcher />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
