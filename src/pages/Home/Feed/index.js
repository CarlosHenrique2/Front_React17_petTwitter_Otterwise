import { useEffect, useState } from "react";
import React from "react";

import { useForm } from "react-hook-form";

import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../context/auth-context";

import TimeAgo from "react-timeago";
import frenchStrings from "react-timeago/lib/language-strings/fr";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";

import client from "../../../providers/client";

import profile00 from "../../../assets/img/profiledog.jpg";
import profile01 from "../../../assets/img/profile02.jpg";

import "../../../global/global.css";

import Menudesktop from "../../../components/menu/menu-desktop";
import Menumobile from "../../../components/menu/menu-mobile";

import InfiniteScroll from "../../../components/InfiniteScroll";

import {
  useDisclosure,
  Button,
  Img,
  Box,
  Flex,
  Textarea,
  Text,
  CircularProgress,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

function Feed() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = React.useState(0);
  const { register, handleSubmit } = useForm();
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(1);
  const [time, setTime] = useState();

  useEffect(async () => {
    await getdata();
  }, [page]);

  const getdata = async () => {
    const res = await client.get(`/page?page=${page}`);
    setPost([...post, ...res.data]);
  };

  const formatador = buildFormatter(frenchStrings);

  /*  const handleTime = (data) => {
    let timeSec = dayjs.duration(-1, "seconds").humanize(true);
    let timeMin = dayjs.duration(-1, "minutes").humanize(true);
    let timeHor = dayjs.duration(-1, "Hours").humanize(true);
    let timeHor1 = dayjs(post.created_at).fromNow(true);
  };
  console.log(post.created_at); */

  const onSubmit = (data) => console.log(data);

  let auth = useAuth();
  let navigate = useNavigate();
  const { pathname } = useLocation();

  /* const onSubmit = (event) => {
    console.log(event);
  }; */

  const handleClose = () => {
    onClose();
    setShowModal(true);
  };

  return (
    <>
      <Flex>
        <div className="feed-desktop">
          <Flex display="flex" align="center">
            <Menumobile />
            <Menudesktop />
          </Flex>

          <Flex display="flex">
            <Box
              display="flex"
              flexDirection="column"
              borderRight="1px solid #EBEBEB"
              h="100vh"
            >
              <Box
                display="flex"
                flexDirection="column"
                borderBottom="15px solid #E7ECF0"
              >
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Box
                    display="flex"
                    alignItems="center"
                    paddingTop="30px"
                    w="full"
                  >
                    <Box display="flex" paddingBottom="45px" paddingLeft="25px">
                      <Img src={profile00} />
                    </Box>
                    <Textarea
                      _hover={{ background: "none" }}
                      _active={{ background: "none" }}
                      _focus={{ boxShadow: "none" }}
                      placeholder="O que está acontecendo?"
                      {...register("text")}
                      border="none"
                      size="lg"
                      w="600px"
                      type="text"
                      onChange={(e) => setValue(e.target.value.length)}
                      isInvalid={value > 140}
                    />
                  </Box>
                  <Box display="flex" alignItems="center" w="full">
                    <Box w="full"></Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      marginBottom="15px"
                      marginRight="40px"
                      marginLeft="40px"
                    >
                      <Text marginRight="10px">{value}:140</Text>
                      <Button
                        _hover={{ background: "#99DEE6" }}
                        _active={{ background: "#99DEE6" }}
                        _focus={{ boxShadow: "none" }}
                        borderRadius="10"
                        w="full"
                        bg="#99DEE6"
                        color="white"
                        type="submit"
                        isDisabled={value > 140}
                      >
                        Petwittar
                      </Button>
                    </Box>
                  </Box>
                </form>
              </Box>

              {/* consume Posts */}

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
                <CircularProgress isIndeterminate color="#99DEE6" />
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
          </Flex>
        </div>
      </Flex>

      {/*  divisão */}

      <Flex display="flex" flexDirection="column">
        <div className="feed-mobile">
          <Flex display="flex" flexDirection="column">
            <Menumobile />
            <Menudesktop />
          </Flex>
          {/*  divisão */}
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
            <CircularProgress isIndeterminate color="#99DEE6" />
          </Box>
          {/*  divisão */}
        </div>
      </Flex>
    </>
  );
}

export default Feed;
