import { useEffect, useState } from "react";
import React from "react";

import { useAuth } from "../../../context/auth-context";

import TimeAgo from "react-timeago";
import frenchStrings from "react-timeago/lib/language-strings/fr";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";

import client from "../../../providers/client";

import profile00 from "../../../assets/img/profiledog.jpg";
import profile01 from "../../../assets/img/profile02.jpg";

import "../../../global/global.css";

import { Img, Box, Flex, Text } from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

const PostsMobile = () => {
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(async () => {
    await getdata();
  }, [page]);

  const getdata = async () => {
    const res = await client.get(`/page?page=${page}`);
    setPost([...post, ...res.data]);
  };

  return (
    <>
      <Flex display="flex" flexDirection="column">
        <div className="feed-mobile">
          <Box>
            <Box marginX="30px" marginY="20px">
              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
              >
                <Box marginX="5px" marginY="5px">
                  <Img src={profile00} />
                </Box>
                <Text fontWeight="bold" fontSize="14px">
                  Bill Bulldog
                </Text>
                <Text color="#828282" fontSize="14px">
                  @billthebulldog2022
                </Text>
                <Text>•</Text>
                <Text color="#828282" fontSize="14px">
                  14s
                </Text>
              </Box>

              <Box>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
                  dignissim eu lectus cursus. Porttitor viverra vitae tincidunt
                  et ipsum nibh sed blandit. Ullamcorper scelerisque eget
                  integer dui eu enim.
                </Text>
              </Box>
            </Box>
          </Box>
        </div>
      </Flex>
    </>
  );
};

export default PostsMobile;
