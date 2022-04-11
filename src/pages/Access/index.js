import { Link } from "react-router-dom";

import React from "react";

import img00 from "../../assets/img/background.jpg";
import img01 from "../../assets/img/backgroundesk.jpg";
import img02 from "../../assets/img/background01.jpg";

import icon00 from "../../assets/svg/icon00.svg";
import icon02 from "../../assets/svg/icon02.svg";
import icon03 from "../../assets/svg/icon03.svg";
import icon04 from "../../assets/svg/icon04.svg";
import icon05 from "../../assets/svg/icon05.svg";
import icon06 from "../../assets/svg/icon06.svg";

import "../../global/global.css";

import Login from "../../components/Form/Login";

import { Box, Img, Heading, Text, HStack, Flex } from "@chakra-ui/react";

function Access() {
  return (
    <>
      <Flex>
        <div className="profile-desktop">
          <Box className="login" w="full">
            <Box className="login-img">
              <Img className="imgMobile" src={img00} />
              <Img className="imgDesk" objectFit="cover" src={img02} />
              <Img className="title-Desktop-1" src={icon04} />
              <Img className="title-Desktop-2" src={icon05} />
              <Img className="iconMobile" src={icon00} />
              <Heading className="title_img-mobile">
                Comece agora. Conecte-se já.
              </Heading>
            </Box>
            <Box /* className="login-form" */>
              <Box className="info-desk">
                <HStack
                  display="flex"
                  alignItems="flex-start"
                  textAlign="start"
                  flexDirection="column"
                >
                  <Img
                    className="imgDesk"
                    /* paddingX="72px" */
                    /* paddingBottom="30px" */
                    src={icon06}
                  />
                  <HStack>
                    <Heading
                      className="title_img-desk"
                      /*  paddingX="72px" */
                      textAlign="start"
                      color="#00ACC1"
                    >
                      Comece agora. Conecte-se já.
                    </Heading>
                  </HStack>
                </HStack>
              </Box>

              <Heading
                className="info_page"
                /*  paddingX="72px" */
                /*  paddingTop="26px" */
                /*    paddingBottom="32px" */
              >
                Login
              </Heading>
              <Box w="full">
                <Login />
              </Box>
              <Box className="info_link">
                <Box /* paddingX="72px" */ /* paddingTop="15px" */>
                  <Text className="info_link_text">
                    Ainda não possui uma conta?
                    <br className="info_link-mobile"></br>
                    <Link className="info_link_text-link " to="/">
                      Cadastrar-se
                    </Link>
                  </Text>
                </Box>
              </Box>
              <Box className="login-img">
                <Img className="login-img-icon" src={icon02} />
                <Img className="login-img-icon" src={icon03} />
              </Box>
            </Box>
          </Box>
        </div>
      </Flex>

      {/*  divisão */}

      <Flex>
        <div className="profile-mobile">
          <Box className="login feed-desktop feed-mobile" w="full">
            <Box className="login-img">
              <Img className="imgMobile" src={img00} />
              <Img className="imgDesk" objectFit="cover" src={img02} />
              <Img className="title-Desktop-1" src={icon04} />
              <Img className="title-Desktop-2" src={icon05} />
              <Img className="iconMobile" src={icon00} />
              <Heading className="title_img-mobile">
                Comece agora. Conecte-se já.
              </Heading>
            </Box>
            <Box /* className="login-form" */>
              <Box className="info-desk">
                <HStack
                  display="flex"
                  alignItems="flex-start"
                  textAlign="start"
                  flexDirection="column"
                >
                  <Img
                    className="imgDesk"
                    /* paddingX="72px" */
                    /* paddingBottom="30px" */
                    src={icon06}
                  />
                  <HStack>
                    <Heading
                      className="title_img-desk"
                      /*  paddingX="72px" */
                      textAlign="start"
                      color="#00ACC1"
                    >
                      Comece agora. Conecte-se já.
                    </Heading>
                  </HStack>
                </HStack>
              </Box>

              <Heading
                className="info_page"
                /*  paddingX="72px" */
                /*  paddingTop="26px" */
                /*    paddingBottom="32px" */
              >
                Login
              </Heading>
              <Box w="full">
                <Login />
              </Box>
              <Box className="info_link">
                <Box /* paddingX="72px" */ /* paddingTop="15px" */>
                  <Text className="info_link_text">
                    Ainda não possui uma conta?
                    <br className="info_link-mobile"></br>
                    <Link className="info_link_text-link " to="/">
                      Cadastrar-se
                    </Link>
                  </Text>
                </Box>
              </Box>
              <Box className="login-img">
                <Img className="login-img-icon" src={icon02} />
                <Img className="login-img-icon" src={icon03} />
              </Box>
            </Box>
          </Box>
        </div>
      </Flex>
    </>
  );
}

export default Access;
