import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import {Provider} from "react-redux";
import store from "./store/store";

import {RouterProvider} from "react-router-dom";
import router from "./router/router";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store = {store}>
    <RouterProvider router = {router}>
      <StrictMode>
        <App />
      </StrictMode>
    </RouterProvider>
  </Provider>
);
