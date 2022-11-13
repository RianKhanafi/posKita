"use client";
import { ChakraProvider } from "@chakra-ui/react";
import Link from "next/link";
import { colors } from "theme/colors";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({ colors });

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
        <ChakraProvider theme={theme}>
          <nav className="">
            <Link href="/">Home</Link>
            <Link href="/admin">Dashboard</Link>
          </nav>
          <div>{children}</div>
        </ChakraProvider>
      </body>
    </html>
  );
}