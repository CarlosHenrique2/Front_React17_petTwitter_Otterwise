import { useEffect, useState } from "react";
import React from "react";

import { useAuth } from "../../../context/auth-context";

import TimeAgo from "react-timeago";
import frenchStrings from "react-timeago/lib/language-strings/fr";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";

import client from "../../../providers/client";

import profile00 from "../../../assets/img/profiledog.jpg";
import profile01 from "../../../assets/img/profile01.jpg";

import icon13 from "../../../assets/svg/icon13.svg";
import iconModal from "../../../assets/svg/iconmodal.svg";

import "../../../global/global.css";

import {
  Img,
  Box,
  Flex,
  Text,
  Button,
  CircularProgress,
} from "@chakra-ui/react";

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
            {/* tt */}
            {post?.map((data) => {
              return (
                <Box marginX="10px" marginY="20px">
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-start"
                  >
                    <Box>
                      <Img src={icon13} />
                    </Box>
                    <Text
                      color="#757575"
                      fontWeight="700"
                      fontSize="14px"
                      fontFamily="Open Sans"
                      fontStyle="normal"
                      lineHeight="19px"
                      paddingLeft="10px"
                      paddingRight="5px"
                    >
                      {data.author.name}
                    </Text>
                    <Text
                      color="#757575"
                      fontFamily="Open Sans"
                      fontStyle="normal"
                      fontWeight="300"
                      fontSize="12px"
                      lineHeight="17px"
                      marginLeft="5px"
                      marginRight="5px"
                    >
                      {data.author.username}
                    </Text>
                    <Text>•</Text>
                    <Text
                      color="#757575"
                      fontFamily="Open Sans"
                      fontStyle="normal"
                      fontWeight="300"
                      fontSize="12px"
                      lineHeight="17px"
                      marginLeft="5px"
                      marginRight="5px"
                    >
                      <TimeAgo date={data.created_at} />
                    </Text>
                  </Box>

                  <Box textAlign="start" display="flex" marginLeft="60px">
                    <Text
                      color="#141619"
                      fontWeight="400"
                      fontStyle="normal"
                      fontFamily="Open Sans"
                      fontSize="14px"
                      lineHeight="17px"
                    >
                      {data.text}
                    </Text>
                  </Box>
                </Box>
              );
            })}
            <Box>
              <Button>
                {" "}
                <Img src={iconModal} />{" "}
              </Button>
            </Box>
            {/* tt */}
            <Box display="flex" justifyContent="center" paddingTop="10px">
              <CircularProgress isIndeterminate color="#99DEE6" />
            </Box>
          </Box>
        </div>
      </Flex>
    </>
  );
};

export default PostsMobile;
