import React from "react";

import { useNavigate } from "react-router-dom";

import InfiniteScroll from "react-infinite-scroll-component";

import TimeAgo from "react-timeago";
import Time from "react-timeago/lib/language-strings/en-short";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";

import icon13 from "../../../../assets/svg/icon13.svg";

import "../../../../global/global.css";

import { Img, Box, Flex, Text, CircularProgress } from "@chakra-ui/react";

import { WarningIcon } from "@chakra-ui/icons";

const PostsDesktop = (props) => {
  const { post, page, setPage, hasMore } = props;

  const navigate = useNavigate();

  const formatter = buildFormatter(Time);

  const getDataAndNextPage = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Flex>
        <div className="feed-desktop">
          <Box w="50vw">
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
            >
              {/*  map  */}

              {post?.map((data, i) => (
                <Box
                  display="flex"
                  flexDirection="row"
                  borderBottom="1px solid #EBEBEB"
                  paddingY="15px"
                  paddingRight="3rem"
                  paddingLeft="1.5rem"
                  gap="1.5rem"
                  key={i * Math.random()}
                >
                  <Box w="48px">
                    <Img src={icon13} />
                  </Box>
                  <Box
                    display="flex"
                    alignItems="flex-start"
                    flexDirection="column"
                    flex="1"
                  >
                    <Box display="flex" alignItems="center" paddingBottom="9px">
                      <Text
                        color="#757575"
                        fontWeight="700"
                        fontSize="14px"
                        fontFamily="Open Sans"
                        fontStyle="normal"
                        lineHeight="19px"
                        cursor="pointer"
                        onClick={() => {
                          navigate(`/Profile/${data.authorId}`);
                        }}
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
                        marginLeft="4px"
                        marginRight="4px"
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
                      >
                        <TimeAgo date={data.created_at} formatter={formatter} />
                      </Text>
                    </Box>
                    <Box
                      textAlign="start"
                      display="flex"
                      justifyContent="flex-start"
                    >
                      <Text
                        wordBreak="break-word"
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
                </Box>
              ))}
              {/*  map  */}
            </InfiniteScroll>
            {/* InfiniteScrolls */}
          </Box>
        </div>
      </Flex>
    </>
  );
};

export default PostsDesktop;
