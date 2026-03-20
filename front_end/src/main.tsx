import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "@/App";
import "@/styles/reset.css";

async function enableMockingServer() {
  if (!import.meta.env.DEV) return;
  if (import.meta.env.VITE_ENABLE_MSW !== "true") return;

  const { worker } = await import("@/mocks/browsers");
  await worker.start({
    onUnhandledRequest: "bypass",
  });
}

enableMockingServer().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
