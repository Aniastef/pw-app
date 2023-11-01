import { Flex,Image, useColorMode } from "@chakra-ui/react";


const Header = () => {

    const {colorMode,toggleColorMode}=useColorMode()

return <Flex justifyContent={"center"} mt={6} mb="12">

<Image
src='/bec.png'
cursor={"pointer"}
alt='bec'
w={6}
// INTOARCE-TE CAND AI 2 iconite pt bec
// src={colorMode==="dark" ? "/bec.png" : "/bec.png"}
onClick={toggleColorMode}
/>

</Flex>;
  
};

export default Header;
