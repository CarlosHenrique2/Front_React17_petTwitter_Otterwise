import {
  FormControl,
  FormLabel,
  Input,
  Button,
  InputRightElement,
  InputGroup,
  Box,
  FormHelperText,
} from "@chakra-ui/react";

import { useState } from "react";

import { useForm } from "react-hook-form";

const Register = (props) => {
  const { register, handleSubmit } = useForm();
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  const onsubmit = (data) => {
    console.log(data);
  };

  return (
    <Box>
      <form className="form" onSubmit={handleSubmit(onsubmit)}>
        <FormControl gap="15px">
          <FormLabel className="form_label-E-mail" htmlFor="name">
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
          <FormLabel className="form_label-E-mail" htmlFor="email">
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
          <FormLabel className="form_label-E-mail" htmlFor="username">
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
          <FormLabel className="form_label-Senha" htmlFor="password">
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
