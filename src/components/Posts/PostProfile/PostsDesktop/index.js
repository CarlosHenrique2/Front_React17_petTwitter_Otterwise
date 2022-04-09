import { useEffect, useState } from "react";
import React from "react";

import { useParams } from "react-router-dom";

import InfiniteScroll from "react-infinite-scroll-component";

import TimeAgo from "react-timeago";
import Time from "react-timeago/lib/language-strings/en-short";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";

import client from "../../../../providers/client";

import icon13 from "../../../../assets/svg/icon13.svg";

import "../../../../global/global.css";

import { Img, Box, Flex, Text, CircularProgress } from "@chakra-ui/react";

import { WarningIcon } from "@chakra-ui/icons";

const ProfileDesktop = () => {
  const [page, setPage] = useState(1);
  const [post, setPost] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const setInitalPosts = 5;
  const postListLimit = post.length;

  const formatter = buildFormatter(Time);

  const { id } = useParams();

  const userStored = localStorage.getItem("user");
  const getFromStorage = JSON.parse(userStored);

  console.log(getFromStorage.id);
  console.log(id);

  /* obtendo a Lista na primeira renderização  */
  useEffect(async () => {
    await getData();
    console.log("oi sou o getData", getData());
  }, [id]);

  /* Fixa um limite para os posts */
  useEffect(() => {
    if (setInitalPosts >= postListLimit) {
      setHasMore(false);
      return;
    }
  }, [post]);

  const getDataAndNextPage = () => {
    setPage(page + 1);
    getData();
  };

  const getData = async () => {
    const res = await client.get(`/pages?id=${getFromStorage.id}`);
    setPost([...post, ...res.data.data.listPostId]);
  };

  console.log(post);

  return (
    <>
      <Box>
        {post?.map((data, i) => (
          <Box
            paddingLeft="30px"
            paddingBottom="10px"
            paddingTop="10px"
            w="700px"
            borderBottom="1px solid #EBEBEB"
            key={i * Math.random()}
            data={data}
          >
            <Box display="flex" alignItems="center">
              <Box paddingTop="5px">
                <Img src={icon13} />
              </Box>
              <Text
                fontWeight="700"
                fontSize="15px"
                fontFamily="Open Sans"
                fontStyle="normal"
                lineHeight="20px"
                paddingLeft="10px"
                paddingRight="2px"
              >
                {data.author.name}
              </Text>
              <Text
                color="#828282"
                fontFamily="Open Sans"
                fontStyle="normal"
                fontWeight="400"
                fontSize="15px"
                lineHeight="20px"
                marginLeft="2px"
                marginRight="2px"
              >
                {data.author.username}
              </Text>
              <Text marginLeft="2px" marginRight="2px">
                •
              </Text>
              <Text
                color="#828282"
                fontFamily="Open Sans"
                fontStyle="normal"
                fontWeight="400"
                fontSize="15px"
                lineHeight="20px"
              >
                <TimeAgo date={data.created_at} formatter={formatter} />
              </Text>
            </Box>
            <Box textAlign="start" display="flex" marginLeft="60px">
              <Text
                fontWeight="400"
                fontStyle="normal"
                fontFamily="Open Sans"
                fontSize="14px"
                lineHeight="22px"
              >
                {data.text}
              </Text>
            </Box>
          </Box>
        ))}

        {/*  InfiniteScroll  */}
        <InfiniteScroll
          dataLength={post.length}
          key={post.id}
          next={getDataAndNextPage}
          hasMore={hasMore}
          loader={
            <Box display="flex" justifyContent="center" paddingTop="10px">
              <CircularProgress isIndeterminate color="#99DEE6" />
            </Box>
          }
          endMessage={
            <Box
              display="flex"
              alignItems="center"
              flexDirection="column"
              paddingTop="10px"
            >
              <Box display="flex">
                <Text fontWeight="700" paddingBottom="10px" color="red.500">
                  Não Temos Mais Posts Para Você
                </Text>
              </Box>
              <Box>
                <WarningIcon w={8} h={8} color="red.500" />
              </Box>
            </Box>
          }
          refreshFunction={(e) => {
            return console.log("foi", e);
          }}
        >
          {/*  map  */}
          {post?.map((data, i) => (
            <Box
              paddingLeft="30px"
              paddingBottom="10px"
              paddingTop="10px"
              w="700px"
              borderBottom="1px solid #EBEBEB"
              key={i * Math.random()}
            >
              <Box display="flex" alignItems="center">
                <Box paddingTop="5px">
                  <Img src={icon13} />
                </Box>
                <Text
                  fontWeight="700"
                  fontSize="15px"
                  fontFamily="Open Sans"
                  fontStyle="normal"
                  lineHeight="20px"
                  paddingLeft="10px"
                  paddingRight="2px"
                >
                  {data.author.name}
                </Text>
                <Text
                  color="#828282"
                  fontFamily="Open Sans"
                  fontStyle="normal"
                  fontWeight="400"
                  fontSize="15px"
                  lineHeight="20px"
                  marginLeft="2px"
                  marginRight="2px"
                >
                  {data.author.username}
                </Text>
                <Text marginLeft="2px" marginRight="2px">
                  •
                </Text>
                <Text
                  color="#828282"
                  fontFamily="Open Sans"
                  fontStyle="normal"
                  fontWeight="400"
                  fontSize="15px"
                  lineHeight="20px"
                >
                  <TimeAgo date={data.created_at} formatter={formatter} />
                </Text>
              </Box>
              <Box textAlign="start" display="flex" marginLeft="60px">
                <Text
                  fontWeight="400"
                  fontStyle="normal"
                  fontFamily="Open Sans"
                  fontSize="14px"
                  lineHeight="22px"
                >
                  {data.text}
                </Text>
              </Box>
            </Box>
          ))}
          {/*  map  */}
        </InfiniteScroll>
        {/* InfiniteScrolls */}
      </Box>
    </>
  );
};

export default ProfileDesktop;
