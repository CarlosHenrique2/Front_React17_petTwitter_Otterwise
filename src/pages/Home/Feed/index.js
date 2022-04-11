import React from "react";
import { useState, useEffect } from "react";

import "../../../global/global.css";

import client from "../../../providers/client";

import Menudesktop from "../../../components/menu/menu-desktop";
import Menumobile from "../../../components/menu/menu-mobile";

import Postsform from "../../../components/Form/Postsform";

import PostsDesktop from "../../../components/Posts/PostsFeed/PostsDesktop";
import PostsMobile from "../../../components/Posts/PostsFeed/PostsMobile";

import { Box, Flex } from "@chakra-ui/react";

function Feed() {
  const [page, setPage] = useState(1);
  const [post, setPost] = useState([]);

  const [refresh, setRefresh] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const getData = async () => {
    const res = await client.get(`/page?page=${page}`);
    console.log(res.data);
    setPost([...post, ...res.data]);
    if (!res.data.length) {
      setHasMore(false);
      return;
    }
    setHasMore(true);
  };

  useEffect(() => {
    getData();
    console.log(page);
  }, [page, refresh]);

  return (
    <>
      <Flex>
        <div className="feed-desktop">
          <Flex display="flex" align="center">
            <Menudesktop />
          </Flex>

          <Flex display="flex">
            <Box
              display="flex"
              flexDirection="column"
              borderRight="1px solid #EBEBEB"
              h="100vh"
            >
              <Postsform
                setRefresh={setRefresh}
                setPost={setPost}
                setPage={setPage}
              />
              <Box>
                <PostsDesktop
                  post={post}
                  setPage={setPage}
                  page={page}
                  hasMore={hasMore}
                />
              </Box>
            </Box>
          </Flex>
        </div>
      </Flex>

      {/*  divisão */}

      <Flex display="flex" flexDirection="column">
        <div className="feed-mobile">
          <Flex display="flex" flexDirection="column">
            <Menumobile />
          </Flex>
          <Box>
            <PostsMobile
              post={post}
              setPage={setPage}
              page={page}
              hasMore={hasMore}
              setRefresh={setRefresh}
              setPost={setPost}
            />
          </Box>
        </div>
      </Flex>
    </>
  );
}

export default Feed;
