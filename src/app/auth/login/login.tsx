"use client";
import { Box } from "@chakra-ui/react";
import Icons, { IconsName } from "assets/icons";
import { Button, Text } from "components/atoms";
import { FormInput } from "components/molecules";
import Link from "next/link";

export default function LoginPage() {
  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box width="auto" height="auto" px="90" py="122">
        <Box display="flex" justifyContent="center">
          <Icons name={IconsName.logo} width={302.52} height={48} />
        </Box>

        <Box mt={62}>
          <FormInput
            label="Username"
            inputType="input"
            placeholder="Masukan Username"
            width={564}
          />

          <Box mt="25px">
            <FormInput
              label="Password"
              inputType="input"
              placeholder="Masukan Password"
              type="password"
              width={564}
            />
          </Box>
        </Box>

        <Box display="flex" justifyContent="space-between" mt="11px">
          <Link href="/auth/forget-password">
            <Text color="primary.hard" fontSize="12px">
              Lupa Password?
            </Text>
          </Link>
          <Link href="/auth/registration">
            <Text color="primary.hard" fontSize="12px">
              Buat akun PosKita?
            </Text>
          </Link>
        </Box>
        <Button typeButton="primary" mt="29px" full>
          Masuk
        </Button>
      </Box>
    </Box>
  );
}
