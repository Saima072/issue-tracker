import React from "react";
import {
  Box,
  Text,
  Flex,
  ListItem,
  ListIcon,
  List,
  Image,
  Card,
} from "@chakra-ui/react";
import { Cube, SquaresFour, Tag, Users } from "@phosphor-icons/react";

interface IssueItem {
  id: string;
  title: string;
  userName: string;
  userAvatar: string;
  status: string;
  category: string;
  priority: string;
  team: string;
  tag: string[];
}

interface IssueCardProps {
  issue: IssueItem;
}

const IssueCard: React.FC<IssueCardProps> = ({ issue }) => {
  return (
    <Card>
      <Flex alignItems={"flex-start"}>
        <List
          w={"220px"}
          paddingLeft="5px"
          fontSize="12px"
          spacing={1}
          border={"1px solid gray"}
        >
          <ListItem
            flexDirection={"column"}
            paddingLeft={"3px"}
            paddingRight={"3px"}
          >
            <Flex
              flexDirection={"row"}
              alignItems={"center"}
              borderBottom={"1px solid gray"}
              paddingLeft={"3px"}
              paddingRight={"3px"}
            >
              <Image
                w="15px"
                h="15px"
                borderRadius="50%"
                src={issue.userAvatar}
              />
              <Text paddingRight="3px" paddingLeft="3px">
                |
              </Text>
              <Text>{issue.title}</Text>
            </Flex>
          </ListItem>
          <ListItem paddingLeft={"3px"} paddingRight={"3px"}>
            <Flex
              flexDirection={"row"}
              alignItems={"center"}
              borderBottom={"1px solid gray"}
              paddingLeft={"3px"}
              paddingRight={"3px"}
            >
              <SquaresFour weight="duotone" size={15} />
              <Text paddingRight="3px" paddingLeft="3px">
                |
              </Text>
              <Text>{issue.category}</Text>
            </Flex>
          </ListItem>
          <ListItem paddingLeft={"3px"} paddingRight={"3px"}>
            <Flex
              flexDirection={"row"}
              alignItems={"center"}
              borderBottom={"1px solid gray"}
              paddingLeft={"3px"}
              paddingRight={"3px"}
            >
              <Cube weight="duotone" size={15} />
              <Text paddingRight="3px" paddingLeft="3px">
                |
              </Text>
              <Text>{issue.priority}</Text>
            </Flex>
          </ListItem>
          <ListItem paddingLeft={"3px"} paddingRight={"3px"}>
            <Flex
              flexDirection={"row"}
              alignItems={"center"}
              borderBottom={"1px solid gray"}
              paddingLeft={"3px"}
              paddingRight={"3px"}
            >
              <Users weight="duotone" size={15} />
              <Text paddingRight="3px" paddingLeft="3px">
                |
              </Text>
              <Text>{issue.team}</Text>
            </Flex>
          </ListItem>
          <ListItem paddingLeft={"3px"} paddingRight={"3px"}>
            <Flex flexDirection={"row"} alignItems={"center"}>
              <Tag weight="duotone" size={15} />
              <Text paddingRight="3px" paddingLeft="3px">
                |
              </Text>
              <div>
                {issue.tag.length > 1 ? (
                  <Flex>
                    <Text>{issue.tag.join(", ")}</Text>
                  </Flex>
                ) : (
                  <Text>{issue.tag.join(", ")}</Text>
                )}
              </div>
            </Flex>
          </ListItem>
        </List>
      </Flex>
    </Card>
  );
};

export default IssueCard;
