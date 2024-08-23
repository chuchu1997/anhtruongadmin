import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import "@mantine/core/styles.css";
// import { MantineProvider } from "@mantine/core";

import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    <App />
  </>
);
