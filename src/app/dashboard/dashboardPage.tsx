"use client";
import { Box, Flex } from "@chakra-ui/react";
import { LineChart, Text } from "components/atoms";

export default function DashboardPage() {
  return (
    <Box borderWidth="1px" borderRadius="lg">
      <Box display="flex">
        <Box width="75%" p="25px">
          <Box mb="32px" ml="15px">
            <Text fontSize="19px" fontWeight="bold">
              Dashboard Pendapatan
            </Text>
            <Text fontSize="12px" fontWeight="regular" color="gray.medium">
              as of 25 May 2019, 09:41 PM
            </Text>
          </Box>
          <LineChart />
        </Box>
        <Flex
          color="white"
          flexDirection="column"
          width="25%"
          borderLeftWidth="1px"
        >
          <Box flex="1" width="100%" borderBottomWidth="1px">
            a
          </Box>
          <Box flex="1" width="100%" borderBottomWidth="1px">
            q
          </Box>
          <Box flex="1" width="100%" borderBottomWidth="1px">
            a
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}