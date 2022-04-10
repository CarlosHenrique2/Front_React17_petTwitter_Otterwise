import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import profile02 from "../../../assets/img/profile02.jpg";
import profile03 from "../../../assets/img/profile03.jpg";

import "../../../global/global.css";

import client from "../../../providers/client";

import Menudesktop from "../../../components/menu/menu-desktop";
import Menumobile from "../../../components/menu/menu-mobile";

import ProfileDesktop from "../../../components/Posts/PostProfile/PostsDesktop";
import ProfileMobile from "../../../components/Posts/PostProfile/PostsMobile";

import { Img, Box, Flex, Text, Heading } from "@chakra-ui/react";

function User() {
  const [user, setUser] = useState({
    name: "",
    id: "",
    email: "",
    username: "",
  });
  const params = useParams();

  const userStored = localStorage.getItem("user");
  const getFromStorage = JSON.parse(userStored);

  const id = params.id || getFromStorage.id;

  const getUser = async () => {
    const res = await client.get(`/user?id=${id}`);
    setUser(res.data);
  };

  useEffect(() => {
    if (id) {
      getUser();
    }
  }, [id]);

  return (
    <>
      <Flex display="flex">
        <div className="profile-desktop">
          <Flex display="flex">
            <Menudesktop />
          </Flex>
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
              borderBottom="1px solid #EBEBEB"
              textAlign="flex"
              w="full"
            >
              <Box
                display="flex"
                align="center"
                flexDirection="column"
                marginLeft="30px"
                marginRight="30px"
                marginTop="34px"
              >
                <Img marginBottom="20px" src={profile02} />
                <Box display="flex" w="79px">
                  <Text
                    fontWeight="700"
                    fontStyle="normal"
                    fontFamily="Open Sans"
                    fontSize="18px"
                    lineHeight="24px"
                    borderBottom="3px solid #00ACC1"
                    marginTop="10px"
                    padding="6px"
                    color="#000000"
                  >
                    Petposts
                  </Text>
                </Box>
              </Box>
              <Box
                display="flex"
                alignItems="flex-start"
                flexDirection="column"
                marginTop="68px"
              >
                <Heading
                  fontFamily="Open Sans"
                  fontWeight="700"
                  fontSize="24px"
                  lineHeight="32px"
                  color="#424242"
                  marginBottom="5px"
                >
                  {user.name}
                </Heading>
                <Text
                  fontFamily="Open Sans"
                  fontWeight="400"
                  fontSize="16px"
                  lineHeight="21px"
                  color="#424242"
                >
                  {user.username}
                </Text>
              </Box>
            </Box>
            <Box>
              <ProfileDesktop />
            </Box>
          </Box>
        </div>
      </Flex>

      {/*  divisão */}

      <Flex display="flex">
        <div className="profile-mobile">
          <Flex display="flex" flexDirection="column">
            <Menumobile />
          </Flex>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            borderBottom="1px solid #EBEBEB"
            marginTop="16px"
            marginLeft="16px"
          >
            <Box>
              <Img marginBottom="12px" marginRight="16px" src={profile03} />
              <Box>
                <Text
                  fontWeight="600"
                  fontStyle="normal"
                  fontFamily="Open Sans"
                  fontSize="16px"
                  lineHeight="21px"
                  paddingBottom="4px"
                  textAlign="center"
                  borderBottom="3px solid #00ACC1"
                  color="#424242"
                >
                  Petposts
                </Text>
              </Box>
            </Box>
            <Box marginBottom="40px">
              <Heading
                marginBottom="4px"
                fontFamily="Open Sans"
                fontSize="22px"
                fontWeight="700"
                lineHeight="29px"
                color="#141619"
              >
                {user.name}
              </Heading>
              <Text
                fontSize="16px"
                fontFamily="Open Sans"
                lineHeight="21px"
                fontWeight="400"
              >
                {user.username}
              </Text>
            </Box>
          </Box>
          <Box>
            <ProfileMobile />
          </Box>
        </div>
      </Flex>
    </>
  );
}

export default User;
