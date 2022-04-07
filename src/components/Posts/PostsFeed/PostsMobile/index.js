import { useEffect, useState } from "react";
import React from "react";

import TimeAgo from "react-timeago";

import client from "../../../../providers/client";

import icon13 from "../../../../assets/svg/icon13.svg";
import iconModal from "../../../../assets/svg/iconmodal.svg";

import "../../../../global/global.css";

import {
  Img,
  Box,
  Flex,
  Text,
  Button,
  CircularProgress,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  FormControl,
  Textarea,
} from "@chakra-ui/react";

const PostsMobile = () => {
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(1);
  const [value, setValue] = React.useState(0);

  const { isOpen, onOpen, onClose } = useDisclosure();

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
            <Box display="flex" alignItems="center" justifyContent="flex-end">
              <Button
                _hover={{ background: "none" }}
                _active={{ background: "none" }}
                _focus={{ border: "none" }}
                bg="transparent"
                color="white"
                onClick={onOpen}
              >
                <Img src={iconModal} />
              </Button>
            </Box>
            <Box>
              <Modal isOpen={isOpen} onClose={onClose} size="full">
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader borderBottom="1px solid #EBEBEB">
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Button
                        _hover={{ background: "none" }}
                        _active={{ background: "none" }}
                        _focus={{ boxShadow: "none" }}
                        bg="transparent"
                        onClick={onClose}
                        fontSize="12px"
                        fontWeight="300"
                        lineHeight="21px"
                      >
                        Cancel
                      </Button>
                      <Box display="flex" alignItems="center">
                        <Text
                          fontWeight="400"
                          fontStyle="normal"
                          fontFamily="Open Sans"
                          fontSize="14px"
                          lineHeight="17px"
                          marginLeft="5px"
                          marginRight="5px"
                        >
                          {value}:140
                        </Text>
                        <Button
                          _hover={{ background: "#99DEE6" }}
                          _active={{ background: "#99DEE6" }}
                          _focus={{ boxShadow: "none" }}
                          borderRadius="10"
                          bg="#99DEE6"
                          color="white"
                          type="submit"
                          isDisabled={value > 140}
                          mr={1}
                        >
                          Petwittar
                        </Button>
                      </Box>
                    </Box>
                  </ModalHeader>
                  <ModalBody size="lg" w="400px">
                    <Box display="flex">
                      <FormControl
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Box marginBottom="40px">
                          <Img src={icon13} />
                        </Box>
                        <Textarea
                          _hover={{ background: "none" }}
                          _active={{ background: "none" }}
                          _focus={{ boxShadow: "none" }}
                          placeholder="O que está acontecendo?"
                          border="none"
                          type="text"
                          marginRight="30px"
                          onChange={(e) => setValue(e.target.value.length)}
                          isInvalid={value > 140}
                        />
                      </FormControl>
                    </Box>
                  </ModalBody>
                </ModalContent>
              </Modal>
            </Box>
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
