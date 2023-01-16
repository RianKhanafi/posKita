"use client";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { colors } from "theme/colors";
import { extendTheme } from "@chakra-ui/react";
import "styles/globals.css";
import { Provider } from "react-redux";
import store from "store";
import React from "react";
import { SessionProvider } from "next-auth/react";

const theme = extendTheme({ colors });

interface IProps {
  children: React.ReactNode;
  session: any;
}
export default function RootLayout({ children, session }: IProps) {
  return (
    <html>
      <head>
        <title>POSKita</title>
      </head>

      <body>
        {/* <SessionProvider session={session}> */}
        <Provider store={store}>
          <ChakraProvider theme={theme}>
            <React.Fragment>{children}</React.Fragment>
          </ChakraProvider>
        </Provider>
        {/* </SessionProvider> */}
      </body>
    </html>
  );
}
