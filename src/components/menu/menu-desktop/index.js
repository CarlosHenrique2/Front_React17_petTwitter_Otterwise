import { useState } from "react";

import {
  Button,
  Img,
  Link,
  Box,
  Flex,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/react";

import { useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "../../../context/auth-context";

import icon07 from "../../../assets/svg/icon07.svg";
import icon08 from "../../../assets/svg/icon08.svg";
import icon09 from "../../../assets/svg/icon09.svg";
import icon10 from "../../../assets/svg/icon10.svg";
import iconexit from "../../../assets/svg/iconexit.svg";

import "../../../global/global.css";

const Menudesktop = () => {
  const [showModal, setShowModal] = useState(false);
  const { onClose } = useDisclosure();

  const { pathname } = useLocation();

  let auth = useAuth();
  let navigate = useNavigate();

  const handleClose = () => {
    onClose();
    setShowModal(true);
  };

  return (
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
              paddingLeft={pathname === "/Profile" ? "75px" : "70px"}
              w="full"
              to="/Home"
              href="/Home"
              borderLeft={pathname === "/Home" ? "5px solid #00ACC1" : "none"}
              bg={pathname === "/Home" ? "#E6F7F9" : "none"}
              /*  borderLeft={
                pathname === "/Profile/" ? "5px solid #00ACC1" : "none"
              }
              bg={pathname === "/Profile/" ? "#E6F7F9" : "none"} */
            >
              <Img marginRight="5px" src={icon07} /> Home
            </Link>
            <Link
              _focus={{ background: "#E6F7F9" }}
              _active={{ borderLeft: "5px solid #00ACC1" }}
              _hover={{ textStyle: "none" }}
              display="flex"
              paddingTop="10px"
              paddingBottom="10px"
              paddingLeft={pathname === "/Profile" ? "70px" : "70px"}
              w="full"
              to="/Profile"
              href="/Profile"
              borderLeft={
                pathname === "/Profile" ? "5px solid #00ACC1" : "none"
              }
              bg={pathname === "/Profile" ? "#E6F7F9" : "none"}
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
                paddingLeft={pathname === "/Profile" ? "75px" : "75px"}
                bg="transparent"
                onClick={handleClose}
              >
                <Img src={iconexit} w="30px" marginRight="5px" /> Sair
              </Button>
            </Box>
          </Box>
        </Box>
      </Flex>
      <Box>
        <Modal
          display="flex"
          alignItems="center"
          size="xs"
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader
              display="flex"
              marginLeft="5px"
              textAlign="star"
              fontFamily="Open Sans"
              fontWeight="600"
              fontSize="24px"
              lineHeight="40px"
              color="#616161"
            >
              Sair desta conta?
            </ModalHeader>
            <ModalBody
              display="flex"
              marginLeft="5px"
              fontFamily="Open Sans"
              fontWeight="400"
              fontSize="16px"
              lineHeight="24px"
              color="#616161"
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
                padding="10px"
                w="146px"
                marginLeft="5px"
                marginRight="5px"
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
                padding="10px"
                w="146px"
                marginLeft="5px"
                marginRight="5px"
                bg="transparent"
                color="white"
                onClick={() => setShowModal(false)}
              >
                Cancelar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </div>
  );
};

export default Menudesktop;
