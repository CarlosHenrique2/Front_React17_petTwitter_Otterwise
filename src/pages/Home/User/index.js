import React from "react";
import { useState } from "react";

import { useParams } from "react-router-dom";

import InfiniteScroll from "react-infinite-scroll-component";

import profile00 from "../../../assets/img/profiledog.jpg";
import profile01 from "../../../assets/img/profile01.jpg";
import profile02 from "../../../assets/img/profile02.jpg";
import profile03 from "../../../assets/img/profile03.jpg";

import "../../../global/global.css";

import Menudesktop from "../../../components/menu/menu-desktop";
import Menumobile from "../../../components/menu/menu-mobile";

import Profileposts from "../../../components/Posts/PostProfile/PostsDesktop";

import {
  Img,
  Box,
  Flex,
  Text,
  Heading,
  CircularProgress,
} from "@chakra-ui/react";

function User() {
  const [page, setPage] = useState(1);
  const [time, setTime] = useState();

  const { id } = useParams();
  console.log(id, useParams());

  return (
    <>
      <Flex display="flex">
        <div className="profile-desktop">
          <Flex display="flex">
            <Menumobile />
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
                  Bill Bulldog
                </Heading>
                <Text
                  fontFamily="Open Sans"
                  fontWeight="400"
                  fontSize="16px"
                  lineHeight="21px"
                  color="#424242"
                >
                  @billthebulldog2022
                </Text>
              </Box>
            </Box>

            {/* separ */}

            <Box>
              <Box
                paddingLeft="30px"
                paddingBottom="10px"
                marginTop="10px"
                w="700px"
                borderBottom="1px solid #EBEBEB"
              >
                <Box display="flex" alignItems="center">
                  <Box paddingTop="5px">
                    <Img src={profile00} />
                  </Box>
                  <Text fontWeight="bold" paddingLeft="20px" paddingRight="5px">
                    Bill Bulldog
                  </Text>
                  <Text color="#828282" paddingLeft="5px" paddingRight="5px">
                    @billthebulldog2022
                  </Text>
                  <Text paddingLeft="5px" paddingRight="5px">
                    •
                  </Text>
                  <Text color="#828282">14s</Text>
                </Box>

                <Box textAlign="start" display="flex" paddingLeft="60px">
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Arcu dignissim eu lectus cursus. Porttitor viverra vitae
                    tincidunt et ipsum nibh sed blandit. Ullamcorper scelerisque
                    eget integer dui eu enim.
                  </Text>
                </Box>
              </Box>

              <Profileposts />
              {/*   <Box
                paddingLeft="30px"
                paddingBottom="10px"
                marginTop="10px"
                w="700px"
                borderBottom="1px solid #EBEBEB"
              >
                <Box display="flex" alignItems="center">
                  <Box paddingTop="5px">
                    <Img src={profile00} />
                  </Box>
                  <Text fontWeight="bold" paddingLeft="20px" paddingRight="5px">
                    Bill Bulldog
                  </Text>
                  <Text color="#828282" paddingLeft="5px" paddingRight="5px">
                    @billthebulldog2022
                  </Text>
                  <Text paddingLeft="5px" paddingRight="5px">
                    •
                  </Text>
                  <Text color="#828282">14s</Text>
                </Box>

                <Box textAlign="start" display="flex" paddingLeft="60px">
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                </Box>
              </Box> */}

              {/*   <Box
                paddingLeft="30px"
                paddingBottom="10px"
                marginTop="10px"
                w="700px"
                borderBottom="1px solid #EBEBEB"
              >
                <Box display="flex" alignItems="center">
                  <Box paddingTop="5px">
                    <Img src={profile00} />
                  </Box>
                  <Text fontWeight="bold" paddingLeft="20px" paddingRight="5px">
                    Bill Bulldog
                  </Text>
                  <Text color="#828282" paddingLeft="5px" paddingRight="5px">
                    @billthebulldog2022
                  </Text>
                  <Text paddingLeft="5px" paddingRight="5px">
                    •
                  </Text>
                  <Text color="#828282">14s</Text>
                </Box>

                <Box textAlign="start" display="flex" paddingLeft="60px">
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tincidunt quam pellentesque ultrices quam volutpat nulla
                    eros, tempor. Tristique volutpat euismod nunc eu fusce quis
                    sed. Odio varius ac dictum sodales sed mauris, hendrerit.
                    Adipiscing consequat urna nulla sed. Vitae nullam dolor
                    dignissim orci quis. Vitae, donec lacus orci, suspendisse
                    enim, neque. Elementum quam nulla at id ultricies ornare id.
                    Tortor faucibus tellus, turpis consectetur consequat,
                    iaculis lacinia viverra. Lectus massa mattis tellus libero
                    et sagittis. Consequat orci cursus nisl aliquet ut in. Nisl
                    quis ullamcorper phasellus nec. Vestibulum sed augue blandit
                    integer tempus sit vel. Laoreet accumsan facilisis viverra
                    molestie aliquam a. Volutpat morbi aliquet hendrerit
                    tincidunt enim, diam cras. Mi facilisi libero purus nibh
                    pretium. Nibh lorem ipsum eleifend pellentesque nulla eu
                    aliquam, laoreet.
                  </Text>
                </Box>
              </Box> */}
            </Box>

            <Box display="flex" justifyContent="center" paddingTop="10px">
              <CircularProgress isIndeterminate color="#99DEE6" />
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
          {/*  profile */}
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
                Bill Bulldog
              </Heading>
              <Text
                fontSize="16px"
                fontFamily="Open Sans"
                lineHeight="21px"
                fontWeight="400"
              >
                @billthebulldog2022
              </Text>
            </Box>
          </Box>
          {/*  profile */}
          <Box>
            <Box borderBottom="1px solid #EBEBEB">
              <Box marginX="10px" marginY="20px">
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-start"
                >
                  <Box>
                    <Img src={profile00} />
                  </Box>
                  <Text
                    color="#757575"
                    fontWeight="700"
                    fontSize="14px"
                    fontFamily="Open Sans"
                    fontStyle="normal"
                    lineHeight="19px"
                    paddingLeft="10px"
                    paddingRight="5px"
                  >
                    Bill Bulldog
                  </Text>
                  <Text
                    color="#757575"
                    fontFamily="Open Sans"
                    fontStyle="normal"
                    fontWeight="300"
                    fontSize="12px"
                    lineHeight="17px"
                    marginLeft="5px"
                    marginRight="5px"
                  >
                    @billthebulldog2022
                  </Text>
                  <Text>•</Text>
                  <Text
                    color="#757575"
                    fontFamily="Open Sans"
                    fontStyle="normal"
                    fontWeight="300"
                    fontSize="12px"
                    lineHeight="17px"
                    marginLeft="5px"
                    marginRight="5px"
                  >
                    14s
                  </Text>
                </Box>

                <Box textAlign="start" display="flex" marginLeft="60px">
                  <Text
                    color="#141619"
                    fontWeight="400"
                    fontStyle="normal"
                    fontFamily="Open Sans"
                    fontSize="14px"
                    lineHeight="17px"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tincidunt quam pellentesque ultrices quam volutpat nulla
                    eros, tempor. Tristique volutpat euismod nunc eu fusce quis
                    sed. Odio varius ac dictum sodales sed mauris, hendrerit.
                    Adipiscing consequat urna nulla sed. Vitae nullam dolor
                  </Text>
                </Box>
              </Box>
            </Box>

            {/*    <Box borderBottom="1px solid #EBEBEB">
                <Box display="flex" alignItems="center">
                  <Box paddingTop="5px">
                    <Img src={profile00} />
                  </Box>
                  <Text fontWeight="bold" paddingLeft="20px" paddingRight="5px">
                    Bill Bulldog
                  </Text>
                  <Text color="#828282" paddingLeft="5px" paddingRight="5px">
                    @billthebulldog2022
                  </Text>
                  <Text paddingLeft="5px" paddingRight="5px">
                    •
                  </Text>
                  <Text color="#828282">14s</Text>
                </Box>
                <Box textAlign="start" display="flex" paddingLeft="60px">
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                </Box>
              </Box> */}

            {/*  <Box borderBottom="1px solid #EBEBEB">
                <Box display="flex" alignItems="center">
                  <Box paddingTop="5px">
                    <Img src={profile00} />
                  </Box>
                  <Text fontWeight="bold" paddingLeft="20px" paddingRight="5px">
                    Bill Bulldog
                  </Text>
                  <Text color="#828282" paddingLeft="5px" paddingRight="5px">
                    @billthebulldog2022
                  </Text>
                  <Text paddingLeft="5px" paddingRight="5px">
                    •
                  </Text>
                  <Text color="#828282">14s</Text>
                </Box>

                <Box textAlign="start" display="flex" paddingLeft="60px">
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tincidunt quam pellentesque ultrices quam volutpat nulla
                    eros, tempor. Tristique volutpat euismod nunc eu fusce quis
                    sed. Odio varius ac dictum sodales sed mauris, hendrerit.
                    Adipiscing consequat urna nulla sed. Vitae nullam dolor
                    dignissim orci quis. Vitae, donec lacus orci, suspendisse
                    enim, neque. Elementum quam nulla at id ultricies ornare id.
                    Tortor faucibus tellus, turpis consectetur consequat,
                    iaculis lacinia viverra. Lectus massa mattis tellus libero
                    et sagittis. Consequat orci cursus nisl aliquet ut in. Nisl
                    quis ullamcorper phasellus nec. Vestibulum sed augue blandit
                    integer tempus sit vel. Laoreet accumsan facilisis viverra
                    molestie aliquam a. Volutpat morbi aliquet hendrerit
                    tincidunt enim, diam cras. Mi facilisi libero purus nibh
                    pretium. Nibh lorem ipsum eleifend pellentesque nulla eu
                    aliquam, laoreet.
                  </Text>
                </Box>
              </Box> */}

            <Box display="flex" justifyContent="center" paddingTop="10px">
              <CircularProgress isIndeterminate color="#99DEE6" />
            </Box>
          </Box>
        </div>
      </Flex>
    </>
  );
}

export default User;
