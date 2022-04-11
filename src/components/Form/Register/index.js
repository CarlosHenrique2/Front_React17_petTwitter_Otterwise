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
  FormHelperText,
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
    .required("Nome de Usuário é obrigatório"),
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

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    await regisTer(data);
    navigate(from, { replace: true });
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl /* paddingX="72px" */>
          <FormLabel htmlFor="name" paddingBottom="10px">
            Nome:
            <Input
              {...register("name")}
              bg="transparent"
              focusBorderColor="#00acc1"
              errorBorderColor="red.300"
              name="name"
              type="text"
              placeholder="Nome"
            />
          </FormLabel>
          <FormLabel htmlFor="email" paddingBottom="10px">
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
          <FormLabel htmlFor="username" paddingBottom="10px">
            Nome de usuário:
            <Input
              {...register("username")}
              bg="transparent"
              focusBorderColor="#00acc1"
              errorBorderColor="red.300"
              name="username"
              type="text"
              placeholder="Ex.: @billbulldog"
            />
          </FormLabel>
          <FormLabel htmlFor="password" paddingBottom="10px">
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
            <FormHelperText>
              Deve conter no mínimo um número e uma letra maiúscula
            </FormHelperText>
          </FormLabel>
          <Button
            _hover={{ background: "#00acc1" }}
            _active={{ background: "#00acc1" }}
            _focus={{ boxShadow: "none" }}
            backgroundColor="#00acc1"
            color="white"
            className="form_btn"
            type="submit"
            onClick={() =>
              toast({
                title: "Usuário Criado Com Sucesso.",
                description:
                  "Por Favor agora faça o login com seu E-mail e Senha.",
                status: "success",
                duration: 9000,
                isClosable: true,
              })
            }
            w="full"
          >
            Cadastrar-se
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default Register;
