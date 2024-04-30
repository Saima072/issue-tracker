import React, { FunctionComponent, useState } from "react";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import IssueCard from "../IssueCard";
import { MagnifyingGlass } from "@phosphor-icons/react";

type LaneProps = {
  finalissues: any[]; // Update type to match your issue item type
};

export const LaneArea: FunctionComponent<LaneProps> = ({ finalissues }) => {
  // State to store the search input value for each lane
  const [searchInputs, setSearchInputs] = useState<{ [key: string]: string }>({
    "To Do": "",
    "In Progress": "",
    Review: "",
    Resolved: "",
  });

  // Function to handle search input change for a specific lane
  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    status: string
  ) => {
    setSearchInputs({
      ...searchInputs,
      [status]: event.target.value,
    });
  };

  // Function to filter issues based on the search input for a specific lane
  const filterIssues = (issue: any, status: string) => {
    return issue.title
      .toLowerCase()
      .includes(searchInputs[status].toLowerCase());
  };

  // Render filtered issue list for a particular status
  const renderIssueList = (status: string) => {
    const filteredIssues = finalissues.filter(
      (finalissue) =>
        finalissue.status === status && filterIssues(finalissue, status)
    );

    return (
      <Flex
        flexDirection="column"
        m="0.5rem"
        border="1px solid gray"
        borderRadius="10px"
        p="0.5rem"
        width={"-webkit-fill-available"}
      >
        <Flex flexDirection="row">
          <Text fontSize="10px">{status}</Text>
          <InputGroup size="sm" ml="auto" width="150px">
            <Input
              type="text"
              value={searchInputs[status]}
              onChange={(e) => handleSearchInputChange(e, status)}
              bg="#302e32"
              color={"white"}
              outline={"none"}
              border={"1px solid gray"}
              borderRadius={"5px"}
            />
            <InputRightElement>
              <MagnifyingGlass />
            </InputRightElement>
          </InputGroup>
        </Flex>

        <Flex
          scrollBehavior="smooth"
          maxH="65vh"
          h="100%"
          direction="column"
          overflow="scroll"
          className="issue-list"
        >
          {filteredIssues.map((issue) => (
            <IssueCard key={issue.id} issue={issue} />
          ))}
        </Flex>
      </Flex>
    );
  };

  return (
    <Flex width="-webkit-fill-available">
      <Flex
        flexDirection="row"
        alignItems="flex-start"
        width="-webkit-fill-available"
      >
        <Flex
          className="lanearea1"
          flexDirection={"row"}
          width="-webkit-fill-available"
        >
          {renderIssueList("To Do")}
          {renderIssueList("In Progress")}
        </Flex>
        <Flex
          className="lanearea2"
          flexDirection={"row"}
          width="-webkit-fill-available"
        >
          {renderIssueList("Review")}
          {renderIssueList("Resolved")}
        </Flex>
      </Flex>
    </Flex>
  );
};
