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
  FormErrorMessage,
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
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().required("Email é obrigatório"),
  username: yup
    .string()
    .min(5, "Precisa ter no mínimo 5 caracteres")
    .required("Nome de Usuário é obrigatório")
    .matches(/^(@)/, "Nome de usuário deve começar com @"),
  password: yup
    .string()
    .min(5, "Precisa ter no mínimo 5 caracteres")
    .required("Senha é obrigatório"),
});

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const toast = useToast();

  const { regisTer } = useAuth();

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const from = location.state?.from?.pathname || "/login";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    try {
      await regisTer(data);
      toast({
        title: "Usuário cadastrado com suecsso",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate(from, { replace: true });
    } catch (error) {
      toast({
        title: "Erro ao cadastrar usuário",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          isInvalid={!!errors?.name?.message}
          errortext={errors?.name?.message}
        >
          <FormLabel
            htmlFor="name"
            paddingBottom="24px"
            fontFamily="Open Sans"
            fontWeight="600"
            fontSize="14px"
            lineHeight="16px"
            color="#424242"
          >
            Nome:
            <Input
              {...register("name")}
              bg="transparent"
              focusBorderColor="#00acc1"
              errorBorderColor="red.300"
              marginTop="8px"
              name="name"
              type="text"
              placeholder="Nome"
            />
            <FormErrorMessage fontSize="10px">
              {errors?.name?.message}
            </FormErrorMessage>
          </FormLabel>
        </FormControl>
        <FormControl
          isInvalid={!!errors?.email?.message}
          errortext={errors?.email?.message}
        >
          <FormLabel
            htmlFor="email"
            paddingBottom="24px"
            fontFamily="Open Sans"
            fontWeight="600"
            fontSize="14px"
            lineHeight="16px"
            color="#424242"
          >
            E-mail:
            <Input
              {...register("email")}
              bg="transparent"
              focusBorderColor="#00acc1"
              errorBorderColor="red.300"
              marginTop="8px"
              name="email"
              type="text"
              placeholder="E-mail"
            />
            <FormErrorMessage fontSize="10px">
              {errors?.email?.message}
            </FormErrorMessage>
          </FormLabel>
        </FormControl>
        <FormControl
          isInvalid={!!errors?.username?.message}
          errortext={errors?.username?.message}
        >
          <FormLabel
            htmlFor="username"
            paddingBottom="24px"
            fontFamily="Open Sans"
            fontWeight="600"
            fontSize="14px"
            lineHeight="16px"
            color="#424242"
          >
            Nome de usuário:
            <Input
              {...register("username")}
              bg="transparent"
              focusBorderColor="#00acc1"
              errorBorderColor="red.300"
              marginTop="8px"
              name="username"
              type="text"
              placeholder="Ex.: @billbulldog"
            />
            <FormErrorMessage fontSize="10px">
              {errors?.username?.message}
            </FormErrorMessage>
          </FormLabel>
        </FormControl>
        <FormControl
          isInvalid={!!errors?.password?.message}
          errortext={errors?.password?.message}
        >
          <FormLabel
            htmlFor="password"
            paddingBottom="24px"
            fontFamily="Open Sans"
            fontWeight="600"
            fontSize="14px"
            lineHeight="16px"
            color="#424242"
          >
            Senha:
            <InputGroup marginTop="8px">
              <Input
                {...register("password")}
                focusBorderColor="#00acc1"
                errorBorderColor="red.300"
                marginTop="8px"
                name="password"
                type={show ? "text" : "password"}
                placeholder="Senha:"
              />
              <InputRightElement marginTop="8px">
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
            <FormErrorMessage fontSize="10px">
              {errors?.password?.message}
            </FormErrorMessage>
          </FormLabel>
        </FormControl>
        <Button
          _hover={{ background: "#00acc1" }}
          _active={{ background: "#00acc1" }}
          _focus={{ boxShadow: "none" }}
          backgroundColor="#00acc1"
          fontFamily="Open Sans"
          fontWeight="600"
          fontSize="14px"
          lineHeight="24px"
          color="#FFFFFF"
          className="form_btn"
          type="submit"
          w="full"
        >
          Cadastrar-se
        </Button>
      </form>
    </Box>
  );
};

export default Register;
