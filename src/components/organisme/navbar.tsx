"use client";

import { Box, color } from "@chakra-ui/react";
import { IconsName } from "assets/icons";
import { TextIcon } from "components/atoms";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { logout } from "store/features/auth";
import { useAppDispatch } from "store/hook";
import { colors } from "theme/colors";

interface menus {
  icon: IconsName;
  name: string;
  route: string;
}
const menus: menus[] = [
  {
    icon: IconsName.graph,
    name: "Dashboard",
    route: "/dashboard",
  },
  {
    icon: IconsName.pie,
    name: "Transaction",
    route: "/dashboard/transaction",
  },
  {
    icon: IconsName.box,
    name: "Product",
    route: "/dashboard/product",
  },
  {
    icon: IconsName.box,
    name: "Kategori",
    route: "/dashboard/category",
  },
  {
    icon: IconsName.box,
    name: "Pelanggan",
    route: "/dashboard/customer",
  },
  {
    icon: IconsName.bell,
    name: "Diskon",
    route: "/dashboard/discount",
  },
  {
    icon: IconsName.box,
    name: "Inventory",
    route: "/Dashboard",
  },
  {
    icon: IconsName.box,
    name: "Inventory",
    route: "/dashboard/users",
  },
];
export default function Navbar() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <Box
      width={250}
      height="100vh"
      p="22px"
      borderRight="1px"
      borderColor="#DFE0EB"
      backgroundColor="white"
      position="fixed"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
      >
        <Box mt={70}>
          {menus.map((elm, index) => (
            <div key={index}>
              <Link href={elm.route}>
                <Box
                  px="15px"
                  py="15px"
                  _hover={{
                    backgroundColor:
                      pathname === elm.route
                        ? colors.primary.medium
                        : colors.gray.soft,
                  }}
                  backgroundColor={pathname === elm.route ? "primary.hard" : ""}
                >
                  <TextIcon
                    color={pathname === elm.route ? "white" : "gray.medium"}
                    colorIcon={
                      pathname === elm.route ? "white" : colors.gray.medium
                    }
                    icon={elm?.icon}
                    ml="10px"
                  >
                    {elm.name}
                  </TextIcon>
                </Box>
              </Link>
            </div>
          ))}
        </Box>

        <Box>
          <Box
            px="15px"
            py="15px"
            _hover={{
              backgroundColor: colors.gray.soft,
            }}
          >
            <TextIcon
              color="gray.medium"
              icon={IconsName.logout}
              ml="10px"
              onClick={() => {
                dispatch(logout());
                // router.push("/dashboard/auth/signin");
              }}
            >
              Log Out
            </TextIcon>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
