import { useEffect, useState } from "react";
import React from "react";

import InfiniteScroll from "react-infinite-scroll-component";

import TimeAgo from "react-timeago";

import client from "../../../../providers/client";

import icon13 from "../../../../assets/svg/icon13.svg";

import "../../../../global/global.css";

import { Img, Box, Flex, Text, CircularProgress } from "@chakra-ui/react";

const PostsDesktop = () => {
  const [post, setPost] = useState([]);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(async () => {
    await getdata();
  }, [page]);

  const getdata = async () => {
    const res = await client.get(`/page?page=${page}`);
    setPost([...post, ...res.data]);
  };

  const fetchData = async () => {};

  return (
    <>
      <Flex>
        <div className="feed-desktop">
          <Box>
            <Box>
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
                      <TimeAgo date={data.created_at} />
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
            </Box>

            {/*  InfiniteScroll  */}
            <InfiniteScroll
              dataLength={items.length}
              key={items.id}
              next={fetchData}
              hasMore={true}
              loader={
                <Box display="flex" justifyContent="center" paddingTop="10px">
                  <CircularProgress isIndeterminate color="#99DEE6" />
                </Box>
              }
              endMessage={
                <p style={{ textAlign: " centro" }}>
                  <b>Yay! Você já viu tudo </b>
                </p>
              }
            >
              {/*  map  */}
              {items?.map((data, i) => (
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
                      <TimeAgo date={data.created_at} />
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
              {console.log(items)}
            </InfiniteScroll>
            {/* InfiniteScrolls */}
          </Box>
        </div>
      </Flex>
    </>
  );
};

export default PostsDesktop;
