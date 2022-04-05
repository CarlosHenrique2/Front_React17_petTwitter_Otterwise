import { useState } from "react";
import React from "react";

import { useForm } from "react-hook-form";

import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../context/auth-context";

import profile09 from "../../../assets/img/profile09.jpg";

import "../../../global/global.css";

import { Img, Box, Text, Heading } from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

function Userprofile() {
  return (
    <>
      <div className="feed-desktop">
        <Box
          display="flex"
          align="center"
          flexDirection="column"
          borderRight="1px solid #EBEBEB"
          h="100vh"
        >
          <Box display="flex" align="center">
            <Img src={profile09} />
            <Heading>Bill Bulldog</Heading>
            <Text>@billthebulldog2022</Text>
          </Box>
        </Box>
      </div>
    </>
  );
}

export default Userprofile;
