import React from "react";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CampsiteDetails, Campsites, ErrorPage } from "pages";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 2,
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Campsites /> },
      { path: "/campsite/:campsiteId", element: <CampsiteDetails /> },
    ],
  },
]);

const App = () => {
  // Prise en charge du thème clair/sombre avec persistance locale
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme }}
      >
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default App;
