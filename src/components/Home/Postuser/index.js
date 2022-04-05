import { Box, Text, Img } from "@chakra-ui/react";

const Postuser = (props) => {
  const { name, username, text, date, img } = props;
  return (
    <Box
      paddingLeft="30px"
      paddingBottom="10px"
      marginTop="10px"
      w="700px"
      borderBottom="1px solid #EBEBEB"
    >
      <Box display="flex" alignItems="center">
        <Box paddingTop="5px">
          <Img src={img} />
        </Box>
        <Text fontWeight="bold" paddingLeft="20px" paddingRight="5px">
          {name}
        </Text>
        <Text color="#828282" paddingLeft="5px" paddingRight="5px">
          {username}
        </Text>
        <Text paddingLeft="5px" paddingRight="5px">
          •
        </Text>
        <Text color="#828282">{date}</Text>
      </Box>

      <Box textAlign="start" display="flex" paddingLeft="60px">
        <Text>{text}</Text>
      </Box>
    </Box>
  );
};

export default Postuser;
