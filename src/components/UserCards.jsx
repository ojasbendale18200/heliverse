import React from "react";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import { addTeam } from "../redux/action";


function UserCards({ user, access }) {
  const url = window.location.href;
  const valueAfter3000 = url.split(".app/")[1];

  const toast = useToast();
  const dispatch = useDispatch();
  const handleBook = (item) => {
    dispatch(addTeam(item));

    toast({
      title: "Item Added in team.",
      description: "",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleNotBook = () => {
    toast({
      title: "Person is Not Available.",
      description: "Please select available one",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Center py={6}>
      <Box
        maxW={"320px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Avatar
          size={"xl"}
          src={user?.avatar}
          alt={"Avatar Alt"}
          mb={4}
          pos={"relative"}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: user?.available ? "green.300" : "red.300",
            border: "2px solid white",
            rounded: "full",
            pos: "absolute",
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {user?.first_name} {user?.last_name}
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          {user?.email}
        </Text>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          {user?.gender}
        </Text>

        <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            {user?.domain}
          </Badge>
        </Stack>

        <Stack mt={8} direction={"row"} spacing={4}>
          {!valueAfter3000 ? (
            user?.available ? (
              <Button
                onClick={() => handleBook(user)}
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bg: "blue.500",
                }}
                _focus={{
                  bg: "blue.500",
                }}
              >
                Available
              </Button>
            ) : (
              <Button
                flex={1}
                onClick={handleNotBook}
                fontSize={"sm"}
                rounded={"full"}
                bg={"red.400"}
                color={"white"}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bg: "red.500",
                }}
                _focus={{
                  bg: "red.500",
                }}
              >
                Not Available
              </Button>
            )
          ) : null}
        </Stack>
      </Box>
    </Center>
  );
}

export default UserCards;
