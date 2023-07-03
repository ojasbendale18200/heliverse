import React, { useEffect, useState } from "react";
import { data } from "../utils/data";
import { useDispatch, useSelector } from "react-redux";
import { getUsersData } from "../redux/action";
import UserCards from "./UserCards";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Select,
} from "@chakra-ui/react";
import Pagination from "./Pagination";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const userData = useSelector((store) => store.data);
  const dispatch = useDispatch();
  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const [domainFilter, setDomainFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [availabilityFilter, setAvailabilityFilter] = useState("");

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const totalPages = Math.ceil(userData.length / itemsPerPage);

  const filteredData = userData.filter((user) => {
    const matchesDomain = domainFilter === "" || user.domain === domainFilter;
    const matchesGender = genderFilter === "" || user.gender === genderFilter;
    const ability = availabilityFilter === "Available" ? true : false;
    const matchesAvailability =
      availabilityFilter === "" || user.available === ability;
    const matchesName =
      searchQuery === "" ||
      user.first_name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDomain && matchesGender && matchesAvailability && matchesName;
  });

  const usersData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = () => {
    setCurrentPage(1);
  };

  const handleDomainFilter = (value) => {
    console.log(value);
    setDomainFilter(value);
    setCurrentPage(1);
  };

  const handleGenderFilter = (value) => {
    setGenderFilter(value);
    setCurrentPage(1);
  };

  const handleAvailabilityFilter = (value) => {
    setAvailabilityFilter(value);
    setCurrentPage(1);
  };
  useEffect(() => {
    dispatch(getUsersData(data));
  }, [currentPage]);

  return (
    <Box>
      {/* Filters */}
      <Flex
        w={"80%"}
        flexDir={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
        margin={"auto"}
        my={"60px"}
        gap={"30px"}
      >
        <InputGroup>
          <Input
            placeholder="Search by Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleSearch}>
              Search
            </Button>
          </InputRightElement>
        </InputGroup>
        <Select
          placeholder="Select Domain"
          value={domainFilter}
          onChange={(e) => handleDomainFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="Sales">Sales</option>
          <option value="Finance">Finance</option>
          <option value="Marketing">Marketing</option>
          <option value="IT">IT</option>
          <option value="Management">Management</option>
        </Select>
        <Select
          placeholder="Select Gender"
          value={genderFilter}
          onChange={(e) => handleGenderFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Polygender">Polygender</option>
          <option value="Polygender"> Bigender</option>
        </Select>
        <Select
          placeholder="Select Availabiity"
          value={availabilityFilter}
          onChange={(e) => handleAvailabilityFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="Available">Available</option>
          <option value="Not Available">Not Available</option>
        </Select>
      </Flex>
      <Box
        width={"80%"}
        margin={"auto"}
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        gap="20px"
        justifyContent="center"
      >
        {usersData.map((user) => (
          <UserCards key={user.id} user={user} />
        ))}
      </Box>
      {/* Pagination */}
      <Box my={"50px"}>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </Box>
    </Box>
  );
}

export default Home;
