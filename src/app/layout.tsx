"use client";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { colors } from "theme/colors";
import { extendTheme } from "@chakra-ui/react";
import "styles/globals.css";
import { Provider } from "react-redux";
import store from "store";
import React from "react";

const breakpoints = {
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
};

const theme = extendTheme({ colors, breakpoints });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>POSKita</title>
      </head>

      <body>
        <Provider store={store}>
          <ChakraProvider theme={theme}>
            <React.Fragment>{children}</React.Fragment>
          </ChakraProvider>
        </Provider>
      </body>
    </html>
  );
}
