import { useLocation, useNavigate, Link } from "react-router-dom";

import { useState } from "react";
import React from "react";

import { useAuth, register } from "../../context/auth-context";

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

import Register from "../../components/Form/Register";

import { Box, Img, Heading, Text, HStack, Flex } from "@chakra-ui/react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import { Icon } from "@chakra-ui/react";

function Create() {
  const navigate = useNavigate();
  const location = useLocation();
  const { register } = useAuth();

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const from = location.state?.from?.pathname || "/login";

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const username = formData.get("email");
    const password = formData.get("password");

    await register({ name, email, username, password });
    navigate(from, { replace: true });
    console.log(formData);
    console.log(event);
  }

  return (
    <>
      <Flex>
        <div className="profile-desktop">
          <Box className="login">
            <Box className="login-img">
              <Img className="imgMobile" src={img00} />
              <Img className="imgDesk" src={img02} />
              <Img className="title-Desktop-1" src={icon04} />
              <Img className="title-Desktop-2" src={icon05} />
              <Img className="iconMobile" src={icon00} />
              <Heading className="title_img-mobile">
                Comece agora. Conecte-se já.
              </Heading>
            </Box>

            <Box /* paddingX="66px" */ /* className="login-form" */>
              <HStack>
                <Img className="imgDesk" src={icon06} />
                <HStack>
                  <Heading className="title_img-desk">
                    Comece agora. Conecte-se já.
                  </Heading>
                </HStack>
              </HStack>

              <Heading /* paddingX="72px" */ /* className="info_page" */>
                Cadastro
              </Heading>

              <Box>
                <Register />
              </Box>
              <Box /* paddingX="72px" */ /* className="info_link" */>
                <Text /* className="info_link_text" */>
                  Já possui cadastro?<br className="info_link-mobile"></br>
                  <Link /* className="info_link_text-link" */ to="/login">
                    Faça login
                  </Link>
                </Text>
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
          <Box className="login">
            <Box className="login-img">
              <Img className="imgMobile" src={img00} />
              <Img className="imgDesk" src={img02} />
              <Img className="title-Desktop-1" src={icon04} />
              <Img className="title-Desktop-2" src={icon05} />
              <Img className="iconMobile" src={icon00} />
              <Heading className="title_img-mobile">
                Comece agora. Conecte-se já.
              </Heading>
            </Box>

            <Box /* paddingX="66px" */ /* className="login-form" */>
              <HStack>
                <Img className="imgDesk" src={icon06} />
                <HStack>
                  <Heading className="title_img-desk">
                    Comece agora. Conecte-se já.
                  </Heading>
                </HStack>
              </HStack>

              <Heading /* paddingX="72px" */ /* className="info_page" */>
                Cadastro
              </Heading>

              <Box>
                <Register />
              </Box>
              <Box /* paddingX="72px" */ /* className="info_link" */>
                <Text /* className="info_link_text" */>
                  Já possui cadastro?<br className="info_link-mobile"></br>
                  <Link /* className="info_link_text-link" */ to="/login">
                    Faça login
                  </Link>
                </Text>
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

export default Create;
