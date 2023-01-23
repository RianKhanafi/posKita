"use client";
import { Box, Spinner } from "@chakra-ui/react";
import Icons, { IconsName } from "assets/icons";
import { Text } from "components/atoms";
import Link from "next/link";
import { useEffect } from "react";
import { selectAuth } from "store/features/auth";
import { useEmailVerificationMutation } from "store/features/auth/api";
import { useAppSelector } from "store/hook";
import { colors } from "theme/colors";

export default function () {
  const [increment] = useEmailVerificationMutation();
  const state = useAppSelector(selectAuth);

  useEffect(() => {
    increment({ email: "rian69691@gmail.com" });
  }, []);

  if (state.emailVerification === "success")
    return (
      <Box p="37px" height="100vh">
        <Box display="flex" justifyContent="space-between">
          <Icons name={IconsName.logo} />
          <Box width={130} display="flex" justifyContent="space-between">
            <Link href="/auth/signup">
              <Text
                _hover={{ color: colors.primary.hard }}
                fontWeight="medium"
                fontSize="16px"
                color="dark.medium"
                cursor="pointer"
              >
                Registrasi
              </Text>
            </Link>
            <Link href="/auth/signin">
              <Text
                _hover={{ color: colors.primary.hard }}
                fontWeight="medium"
                fontSize="16px"
                color="dark.medium"
                cursor="pointer"
              >
                Login
              </Text>
            </Link>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height="full"
        >
          <Box mb="48px">
            <Icons name={IconsName.emailConfirm} />
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box textAlign="center">
              <Text fontSize="26px" fontWeight="semibold" mb="17px">
                Verifikasi Berhasil
              </Text>
              <Text fontSize="22px" color="gray.hard">
                Akun anda sudah bisa digunakan, <br />
                <Text display="flex" justifyContent="center">
                  <Text>kembali ke</Text>&nbsp;
                  <Link href="/auth/signin">
                    <Text color="primary.hard" cursor="pointer">
                      Login
                    </Text>
                  </Link>
                </Text>
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    );

  if (state.emailVerification === "faild") {
    <div>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        h="100vh"
        w="100%"
      >
        Something when wron, please try again!
      </Box>
    </div>;
  }

  return (
    <div>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        h="100vh"
        w="100%"
      >
        <Spinner size="xl" color="primary.hard" />
      </Box>
    </div>
  );
}
