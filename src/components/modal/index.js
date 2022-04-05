import { useState } from "react";

import { useForm } from "react-hook-form";

import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Box,
} from "@chakra-ui/react";

const Modalbutton = () => {
  /* const { isOpen, onOpen, onClose } = useDisclosure(); */
  const [showModal, setShowModal] = useState(false);

  let auth = useAuth();
  let navigate = useNavigate();

  /* const handleClose = () => {
    onClose();
    setShowModal(true);
  }; */

  return (
    <Box>
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
          <ModalHeader display="flex" margin="0" padding="0" textAlign="start">
            Sair desta conta?
          </ModalHeader>
          <ModalBody display="flex" margin="0" padding="0" textAlign="start">
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
  );
};

export default Modalbutton;
