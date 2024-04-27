import React from "react";
import {
  Box,
  Text,
  Flex,
  ListItem,
  ListIcon,
  List,
  Image,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
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
    <div className="card">
      <Flex alignItems={"flex-start"}>
        <List
          w={"200px"}
          paddingLeft="10px"
          fontSize="12px"
          spacing={3}
          border={"1px solid gray"}
        >
          <ListItem flexDirection={"row"}>
            <Flex flexDirection={"row"} alignItems={"center"}>
              <Image
                w="23px"
                h="23px"
                borderRadius="50%"
                src={issue.userAvatar}
              />
              <Text paddingRight="5px" paddingLeft="5px">
                |
              </Text>
              <Text>{issue.userName}</Text>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex flexDirection={"row"} alignItems={"center"}>
              <SquaresFour weight="duotone" size={23} />
              <Text paddingRight="5px" paddingLeft="5px">
                |
              </Text>
              <Text>{issue.category}</Text>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex flexDirection={"row"} alignItems={"center"}>
              <Cube weight="duotone" size={23} />
              <Text paddingRight="5px" paddingLeft="5px">
                |
              </Text>
              <Text>{issue.priority}</Text>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex flexDirection={"row"} alignItems={"center"}>
              <Users weight="duotone" size={23} />
              <Text paddingRight="5px" paddingLeft="5px">
                |
              </Text>
              <Text>{issue.team}</Text>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex flexDirection={"row"} alignItems={"center"}>
              <Tag weight="duotone" size={23} />
              <Text paddingRight="5px" paddingLeft="5px">
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
    </div>
  );
};

export default IssueCard;
