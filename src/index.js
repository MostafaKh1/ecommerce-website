import React from "react"
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App"
import {BrowserRouter as Router} from "react-router-dom"
import {ContextProvider} from "./Context"
// import ConText from "./themeContext"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render( 

<StrictMode>
  <ContextProvider>
  <Router>
      <App />
    </Router>
  </ContextProvider>
</StrictMode>
)