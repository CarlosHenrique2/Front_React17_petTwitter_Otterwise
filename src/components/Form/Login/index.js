import { useLocation, useNavigate, Link } from "react-router-dom";

import { useState } from "react";
import React from "react";

import { useAuth } from "../../../context/auth-context";

import "../../../global/global.css";

import {
  FormControl,
  FormLabel,
  Input,
  Button,
  InputRightElement,
  InputGroup,
  Box,
  Icon,
} from "@chakra-ui/react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useAuth();

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const from = location.state?.from?.pathname || "/Home";

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    await signin({ email, password });
    navigate(from, { replace: true });
    console.log(event);
  }

  /*  const { register, handleSubmit } = useForm();
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  const onsubmit = (data) => {
    console.log(data);
  }; */

  return (
    <Box textAlign="start">
      <form className="form" onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel className="form_label-E-mail" htmlFor="email">
            E-mail:
            <Input
              /* {...register("email")} */
              bg="transparent"
              focusBorderColor="#00acc1"
              errorBorderColor="red.300"
              name="email"
              type="text"
              placeholder="E-mail"
            />
          </FormLabel>
          <FormLabel className="form_label-Senha" htmlFor="password">
            Senha:
            <InputGroup>
              <Input
                /* {...register("password")} */
                focusBorderColor="#00acc1"
                errorBorderColor="red.300"
                name="password"
                type={show ? "text" : "password"}
                placeholder="Senha:"
              />
              <InputRightElement>
                <Button
                  _hover={{ background: "none" }}
                  _active={{ background: "none" }}
                  _focus={{ boxShadow: "none" }}
                  border="none"
                  onClick={handleClick}
                >
                  {show ? <Icon as={ViewIcon} /> : <Icon as={ViewOffIcon} />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormLabel>
          <Button
            _hover={{ background: "#00acc1" }}
            _active={{ background: "#00acc1" }}
            _focus={{ boxShadow: "none" }}
            backgroundColor="#00acc1"
            color="white"
            className="form_btn"
            type="submit"
            w="full"
          >
            Entrar
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default Login;
