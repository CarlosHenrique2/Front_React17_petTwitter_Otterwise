import React from "react";

import { useNavigate } from "react-router-dom";

import InfiniteScroll from "react-infinite-scroll-component";

import TimeAgo from "react-timeago";
import Time from "react-timeago/lib/language-strings/en-short";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";

import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAuth } from "../../../../context/auth-context";

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
  useToast,
} from "@chakra-ui/react";

import { WarningIcon } from "@chakra-ui/icons";

const schema = yup
  .object({
    text: yup.string().max(140),
  })
  .required();

const PostsMobile = (props) => {
  const { post, page, setPage, setPost, setRefresh, hasMore } = props;

  const [value, setValue] = React.useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { PostTwits } = useAuth();

  const { register, handleSubmit, resetField } = useForm({
    resolver: yupResolver(schema),
  });

  const toast = useToast();

  const onSubmit = async (data) => {
    const newPost = await PostTwits(data);
    resetField("text");
    if (newPost) {
      setPost([]);
      setPage(1);
      setRefresh((refresh) => !refresh);
    }
  };

  const navigate = useNavigate();

  const formatter = buildFormatter(Time);

  const getDataAndNextPage = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Flex display="flex" flexDirection="column">
        <div className="feed-mobile">
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
              <>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-end"
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-end"
                  ></Box>
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
              </>
            }
            refreshFunction={(e) => {
              return console.log("foi", e);
            }}
          >
            {post?.map((data, i) => (
              <Box
                borderBottom="1px solid #EBEBEB"
                paddingY="10px"
                key={i * Math.random()}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-start"
                >
                  <Box>
                    <Img marginLeft="16px" src={icon13} />
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Text
                      color="#757575"
                      fontWeight="700"
                      fontSize="14px"
                      fontFamily="Open Sans"
                      fontStyle="normal"
                      lineHeight="19px"
                      paddingLeft="8px"
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
                </Box>

                <Box
                  textAlign="start"
                  display="flex"
                  justifyContent="flex-start"
                >
                  <Flex paddingLeft="72px"></Flex>
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
            ))}
          </InfiniteScroll>

          <Box>
            <Modal isOpen={isOpen} onClose={onClose} size="full">
              <form onSubmit={handleSubmit(onSubmit)}>
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
                          onClick={() =>
                            toast({
                              title: "PostTwits Enviado Com sucesso",
                              status: "success",
                              duration: 9000,
                              isClosable: true,
                            })
                          }
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
                          {...register("text")}
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
              </form>
            </Modal>
          </Box>
        </div>
      </Flex>
    </>
  );
};

export default PostsMobile;
