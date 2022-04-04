import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  Img,
  Link,
} from "@chakra-ui/react";

const Menumobile = (props) => {
  const { isOpen, onClose } = props;
  return (
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
            borderLeft={pathname === "/profile" ? "5px solid #00ACC1" : "none"}
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
  );
};

export default Menumobile;
