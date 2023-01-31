"use client";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { colors } from "theme/colors";
import { extendTheme } from "@chakra-ui/react";
import "styles/globals.css";
import { Provider } from "react-redux";
import store from "store";
import React from "react";
import { openSans } from "theme/font";

const breakpoints = {
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
};

export const theme = extendTheme({ colors, breakpoints });

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

      <body className={openSans.className}>
        <Provider store={store}>
          <ChakraProvider theme={theme}>
            <React.Fragment>{children}</React.Fragment>
          </ChakraProvider>
        </Provider>
      </body>
    </html>
  );
}
