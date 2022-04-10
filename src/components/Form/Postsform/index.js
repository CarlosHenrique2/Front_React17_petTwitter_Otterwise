import React from "react";

import { useNavigate, useLocation } from "react-router-dom";

import { useForm } from "react-hook-form";

import { useAuth } from "../../../context/auth-context";

import {
  Button,
  Img,
  Box,
  Textarea,
  Text,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

import profile00 from "../../../assets/img/profiledog.jpg";

import "../../../global/global.css";

const Postsform = () => {
  const [value, setValue] = React.useState(0);

  const { PostTwits } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/Home";

  /* async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const value1 = formData.get("text");

    await PostTwits({ value1 });
    navigate(from, { replace: true });
    console.log(formData);
  } */

  /* async function onSubmit(data) {
    console.log(data);
    try {
      const response = await PostTwits({ data });
      navigate(from, { replace: true });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  } */

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data, event) => {
    event.preventDefault();
    console.log("data", data);
    console.log("event", event);
    await PostTwits({ data });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      borderBottom="15px solid #E7ECF0"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <Box display="flex" alignItems="center" paddingTop="30px" w="full">
            <Box display="flex" paddingBottom="45px" paddingLeft="25px">
              <Img src={profile00} />
            </Box>
            <FormLabel htmlFor="text">
              <Textarea
                _hover={{ background: "none" }}
                _active={{ background: "none" }}
                _focus={{ boxShadow: "none" }}
                placeholder="O que está acontecendo?"
                border="none"
                size="lg"
                w="600px"
                {...register("text")}
                type={Date.now()}
                onChange={(e) => setValue(e.target.value.length)}
                isInvalid={value > 140}
              />
            </FormLabel>
          </Box>
          <Box display="flex" alignItems="center" w="full">
            <Box w="full"></Box>
            <Box
              display="flex"
              alignItems="center"
              marginBottom="15px"
              marginRight="40px"
              marginLeft="40px"
            >
              <Text marginRight="10px">{value}:140</Text>
              <Button
                _hover={{ background: "#99DEE6" }}
                _active={{ background: "#99DEE6" }}
                _focus={{ boxShadow: "none" }}
                borderRadius="10"
                w="full"
                bg="#99DEE6"
                color="white"
                type="submit"
                isDisabled={value > 140}
              >
                Petwittar
              </Button>
            </Box>
          </Box>
        </FormControl>
      </form>
    </Box>
  );
};

export default Postsform;
