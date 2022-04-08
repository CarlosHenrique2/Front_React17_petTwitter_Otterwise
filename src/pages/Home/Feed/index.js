import React from "react";
import { useState } from "react";

import InfiniteScroll from "react-infinite-scroll-component";

import "../../../global/global.css";

import Menudesktop from "../../../components/menu/menu-desktop";
import Menumobile from "../../../components/menu/menu-mobile";

import Postsform from "../../../components/Form/Postsform";

import PostsDesktop from "../../../components/Posts/PostsFeed/PostsDesktop";
import PostsMobile from "../../../components/Posts/PostsFeed/PostsMobile";

import { Box, Flex, StatHelpText } from "@chakra-ui/react";

function Feed() {
  const { state, setState } = useState();

  /*  setState({ items: Array.from({ length: 10 }) });

  const fetchMoreData = () => {
    setTimeout(() => {
      this.setState({
        items: state.items.concat(Array.from({ length: 10 })),
      });
    }, 1500);
  }; */

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
              <Postsform />
              <Box>
                <PostsDesktop />
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
            <PostsMobile />
            {/*             <InfiniteScroll
              dataLength={state.items.length}
              next={fetchMoreData()}
              loader={<h4>Loading...</h4>}
            >
              {state.items.map((i, index) => (
                <div>div - #{index}</div>
              ))}
            </InfiniteScroll> */}
          </Box>
        </div>
      </Flex>
    </>
  );
}

export default Feed;
