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

import { useForm } from "react-hook-form";

const Postsform = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      borderBottom="15px solid #E7ECF0"
    >
      <form onSubmit={handleSubmit}>
        <Box display="flex" alignItems="center" paddingTop="30px" w="full">
          <Box display="flex" paddingBottom="45px" paddingLeft="25px">
            <Img src={profile00} />
          </Box>
          <Textarea
            _hover={{ background: "none" }}
            _active={{ background: "none" }}
            _focus={{ boxShadow: "none" }}
            placeholder="O que está acontecendo?"
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
  );
};

export default Postsform;
