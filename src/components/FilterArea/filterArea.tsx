import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
  Text,
  Select,
  HStack,
  Tag,
  TagLabel,
  TagCloseButton,
  Button,
} from "@chakra-ui/react";
import React, { FunctionComponent, useEffect, useState } from "react";
import IssueCard from "../IssueCard";
import { MagnifyingGlass } from "@phosphor-icons/react";

const categories = [
  { label: "Bug", value: "Bug" },
  { label: "Feature", value: "Feature" },
  { label: "Enhancement", value: "Enhancement" },
  { label: "Question", value: "Question" },
];
const priorities = [
  { label: "Low", value: "Low" },
  { label: "Medium", value: "Medium" },
  { label: "High", value: "High" },
  { label: "Critical", value: "Critical" },
];
const teams = [
  { label: "Frontend", value: "Frontend" },
  { label: "Backend", value: "Backend" },
  { label: "Design", value: "Design" },
  { label: "QA", value: "QA" },
];

const tags = [
  { label: "UI", value: "UI" },
  { label: "UX", value: "UX" },
  { label: "Authentication", value: "Authentication" },
  { label: "Security", value: "Security" },
  { label: "Performance", value: "Performance" },
];

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

type FilterProps = {
  issues: any[]; // Update type to match your issue item type
  setFilteredIssues: any;
};

export const FilterArea: FunctionComponent<FilterProps> = ({
  issues,
  setFilteredIssues,
}) => {
  const [chips, setChips] = useState([
    { label: "UI", type: "tags", color: "#911b1b" },
    { label: "Bug", type: "categories", color: "green" },
  ]);

  useEffect(() => {
    // Function to filter issues based on selected chips
    const filterIssues = (issues: IssueItem[]) => {
      return issues.filter((issue) => {
        return chips.every((chip) => {
          switch (chip.type) {
            case "categories":
              return issue.category === chip.label;
            case "priorities":
              return issue.priority === chip.label;
            case "teams":
              return issue.team === chip.label;
            case "tags":
              return issue.tag.includes(chip.label);
            default:
              return true;
          }
        });
      });
    };

    // Filter issues based on selected chips
    const filtered = filterIssues(issues);

    // Update filtered issues state
    setFilteredIssues(filtered);
  }, [chips, issues]);

  function handleAddChip(
    event: any,
    label: string,
    type: string,
    color: string
  ) {
    const newChip = { label, type, color };
    setChips([...chips, newChip]);
  }

  const handleDelete = (labelToDelete: string) => {
    const updatedChips = chips.filter((chip) => chip.label !== labelToDelete);
    setChips(updatedChips);
  };
  return (
    <Flex
      m={"0.5rem"}
      flexDirection={"column"}
      p={"0.5rem"}
      border={"1px solid gray"}
      borderRadius={"10px"}
      width={"-webkit-fill-available"}
    >
      <Flex
        flexDirection="row"
        width="-webkit-fill-available"
        alignItems={"flex-start"}
      >
        <Flex flexDirection="column" m={"1rem"} width={"22.5vw"}>
          <Text>Filter By Category</Text>
          <Select
            variant="filled"
            placeholder="Select category"
            onChange={(event) =>
              handleAddChip(event, event.target.value, "categories", "green")
            }
          >
            {categories
              .filter(
                (category) =>
                  !chips.some((chip) => chip.label === category.label)
              )
              .map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
          </Select>
        </Flex>

        <Flex flexDirection="column" m={"1rem"} width={"22.5vw"}>
          <Text>Filter By Priority</Text>
          <Select
            variant="filled"
            placeholder="Select priority"
            onChange={(event) =>
              handleAddChip(event, event.target.value, "priorities", "orange")
            }
          >
            {priorities
              .filter(
                (priority) =>
                  !chips.some((chip) => chip.label === priority.label)
              )
              .map((priority) => (
                <option key={priority.value} value={priority.value}>
                  {priority.label}
                </option>
              ))}
          </Select>
        </Flex>

        <Flex flexDirection="column" m={"1rem"} width={"22.5vw"}>
          <Text>Filter By Team</Text>
          <Select
            variant="outline"
            placeholder="Select team"
            onChange={(event) =>
              handleAddChip(event, event.target.value, "teams", "teal")
            }
          >
            {teams
              .filter(
                (team) => !chips.some((chip) => chip.label === team.label)
              )
              .map((team) => (
                <option key={team.value} value={team.value}>
                  {team.label}
                </option>
              ))}
          </Select>
        </Flex>

        <Flex flexDirection="column" m={"1rem"} width={"22.5vw"}>
          <Text>Filter By Tag</Text>
          <Select
            variant="outline"
            placeholder="Select tag"
            onChange={(event) =>
              handleAddChip(event, event.target.value, "tags", "#911b1b")
            }
          >
            {tags
              .filter((tag) => !chips.some((chip) => chip.label === tag.label))
              .map((tag) => (
                <option key={tag.value} value={tag.value}>
                  {tag.label}
                </option>
              ))}
          </Select>
        </Flex>
      </Flex>
      <Flex flexDirection="row" justifyContent={"space-between"}>
        <HStack m={"1rem"}>
          {chips.map((chip) => (
            <Tag
              size={"sm"}
              key={chip.label}
              borderRadius="10px"
              p="5px"
              variant="outline"
              bg={"transparent"}
              color={chip.color}
              borderColor={chip.color}
              border={"1px solid"}
            >
              <TagLabel fontSize={"12px"}>{chip.label}</TagLabel>
              <TagCloseButton
                boxSize={"5px"}
                bg={"transparent"}
                border={"none"}
                color={chip.color}
                paddingLeft={"8px"}
                onClick={() => handleDelete(chip.label)}
                cursor={"pointer"}
              />
            </Tag>
          ))}
        </HStack>
        <HStack>
          <Button
            height={"30px"}
            verticalAlign={"middle"}
            borderRadius={"5px"}
            bg={"transparent"}
            color={"lightblue"}
            marginRight={"10px"}
            border="1px solid lightblue"
            onClick={() => {
              setChips([]);
            }}
            cursor={"pointer"}
            disabled={chips.length === 0} // Disable the button when chips state is not empty
            _disabled={{ bg: "gray", color: "gray.500" }}
          >
            Reset Filters
          </Button>
        </HStack>
      </Flex>
    </Flex>
  );
};
