import { Button, Img, Link, Box, Flex } from "@chakra-ui/react";

const Menudesktop = (props) => {
  return (
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
            borderLeft={pathname === "/profile" ? "5px solid #00ACC1" : "none"}
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
  );
};

export default Menudesktop;