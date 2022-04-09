import React from "react";

import { useNavigate, useLocation } from "react-router-dom";

import { useAuth } from "../../../context/auth-context";

import {
  Button,
  Img,
  Box,
  Textarea,
  Text,
  FormControl,
} from "@chakra-ui/react";

import profile00 from "../../../assets/img/profiledog.jpg";

import "../../../global/global.css";

const Postsform = () => {
  const [value, setValue] = React.useState(0);

  const { PostTwits } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/Home";

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const text = formData.get("text");
    await PostTwits({ text });
    navigate(from, { replace: true });
    console.log(formData);
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      borderBottom="15px solid #E7ECF0"
    >
      <form onSubmit={handleSubmit}>
        <FormControl>
          <Box display="flex" alignItems="center" paddingTop="30px" w="full">
            <Box display="flex" paddingBottom="45px" paddingLeft="25px">
              <Img src={profile00} />
            </Box>
            <Textarea
              _hover={{ background: "none" }}
              _active={{ background: "none" }}
              _focus={{ boxShadow: "none" }}
              placeholder="O que está acontecendo?"
              border="none"
              size="lg"
              w="600px"
              type="text"
              onChange={(e) => setValue(e.target.value.length)}
              isInvalid={value > 140}
            />
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
