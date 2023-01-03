"use client";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { colors } from "theme/colors";
import { extendTheme } from "@chakra-ui/react";
import "styles/globals.css";
import Header from "components/organisme/header";
import Navbar from "components/organisme/navbar";
import { Provider } from "react-redux";
import store from "store";
import React, { useEffect } from "react";
import jsCookie from "js-cookie";
import { useAppDispatch, useAppSelector } from "store/hook";
import {
  IUserAuth,
  IUserData,
  selectAuth,
  setUserAuth,
} from "store/features/users";
import { useRouter } from "next/navigation";

const theme = extendTheme({ colors });

const Layout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(selectAuth);
  const router = useRouter();

  useEffect(() => {
    const userData = jsCookie.get("postkita");
    const data: IUserAuth<IUserData> = userData ? JSON.parse(userData) : null;

    if (data) {
      dispatch(setUserAuth(data));
      router.push("/dashboard");
    }
  }, []);

  // if (typeof window !== "undefined") {
  //   if (!state.isAuthenticate) {
  //     router.push("/dashboard/auth/signin");
  //     return null;
  //   }
  // }

  return (
    <React.Fragment>
      <nav className="">
        <Header />
      </nav>
      <Box display="flex">
        <Navbar />
        <Box mt="70px" ml="250px" width="100%" p="25px" backgroundColor="white">
          {children}
        </Box>
      </Box>
    </React.Fragment>
  );
};

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
            <React.Fragment>
              <Layout children={children} />
            </React.Fragment>
          </ChakraProvider>
        </Provider>
      </body>
    </html>
  );
}
