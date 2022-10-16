import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import GamesPage from "./containers/GamesPage";
import NotFoundPage from "./containers/NotFoundPage";
import HomePage from "./containers/HomePage";
import GlobalStyles from "./global";
import { ThemeProvider } from "styled-components";
import { loader } from "./utils/utils";

/**
 * Default theme, add colors
 */
const theme = {
  colors: {
    white: "#FFF",
    gray: "#cecece",
    darkPurple: "#5a2161",
    lightPurple: "#a274a8",
  },
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomePage />}>
      <Route path="games/:gameId" element={<GamesPage />} loader={loader} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
