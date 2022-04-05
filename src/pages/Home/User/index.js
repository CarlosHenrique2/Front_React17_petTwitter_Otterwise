import React from "react";

import profile00 from "../../../assets/img/profiledog.jpg";
import profile09 from "../../../assets/img/profile09.jpg";

import "../../../global/global.css";

import Menudesktop from "../../../components/menu/menu-desktop";
import Menumobile from "../../../components/menu/menu-mobile";

import {
  Img,
  Box,
  Flex,
  Text,
  Heading,
  CircularProgress,
} from "@chakra-ui/react";

function User() {
  return (
    <>
      <Flex display="flex" flexDirection="column">
        <Menumobile />
        <Menudesktop />
        <div className="profile-desktop">
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
            >
              <Box borderBottom="3px solid #00ACC1">
                <Img src={profile09} />
                <Box display="flex" align="center">
                  <Text
                    fontWeight="700"
                    fontStyle="normal"
                    fontSize="18px"
                    fontFamily="Open Sans"
                    w="full"
                  >
                    Petposts
                  </Text>
                </Box>
              </Box>
              <Box display="flex" alignItems="center" flexDirection="column">
                <Heading>Bill Bulldog</Heading>
                <Text>@billthebulldog2022</Text>
              </Box>
            </Box>
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
                  </Text>
                </Box>
              </Box>

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
              </Box>
              <CircularProgress isIndeterminate color="#99DEE6" />
            </Box>
          </Box>
        </div>
      </Flex>
      {/*  divisão */}
      <Flex>
        <div className="profile-mobile">
          <Box display="flex">
            <Box>
              <Box borderBottom="3px solid #00ACC1">
                <Img src={profile09} />
                <Box display="flex" align="center">
                  <Text
                    fontWeight="700"
                    fontStyle="normal"
                    fontSize="18px"
                    fontFamily="Open Sans"
                    w="full"
                  >
                    Petposts
                  </Text>
                </Box>
              </Box>
              <Box display="flex" alignItems="center" flexDirection="column">
                <Heading>Bill Bulldog</Heading>
                <Text>@billthebulldog2022</Text>
              </Box>
            </Box>

            <Box>
              {/*  <Box>
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
              </Box> */}

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

              {/* <CircularProgress isIndeterminate color="#99DEE6" /> */}
            </Box>
          </Box>
        </div>
      </Flex>
    </>
  );
}

export default User;
