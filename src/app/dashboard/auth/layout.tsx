"use client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { colors } from "theme/colors";

const theme = extendTheme({ colors });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <div>
          <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </div>
      </body>
    </html>
  );
}
