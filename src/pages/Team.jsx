import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import UserCards from "../components/UserCards";

function Team() {
  const team = useSelector((store) => store.cart);

  return (
    <>
      <Heading textAlign={"center"}>Team List </Heading>
      <Box
        width={"80%"}
        margin={"auto"}
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        gap="20px"
        justifyContent="center"
      >
        {team.map((user) => (
          <UserCards key={user.id} user={user} access={false} />
        ))}
      </Box>
    </>
  );
}

export default Team;
