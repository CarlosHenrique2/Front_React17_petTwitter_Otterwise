import { useRef } from "react";
import React from "react";

import "./index.css";

import profile from "../../../assets/img/profiledog.jpg";
import icon02 from "../../../assets/svg/icon02.svg";
import icon03 from "../../../assets/svg/icon03.svg";

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Img,
  Link,
  Box,
  HStack,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

function Feed() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box display="flex" alignItems="center" boxShadow="0px 0px 1px grey">
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
            ref={btnRef}
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
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Img src={profile} />
          </DrawerHeader>

          <DrawerBody
            w="full"
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <Link to="/home">Home</Link>
            <Link to="/profile">Meu perfil</Link>
            <Button
              _hover={{ background: "none" }}
              _active={{ background: "none" }}
              _focus={{ boxShadow: "none" }}
              w="full"
            >
              Sair
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Feed;
