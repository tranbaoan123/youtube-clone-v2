import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import VideoDetail from "./components/VideoDetail/index.jsx";
import CardList from "./components/CardList/index.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <CardList /> },
      { path: "video/:id", element: <VideoDetail /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
