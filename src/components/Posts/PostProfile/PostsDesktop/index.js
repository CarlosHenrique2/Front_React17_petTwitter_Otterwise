import { useEffect, useState } from "react";
import React from "react";

import TimeAgo from "react-timeago";

import client from "../../../../providers/client";

import icon13 from "../../../../assets/svg/icon13.svg";

import "../../../../global/global.css";

import { Img, Box, Flex, Text, CircularProgress } from "@chakra-ui/react";

const Profileposts = () => {
  const [page, setPage] = useState([]);
  const [id, setID] = useState(1);

  useEffect(async () => {
    await getdata();
  }, [id]);

  const getdata = async () => {
    const res = await client.get(`/pages?id=${23}`);
    setID([...page, ...res.data]);
  };

  return (
    <>
      <Box>
        {page?.map((data, i) => (
          <Box
            paddingLeft="30px"
            paddingBottom="10px"
            paddingTop="10px"
            w="700px"
            borderBottom="1px solid #EBEBEB"
            key={i * Math.random()}
          >
            {data.results.id}
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
                {data.results.author.name}
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
                {data.results.author.username}
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
                <TimeAgo date={data.results.created_at} />
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
                {data.results.text}
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Profileposts;
