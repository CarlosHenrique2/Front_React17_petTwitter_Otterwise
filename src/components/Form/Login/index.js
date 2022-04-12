import { useLocation, useNavigate } from "react-router-dom";

import React from "react";

import { useAuth } from "../../../context/auth-context";

import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

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
  useToast,
} from "@chakra-ui/react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const schema = yup.object({
  email: yup
    .string()
    .required("Email é obrigatório")
    .min(5, "Precisa ter no mínimo 5 caracteres"),
  password: yup
    .string()
    .required("Senha é obrigatório")
    .min(5, "Precisa ter no mínimo 5 caracteres"),
});

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const toast = useToast();

  const { signin } = useAuth();

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const from = location.state?.from?.pathname || "/Home";

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    await signin(data);
    navigate(from, { replace: true });
  };

  return (
    <Box textAlign="start" w="full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl /* paddingX="72px" */>
          <FormLabel w="full" paddingBottom="22px" htmlFor="email">
            E-mail:
            <Input
              {...register("email")}
              bg="transparent"
              focusBorderColor="#00acc1"
              errorBorderColor="red.300"
              name="email"
              type="text"
              placeholder="E-mail"
            />
          </FormLabel>
          <FormLabel w="full" paddingBottom="22px" htmlFor="password">
            Senha:
            <InputGroup>
              <Input
                {...register("password")}
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
            onChange={() => {
              toast({
                title: "Login Realizado Com Sucesso",
                status: "success",
                duration: 3000,
                isClosable: true,
              });
            }}
          >
            Entrar
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default Login;
