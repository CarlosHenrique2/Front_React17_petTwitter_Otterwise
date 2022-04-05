import { useState } from "react";
import React from "react";

import { useForm } from "react-hook-form";

import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../context/auth-context";

import profile00 from "../../../assets/img/profiledog.jpg";
import profile01 from "../../../assets/img/profile02.jpg";
import profile03 from "../../../assets/img/profile03.jpg";
import profile04 from "../../../assets/img/profile04.jpg";
import profile05 from "../../../assets/img/profile05.jpg";

import icon02 from "../../../assets/svg/icon02.svg";
import icon03 from "../../../assets/svg/icon03.svg";
import icon08 from "../../../assets/svg/icon08.svg";
import icon07 from "../../../assets/svg/icon07.svg";
import icon09 from "../../../assets/svg/icon09.svg";
import icon10 from "../../../assets/svg/icon10.svg";
import iconexit from "../../../assets/svg/iconexit.svg";

import "../../../global/global.css";

import Menudesktop from "../../../components/menu/menu-desktop";
import Menumobile from "../../../components/menu/menu-mobile";

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button,
  Img,
  Link,
  Box,
  Flex,
  HStack,
  Textarea,
  Text,
  CircularProgress,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

function User() {
  return (
    <>
      <Menudesktop />
      <Menumobile />
    </>
  );
}

export default User;
