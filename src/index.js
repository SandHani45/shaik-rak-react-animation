import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalProvider } from "./context/global.context";

async function enableMocking() {
  if (process.env.NODE_ENV == "development") {
    const { worker } = await import("./mocks/browser");

    // `worker.start()` returns a Promise that resolves
    // once the Service Worker is up and ready to intercept requests.
    return worker.start();
  }

  return Promise.resolve();
}

enableMocking().then(() => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <GlobalProvider>
      <App />
    </GlobalProvider>
  );
});

reportWebVitals();
