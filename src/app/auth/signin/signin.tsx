"use client";
import { Box } from "@chakra-ui/react";
import Icons, { IconsName } from "assets/icons";
import { Button, Text } from "components/atoms";
import { FormInput } from "components/molecules";
import Link from "next/link";
import { useState } from "react";
import { authForm, selectAuth } from "store/features/auth";
import { useSigninMutation } from "store/features/auth/api";
import { useAppSelector } from "store/hook";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [increment] = useSigninMutation();
  const state = useAppSelector(selectAuth);

  const [form, setForm] = useState<authForm>({
    identifier: "kasirpos",
    password: "TopSecretPassw0|)",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm({ ...form, [name]: value } as Pick<authForm, keyof authForm>);
  };

  const onSubmit = () => increment(form);

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
            label="Username/Email"
            inputType="input"
            placeholder="Masukan Username/Email"
            name="identifier"
            width={564}
            onChange={onChange}
          />

          <Box mt="25px">
            <FormInput
              label="Password"
              inputType="input"
              placeholder="Masukan Password"
              type="password"
              name="password"
              width={564}
              onChange={onChange}
            />
          </Box>
        </Box>

        <Box display="flex" justifyContent="space-between" mt="11px">
          <Link href="/auth/forget-password">
            <Text color="primary.hard" fontSize="12px">
              Lupa Password?
            </Text>
          </Link>
          <Link href="/dashboard/auth/registration">
            <Text color="primary.hard" fontSize="12px">
              Buat akun PosKita?
            </Text>
          </Link>
        </Box>
        <Button
          typeButton="primary"
          mt="29px"
          full
          onClick={onSubmit}
          isLoading={state.signin.status === "loading"}
        >
          Masuk
        </Button>
      </Box>
    </Box>
  );
}
