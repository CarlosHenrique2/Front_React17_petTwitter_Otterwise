import React from "react";

import img00 from "../../assets/img/background.jpg";
import img02 from "../../assets/img/background01.jpg";

import icon00 from "../../assets/svg/icon00.svg";
import icon02 from "../../assets/svg/icon02.svg";
import icon03 from "../../assets/svg/icon03.svg";
import icon06 from "../../assets/svg/icon06.svg";

import "../../global/global.css";

import Register from "../../components/Form/Register";

import { Box, Img, Heading, Text, HStack, Flex, Link } from "@chakra-ui/react";

function Create() {
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
              <HStack>
                <Img src={icon06} />
                <HStack>
                  <Heading>Comece agora. Conecte-se já.</Heading>
                </HStack>
              </HStack>

              <Box paddingLeft="66px" paddingRight="10px">
                <Heading
                  paddingBottom="24px"
                  paddingTop="38px"
                  fontFamily="Open Sans"
                  fontWeight="600"
                  fontSize="24px"
                  lineHeight="40px"
                  color="#212121"
                >
                  Cadastro
                </Heading>

                <Box w="full">
                  <Register />
                </Box>
                <Box display="flex" marginTop="24px">
                  <Text>Já possui cadastro?</Text>
                  <Link
                    textDecoration="underline"
                    paddingLeft="5px"
                    color="#00ACC1"
                    href="/login"
                  >
                    Faça login
                  </Link>
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
                Cadastro
              </Heading>

              <Box>
                <Register />
              </Box>
              <Box marginTop="24px">
                <Text>Já possui cadastro?</Text>
                <Link textDecoration="underline" color="#00ACC1" href="/login">
                  Faça login
                </Link>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                marginTop="22px"
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

export default Create;
