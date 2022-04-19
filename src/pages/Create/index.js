import React from "react";

import img00 from "../../assets/img/background.jpg";
import img02 from "../../assets/img/background01.jpg";

import pata from "../../assets/svg/pets.svg";
import titulo from "../../assets/svg/PETWITTER.svg";

import icon00 from "../../assets/svg/icon00.svg";
import icon02 from "../../assets/svg/icon02.svg";
import icon03 from "../../assets/svg/icon03.svg";
import icon06 from "../../assets/svg/icon06.svg";

import "../../global/global.css";

import Register from "../../components/Form/Register";

import { Box, Img, Heading, Text, Flex, Link } from "@chakra-ui/react";

function Create() {
  return (
    <>
      <div className="profile-desktop">
        <Flex w="full" h="100vh">
          <Box
            position="relative"
            overflow="hidden"
            display="flex"
            alignItems="center"
            justifyContent="center"
            w="50%"
          >
            <img
              style={{
                position: "absolute",
                left: "0",
                top: "0px",
                width: "100%",
                objectFit: "cover",
                objectPosition: "bottom",
                zIndex: "0",
              }}
              src={img02}
            />
            <Flex gap="40px" zIndex="100">
              <Img src={pata} />
              <Img src={titulo} />
            </Flex>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            paddingX="66px"
            h="100vh"
            w="50%"
          >
            <Box w="full">
              <Img src={icon06} />
              <Heading
                paddingBottom="24px"
                paddingTop="38px"
                fontFamily="Open Sans"
                fontWeight="600"
                fontSize="20px"
                lineHeight="32px"
                color="#424242"
              >
                Cadastro
              </Heading>

              <Box sx={{ width: "100%" }}>
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
        </Flex>
      </div>

      {/*  divisão */}

      <div className="profile-mobile">
        <Flex>
          <Box w="full">
            <Box>
              <Img
                w="full"
                position="relative"
                top="0"
                zIndex="-1"
                src={img00}
              />
              <Img position="absolute" top="45" left="31" src={icon00} />
              <Heading
                position="absolute"
                top="139px"
                left="26px"
                color="white"
                fontSize="2rem"
                textAlign="start"
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
        </Flex>
      </div>
    </>
  );
}

export default Create;
