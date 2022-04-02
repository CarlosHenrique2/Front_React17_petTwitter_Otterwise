import { useState } from "react";
import React from "react";

import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../context/auth-context";

import profile00 from "../../../assets/img/profiledog.jpg";
import profile01 from "../../../assets/img/profile02.jpg";

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
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

function Feed() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showModal, setShowModal] = useState(false);
  const { pathname } = useLocation();
  const [value, setValue] = React.useState(0);

  let auth = useAuth();
  let navigate = useNavigate();

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
            paddingX="36px"
            paddingY="33px"
          >
            <Box
              display="flex"
              align="center"
              justifyContent="center"
              textAlign="center"
            >
              <Img marginX="15px" src={icon09} />
              <Img src={icon08} />
            </Box>
            <Box display="flex" align="center" flexDirection="column" w="full">
              <Link
                _focus={{ background: "#E6F7F9" }}
                _active={{ borderLeft: "5px solid #00ACC1" }}
                _hover={{ textStyle: "none" }}
                display="flex"
                justifyContent="center"
                marginTop="16px"
                w="full"
                to="/home"
                borderLeft={pathname === "/Home" ? "5px solid #00ACC1" : "none"}
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
                onClick={handleClose}
              >
                <Img src={iconexit} w="30px" /> Sair
              </Button>
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
              {/*  <from> */}
              <Box
                display="flex"
                alignItems="center"
                paddingTop="30px"
                marginLeft="40px"
                w="full"
              >
                <Box display="flex" paddingBottom="90px">
                  <Img src={profile00} />
                </Box>
                <Textarea
                  _hover={{ background: "none" }}
                  _active={{ background: "none" }}
                  _focus={{ boxShadow: "none" }}
                  placeholder="O que está acontecendo?"
                  paddingLeft="1rem"
                  paddingBottom="1rem"
                  height="130px"
                  w="full"
                  border="none"
                  size="lg"
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
                  marginRight="40px"
                  marginBottom="15px"
                >
                  <Text marginRight="10px">{value}:140</Text>
                  <Button
                    w="full"
                    _hover={{ background: "#99DEE6" }}
                    _active={{ background: "#99DEE6" }}
                    _focus={{ boxShadow: "none" }}
                    borderRadius="10"
                    bg="#99DEE6"
                    color="white"
                    type="submit"
                    isDisabled={value > 140}
                  >
                    Petwittar
                  </Button>
                </Box>
              </Box>
              {/* </from> */}
            </Box>

            <Box>
              <Box display="flex" alignItems="center">
                <Img src={profile01} />
                <Text>Niko Vira-lata</Text> <Text>@doguinhoniko_20</Text>
                <Text>14s </Text>
              </Box>
              <Text
                textAlign="start"
                borderBottom="1px solid #EBEBEB"
                w="500px"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
                dignissim eu lectus cursus. Porttitor viverra vitae tincidunt et
                ipsum nibh sed blandit. Ullamcorper scelerisque eget integer dui
                eu enim.
              </Text>
            </Box>
            <Box>
              <Box display="flex" alignItems="center">
                <Img src={profile01} />
                <Text>Niko Vira-lata</Text> <Text>@doguinhoniko_20</Text>
                <Text>14s </Text>
              </Box>
              <Text
                textAlign="start"
                borderBottom="1px solid #EBEBEB"
                w="684px"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </Box>
          </Box>
        </Flex>
      </div>
    </>
  );
}

export default Feed;
