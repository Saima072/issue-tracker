import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  ChakraProvider,
  Box,
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Flex,
} from "@chakra-ui/react";
import IssueCard from "./components/IssueCard";
import { LaneArea } from "./components/ListArea/laneArea";
import { FilterArea } from "./components/FilterArea/filterArea";

interface IssueItem {
  id: string;
  title: string;
  userName: string;
  userAvatar?: string;
  status: string;
  category: string;
  priority: string;
  team: string;
  tag: string[];
}

const App: React.FC = () => {
  const [issues, setIssues] = useState<IssueItem[]>([]);
  const [filteredIssues, setFilteredIssues] = useState<IssueItem[]>(issues);

  useEffect(() => {
    fetchJson();
  }, []);

  const fetchJson = () => {
    fetch("./issues.json")
      .then((response) => response.json())
      .then((data) => {
        const issuesData: IssueItem[] = data;
        setIssues(issuesData);
        setFilteredIssues(issuesData);
      })
      .catch((e: Error) => {
        console.log(e.message);
      });
  };

  return (
    <Flex
      flexDirection="column"
      bg={"#11071c"}
      className="container-fluid"
      minH="100vh" // Ensure at least full viewport height
      minW="100vw"
    >
      <Box
        width="-webkit-fill-available" // Responsive width
        margin="0 auto" // Center align on larger screens
        padding={{ base: 4, md: 6 }} // Responsive padding
      >
        <FilterArea issues={issues} setFilteredIssues={setFilteredIssues} />
      </Box>
      <Box
        width="-webkit-fill-available" // Responsive width
        margin="0 auto" // Center align on larger screens
        padding={{ base: 4, md: 6 }} // Responsive padding
      >
        <LaneArea finalissues={filteredIssues} />
      </Box>
    </Flex>
  );
};

export default App;
