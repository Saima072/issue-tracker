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
} from "@chakra-ui/react";
import IssueCard from "./components/IssueCard";
import { LaneArea } from "./components/ListArea/laneArea";

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

  useEffect(() => {
    fetchJson();
  }, []);

  const fetchJson = () => {
    fetch("./issues.json")
      .then((response) => response.json())
      .then((data) => {
        const issuesData: IssueItem[] = data;
        setIssues(issuesData);
      })
      .catch((e: Error) => {
        console.log(e.message);
      });
  };

  return (
    <div>
      <LaneArea issues={issues} />
    </div>
  );
};

export default App;
