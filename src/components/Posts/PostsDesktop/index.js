import { useEffect, useState } from "react";
import React from "react";

import TimeAgo from "react-timeago";
import frenchStrings from "react-timeago/lib/language-strings/fr";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";

import client from "../../../providers/client";

import profile00 from "../../../assets/img/profiledog.jpg";
import profile01 from "../../../assets/img/profile02.jpg";

import "../../../global/global.css";

import { Img, Box, Flex, Text } from "@chakra-ui/react";

const PostsDesktop = () => {
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(async () => {
    await getdata();
  }, [page]);

  const getdata = async () => {
    const res = await client.get(`/page?page=${page}`);
    setPost([...post, ...res.data]);
  };

  /* const formatador = buildFormatter(frenchStrings); */

  return (
    <>
      <Flex>
        <div className="feed-desktop">
          <Box>
            <Box>
              {post?.map((data) => {
                return (
                  <Box
                    paddingLeft="30px"
                    paddingBottom="10px"
                    marginTop="10px"
                    w="700px"
                    borderBottom="1px solid #EBEBEB"
                  >
                    <Box display="flex" alignItems="center">
                      <Box paddingTop="5px">
                        <Img src={profile01} />
                      </Box>
                      <Text
                        fontWeight="bold"
                        paddingLeft="20px"
                        paddingRight="5px"
                      >
                        {data.author.name}
                      </Text>
                      <Text
                        color="#828282"
                        paddingLeft="5px"
                        paddingRight="5px"
                      >
                        {data.author.username}
                      </Text>
                      <Text paddingLeft="5px" paddingRight="5px">
                        •
                      </Text>
                      <Text color="#828282">
                        {/* {data.created_at} */}
                        <TimeAgo
                          date={Date.now()}
                          formatador={data.created_at}
                        />
                      </Text>
                    </Box>

                    <Box textAlign="start" display="flex" paddingLeft="60px">
                      <Text>{data.text}</Text>
                    </Box>
                  </Box>
                );
              })}
            </Box>
            {/*        {loading.data && ()} */}
            <InfiniteScroll
              fetchMore={() =>
                setPage((oldPage) => {
                  console.log(oldPage);
                  return oldPage + 1;
                })
              }
            />
            {/* consume Posts */}
          </Box>
        </div>
      </Flex>
    </>
  );
};

export default PostsDesktop;
