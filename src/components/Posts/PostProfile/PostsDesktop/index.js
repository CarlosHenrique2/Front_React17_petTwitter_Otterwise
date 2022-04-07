import { useEffect, useState } from "react";
import React from "react";

import TimeAgo from "react-timeago";

import client from "../../../../providers/client";

import icon13 from "../../../../assets/svg/icon13.svg";

import "../../../../global/global.css";

import { Img, Box, Flex, Text, CircularProgress } from "@chakra-ui/react";

const postsDesktop = () => {
  /*  const [post, setPost] = useState([]);
  const [page, setPage] = useState(1); */

  useEffect(async () => {
    await getdata();
  }, [page]);

  const getdata = async () => {
    const res = await client.get(`/page?page=${page}`);
    setPost([...post, ...res.data]);
  };

  return <></>;
};

export default postsDesktop;
