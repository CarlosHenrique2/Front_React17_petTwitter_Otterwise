import React from "react";

import img00 from "../../assets/img/background.jpg";
import img02 from "../../assets/img/background01.jpg";

import icon00 from "../../assets/svg/icon00.svg";
import icon02 from "../../assets/svg/icon02.svg";
import icon03 from "../../assets/svg/icon03.svg";
import icon06 from "../../assets/svg/icon06.svg";

import "../../global/global.css";

import Login from "../../components/Form/Login";

import { Box, Img, Heading, Text, HStack, Flex, Link } from "@chakra-ui/react";

function Access() {
  return (
    <>
      <Flex>
        <div className="profile-desktop">
          <Box display="flex" alignItems="center">
            <Box>
              <Img src={img02} />
              <Img src={icon00} />
            </Box>
            <Box>
              <Box paddingX="72px">
                <HStack>
                  <Img src={icon06} />
                </HStack>
                <Heading display="flex" marginTop="26px" color="#00ACC1">
                  Comece agora.Conecte-se já.
                </Heading>
              </Box>

              <Box paddingX="72px">
                <Heading
                  marginY="32px"
                  fontFamily="Open Sans"
                  fontWeight="600"
                  fontSize="24px"
                  lineHeight="40px"
                  color="#212121"
                >
                  Login
                </Heading>
                <Box w="full">
                  <Login />
                </Box>
                <Box>
                  <Box display="flex" marginTop="24px">
                    <Text>Ainda não possui uma conta?</Text>
                    <Link
                      textDecoration="underline"
                      paddingLeft="5px"
                      color="#00ACC1"
                      href="/"
                    >
                      Cadastrar-se
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </div>
      </Flex>

      {/*  divisão */}

      <Flex>
        <div className="profile-mobile">
          <Box w="full">
            <Box>
              <Img position="relative" top="0" zIndex="-1" src={img00} />
              <Img position="absolute" top="45" left="31" src={icon00} />
              <Heading
                position="absolute"
                top="139px"
                left="26px"
                color="white"
              >
                Comece agora. Conecte-se já.
              </Heading>
            </Box>
            <Box paddingX="32px">
              <Heading
                marginTop="30px"
                marginBottom="32px"
                fontFamily="Open Sans"
                fontWeight="600"
                fontSize="24px"
                lineHeight="40px"
                color="#212121"
              >
                Login
              </Heading>
              <Box>
                <Login />
              </Box>
              <Box>
                <Box marginTop="24px">
                  <Text>Ainda não possui uma conta?</Text>
                  <Link textDecoration="underline" color="#00ACC1" href="/">
                    Cadastrar-se
                  </Link>
                </Box>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                marginTop="64px"
              >
                <Img src={icon02} />
                <Img src={icon03} />
              </Box>
            </Box>
          </Box>
        </div>
      </Flex>
    </>
  );
}

export default Access;
