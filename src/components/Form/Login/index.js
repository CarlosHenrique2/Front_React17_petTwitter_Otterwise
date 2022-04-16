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
  useToast
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

  const { signin } = useAuth();

  const toast = useToast();

  const handleClick = () => setShow(!show);
  const [show, setShow] = React.useState(false);

  const from = location.state?.from?.pathname || "/Home";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await signin(data);
      toast({
        title: "Login realizado com sucesso",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate(from, { replace: true });
    } catch (error) {
      toast({
        title: "Erro ao enviar PostTwits",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box textAlign="start" w="full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          isInvalid={!!errors?.email?.message}
          errortext={errors?.email?.message}
        >
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
            <FormErrorMessage fontSize="10px">
              {errors?.email?.message}
            </FormErrorMessage>
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
            <FormErrorMessage fontSize="10px">
              {errors?.email?.message}
            </FormErrorMessage>
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
