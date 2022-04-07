/* import { useState } from "react";
import React from "react";

import {
  Button,
  Box,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/auth-context";

import "../../global/global.css";

const Modall = (props) => {
  const { handleClose1 } = props;
  const [showModal, setShowModal] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  let auth = useAuth();
  let navigate = useNavigate();

  const handleClose = () => {
    onClose();
    setShowModal(true);
  };

  return (
    <div className="feed-desktop">
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

export default Modall;
 */
