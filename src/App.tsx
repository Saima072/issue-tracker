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
  const [issues, updateIssues] = useState<IssueItem[]>([]);

  useEffect(() => {
    fetchJson();
  }, []);

  const fetchJson = () => {
    fetch("./issues.json")
      .then((response) => response.json())
      .then((data) => {
        const issuesData: IssueItem[] = data;
        updateIssues(issuesData);
      })
      .catch((e: Error) => {
        console.log(e.message);
      });
  };

  return (
    <Flex flexDirection="column" bg={"#2f2236"}>
      <FilterArea issues={issues} updateIssues={updateIssues} />
      <LaneArea issues={issues} updateIssues={updateIssues} />
    </Flex>
  );
};

export default App;
