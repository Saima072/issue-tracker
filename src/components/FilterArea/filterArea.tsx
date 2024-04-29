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
} from "@chakra-ui/react";
import React, { FunctionComponent, useState } from "react";
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

type FilterProps = {
  issues: any[]; // Update type to match your issue item type
  updateIssues: any;
};

export const FilterArea: FunctionComponent<FilterProps> = ({
  issues,
  updateIssues,
}) => {
  const [chips, setChips] = useState([
    { label: "UI", type: "tags", color: "red" },
    { label: "Frontend", type: "teams", color: "blue" },
    { label: "Bug", type: "categories", color: "green" },
    { label: "Low", type: "priorities", color: "orange" },
  ]);

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
      width={"fit-content"}
      border={"1px solid gray"}
      borderRadius={"10px"}
    >
      <Flex flexDirection="row" alignItems={"flex-start"}>
        <Flex flexDirection="column" m={"1rem"}>
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

        <Flex flexDirection="column" m={"1rem"} width={"230px"}>
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

        <Flex flexDirection="column" m={"1rem"} width={"230px"}>
          <Text>Filter By Team</Text>
          <Select
            variant="outline"
            placeholder="Select team"
            onChange={(event) =>
              handleAddChip(event, event.target.value, "teams", "blue")
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

        <Flex flexDirection="column" m={"1rem"} width={"230px"}>
          <Text>Filter By Tag</Text>
          <Select
            variant="outline"
            placeholder="Select tag"
            onChange={(event) =>
              handleAddChip(event, event.target.value, "tags", "red")
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
      <Flex flexDirection="row">
        <HStack m={"1rem"}>
          {chips.map((chip) => (
            <Tag
              border="1px solid gray"
              size={"sm"}
              key={chip.label}
              borderRadius="5px"
              p="5px"
              variant="outline"
              bg={chip.color}
            >
              <TagLabel fontSize={"12px"}>{chip.label}</TagLabel>
              <TagCloseButton
                boxSize={"5px"}
                bg={"transparent"}
                border={"none"}
                color={"white"}
                paddingLeft={"8px"}
                onClick={() => handleDelete(chip.label)}
                cursor={"pointer"}
              />
            </Tag>
          ))}
        </HStack>
      </Flex>
    </Flex>
  );
};
