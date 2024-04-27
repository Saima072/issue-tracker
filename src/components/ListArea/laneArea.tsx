import { Box, DarkMode, Flex } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import IssueCard from "../IssueCard";

type LaneProps = {
  issues: any[]; // Update type to match your issue item type
};

const renderIssueList = (issues: any[], status: string) => {
  const filteredIssues = issues.filter((issue) => issue.status === status);
  return (
    <div>
      <h2>{status}</h2>
      <Flex
        scrollBehavior="smooth"
        maxH="65vh"
        h="100%"
        w="100%"
        direction={"column"}
        overflow={"scroll"}
        className="issue-list"
      >
        {filteredIssues.map((issue) => (
          <IssueCard key={issue.id} issue={issue} />
        ))}
      </Flex>
    </div>
  );
};

export const LaneArea: FunctionComponent<LaneProps> = ({ issues }) => (
  <Box minW="20rem" minH="20rem" w="100%">
    <h1>Issue Tracker</h1>
    <Flex flexDirection="row" alignItems={"flex-start"}>
      {renderIssueList(issues, "To Do")}
      {renderIssueList(issues, "In Progress")}
      {renderIssueList(issues, "Review")}
      {renderIssueList(issues, "Resolved")}
    </Flex>
  </Box>
);
