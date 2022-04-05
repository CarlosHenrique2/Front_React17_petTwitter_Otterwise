import { useEffect, useState } from "react";
import React from "react";

import { useForm } from "react-hook-form";

import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../context/auth-context";

import client from "../../../providers/client";

import profile00 from "../../../assets/img/profiledog.jpg";
import profile01 from "../../../assets/img/profile02.jpg";
import profile03 from "../../../assets/img/profile03.jpg";
import profile04 from "../../../assets/img/profile04.jpg";
import profile05 from "../../../assets/img/profile05.jpg";

import icon02 from "../../../assets/svg/icon02.svg";
import icon03 from "../../../assets/svg/icon03.svg";
import icon08 from "../../../assets/svg/icon08.svg";
import icon07 from "../../../assets/svg/icon07.svg";
import icon09 from "../../../assets/svg/icon09.svg";
import icon10 from "../../../assets/svg/icon10.svg";
import iconexit from "../../../assets/svg/iconexit.svg";

import "./index.css";
import "../../../global/global.css";

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button,
  Img,
  Link,
  Box,
  Flex,
  HStack,
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
  const [page, setpage] = useState(1);

  useEffect(async () => {
    await getdata();
  }, [page]);

  const getdata = async () => {
    const res = await client.get(`/posts?page=${page}`);
    setPost([...post, ...res.data]);
    /* setPost([...post, await client.get(`/posts?page=${page + 1}`).data]); */
  };

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
      <div className="feed-mobile">
        <Box
          className="feed-mobile"
          display="flex"
          alignItems="center"
          boxShadow="0px 0px 1px grey"
        >
          <HStack spacing="50">
            <Box display="flex" alignItems="center" justifyContent="center">
              <Button
                _hover={{ background: "none" }}
                _active={{ background: "none" }}
                _focus={{ boxShadow: "none" }}
                colorScheme="teal"
                background="none"
                color="#00acc1"
                size="lg"
                onClick={onOpen}
              >
                <HamburgerIcon bgSize="lg" />
              </Button>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Img src={icon02} w="30px" />
              <Img src={icon03} w="80px" />
            </Box>
          </HStack>
          <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xs">
            <DrawerOverlay />
            <DrawerContent maxW="258px">
              <DrawerHeader
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Img src={profile00} />
              </DrawerHeader>

              <DrawerBody
                display="flex"
                alignItems="flex-start"
                flexDirection="column"
                textAlign="center"
                size="xs"
              >
                <Link
                  _focus={{ background: "#E6F7F9" }}
                  _active={{ borderLeft: "5px solid #00ACC1" }}
                  _hover={{ textStyle: "none" }}
                  display="flex"
                  justifyContent="center"
                  marginTop="16px"
                  w="full"
                  to="/home"
                  borderLeft={
                    pathname === "/Home" ? "5px solid #00ACC1" : "none"
                  }
                  bg={pathname === "/Home" ? "#E6F7F9" : "none"}
                >
                  <Img src={icon07} /> Home
                </Link>
                <Link
                  _focus={{ background: "#E6F7F9" }}
                  _active={{ borderLeft: "5px solid #00ACC1" }}
                  _hover={{ textStyle: "none" }}
                  display="flex"
                  justifyContent="center"
                  marginTop="16px"
                  w="full"
                  to="/profile"
                  borderLeft={
                    pathname === "/profile" ? "5px solid #00ACC1" : "none"
                  }
                  bg={pathname === "/profile" ? "#E6F7F9" : "none"}
                >
                  <Img src={icon10} /> Meu perfil
                </Link>
                <Button
                  _hover={{ background: "none" }}
                  _active={{ background: "none" }}
                  _focus={{ boxShadow: "none" }}
                  focusBorderColor="#00acc1"
                  marginTop="48px"
                  bg="transparent"
                  w="full"
                  onClick={handleClose}
                >
                  <Img src={iconexit} w="30px" /> Sair
                </Button>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
          <Modal
            display="flex"
            alignItems="center"
            size="xs"
            w="full"
            isOpen={showModal}
            onClose={() => setShowModal(false)}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader
                display="flex"
                margin="0"
                padding="0"
                textAlign="start"
              >
                Sair desta conta?
              </ModalHeader>
              <ModalBody
                display="flex"
                margin="0"
                padding="0"
                textAlign="start"
              >
                Deseja realmente sair desta conta?
              </ModalBody>
              <ModalFooter
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                w="full"
              >
                <Button
                  _hover={{ background: "none" }}
                  _active={{ background: "none" }}
                  _focus={{ borderColor: "none" }}
                  border="1px solid #00acc1"
                  paddingLeft="40px"
                  paddingRight="40px"
                  bg="transparent"
                  color="#00acc1"
                  onClick={() => {
                    auth.signout(() => navigate("/"));
                  }}
                >
                  Sair
                </Button>
                <Button
                  _hover={{ background: "#00acc1" }}
                  _active={{ background: "#00acc1" }}
                  _focus={{ border: "#00acc1" }}
                  focusBorderColor="#00acc1"
                  backgroundColor="#00acc1"
                  paddingLeft="40px"
                  paddingRight="40px"
                  bg="transparent"
                  color="white"
                  mr={3}
                  onClick={() => setShowModal(false)}
                >
                  Cancelar
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      </div>
      <div className="feed-desktop">
        <Flex display="flex" align="center">
          <Box
            display="flex"
            align="center"
            flexDirection="column"
            borderRight="1px solid #EBEBEB"
            h="100vh"
          >
            <Box
              display="flex"
              align="center"
              justifyContent="center"
              textAlign="center"
              marginX="36px"
              marginY="10px"
            >
              <Img marginX="15px" src={icon09} />
              <Img src={icon08} />
            </Box>
            <Box display="flex" flexDirection="column" w="full">
              <Link
                _focus={{ background: "#E6F7F9" }}
                _active={{ borderLeft: "5px solid #00ACC1" }}
                _hover={{ textStyle: "none" }}
                display="flex"
                marginTop="16px"
                padding="10px"
                paddingLeft="70px"
                w="full"
                to="/home"
                borderLeft={pathname === "/Home" ? "5px solid #00ACC1" : "none"}
                bg={pathname === "/Home" ? "#E6F7F9" : "none"}
              >
                <Img marginRight="5px" src={icon07} /> Home
              </Link>
              <Link
                _focus={{ background: "#E6F7F9" }}
                _active={{ borderLeft: "5px solid #00ACC1" }}
                _hover={{ textStyle: "none" }}
                display="flex"
                padding="10px"
                paddingLeft="75px"
                w="full"
                to="/profile"
                borderLeft={
                  pathname === "/profile" ? "5px solid #00ACC1" : "none"
                }
                bg={pathname === "/profile" ? "#E6F7F9" : "none"}
              >
                <Img marginRight="5px" src={icon10} /> Meu perfil
              </Link>
              <Box display="flex" justifyContent="flex-start">
                <Button
                  _hover={{ background: "none" }}
                  _active={{ background: "none" }}
                  _focus={{ boxShadow: "none" }}
                  focusBorderColor="#00acc1"
                  display="flex"
                  marginTop="15px"
                  paddingLeft="75px"
                  bg="transparent"
                  onClick={handleClose}
                >
                  <Img src={iconexit} w="30px" marginRight="5px" /> Sair
                </Button>
              </Box>
            </Box>
          </Box>
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
                        Niko Vira-lata
                      </Text>
                      <Text
                        color="#828282"
                        paddingLeft="5px"
                        paddingRight="5px"
                      >
                        @doguinhoniko_20
                      </Text>
                      <Text paddingLeft="5px" paddingRight="5px">
                        •
                      </Text>
                      <Text color="#828282">14s</Text>
                    </Box>

                    <Box textAlign="start" display="flex" paddingLeft="60px">
                      <Text>{data.text}</Text>
                    </Box>
                  </Box>
                );
              })}
            </Box>

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
                <Text fontWeight="bold" paddingLeft="20px" paddingRight="5px">
                  Niko Vira-lata
                </Text>
                <Text color="#828282" paddingLeft="5px" paddingRight="5px">
                  @doguinhoniko_20
                </Text>
                <Text paddingLeft="5px" paddingRight="5px">
                  •
                </Text>
                <Text color="#828282">14s</Text>
              </Box>

              <Box textAlign="start" display="flex" paddingLeft="60px">
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
                  dignissim eu lectus cursus. Porttitor viverra vitae tincidunt
                  et ipsum nibh sed blandit. Ullamcorper scelerisque eget
                  integer dui eu enim.
                </Text>
              </Box>
            </Box>

            {/*  <Box
              paddingLeft="30px"
              paddingBottom="10px"
              marginTop="10px"
              w="700px"
              borderBottom="1px solid #EBEBEB"
            >
              <Box display="flex" alignItems="center">
                <Box paddingTop="5px">
                  <Img src={profile03} />
                </Box>
                <Text fontWeight="bold" paddingLeft="20px" paddingRight="5px">
                  Niko Vira-lata
                </Text>
                <Text color="#828282" paddingLeft="5px" paddingRight="5px">
                  @doguinhoniko_20
                </Text>
                <Text paddingLeft="5px" paddingRight="5px">
                  •
                </Text>
                <Text color="#828282">14s</Text>
              </Box>

              <Box textAlign="start" display="flex" paddingLeft="60px">
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
              </Box>
            </Box> */}

            {/* <Box
              paddingLeft="30px"
              paddingBottom="10px"
              marginTop="10px"
              w="700px"
              borderBottom="1px solid #EBEBEB"
            >
              <Box display="flex" alignItems="center">
                <Box paddingTop="5px">
                  <Img src={profile04} />
                </Box>
                <Text fontWeight="bold" paddingLeft="20px" paddingRight="5px">
                  Niko Vira-lata
                </Text>
                <Text color="#828282" paddingLeft="5px" paddingRight="5px">
                  @doguinhoniko_20
                </Text>
                <Text paddingLeft="5px" paddingRight="5px">
                  •
                </Text>
                <Text color="#828282">14s</Text>
              </Box>

              <Box textAlign="start" display="flex" paddingLeft="60px">
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tincidunt quam pellentesque ultrices quam volutpat nulla eros,
                  tempor. Tristique volutpat euismod nunc eu fusce quis sed.
                  Odio varius ac dictum sodales sed mauris, hendrerit.
                  Adipiscing consequat urna nulla sed. Vitae nullam dolor
                  dignissim orci quis. Vitae, donec lacus orci, suspendisse
                  enim, neque. Elementum quam nulla at id ultricies ornare id.
                  Tortor faucibus tellus, turpis consectetur consequat, iaculis
                  lacinia viverra. Lectus massa mattis tellus libero et
                  sagittis. Consequat orci cursus nisl aliquet ut in. Nisl quis
                  ullamcorper phasellus nec. Vestibulum sed augue blandit
                  integer tempus sit vel. Laoreet accumsan facilisis viverra
                  molestie aliquam a. Volutpat morbi aliquet hendrerit tincidunt
                  enim, diam cras. Mi facilisi libero purus nibh pretium. Nibh
                  lorem ipsum eleifend pellentesque nulla eu aliquam, laoreet.
                </Text>
              </Box>
            </Box> */}

            <CircularProgress isIndeterminate color="#99DEE6" />
          </Box>
        </Flex>
      </div>
    </>
  );
}

export default Feed;
