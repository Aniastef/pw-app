import { Box, Text, Flex, VStack } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs"
import { CgMoreO } from "react-icons/cg"
import { Menu, MenuButton, MenuItem, MenuList, Portal } from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'

function UserHeader() {

    const toast = useToast()
    const copyUrl = () => {
        const currentUrl = window.location.href;
        navigator.clipboard.writeText(currentUrl).then(() =>
            // console.log("URL copied to clipboard"));
            toast({
                position: "bottom-center",
                render: () => (
                    <Box
                        borderRadius="10px"
                        textAlign="center"
                        color='white'
                        p={3}
                        bg='#d391db'>
                        Link copied
                    </Box>
                ),
            }))
    };

    return (
        <VStack gap={9} alignItems={"center"}>
            <Flex justifyContent={"space-between"} w={"full"}>

                {/* prima coloana cu numeblabla */}
                <Box>
                    <Text fontSize={"2xl"} fontWeight={"black"}>
                        Istvan Stefania
                    </Text>
                    <Flex gap={3} alignItems={"center"}>
                        <Text fontSize={"sm"}>istvanstefania</Text>
                        <Text
                            fontSize={"xs"}
                            bg={"gray.dark"}
                            color={"gray.light"}
                            p={1}
                            borderRadius={"full"}
                        >threads.next</Text>
                    </Flex>
                </Box>

                {/* a doua coloana cu poza */}
                <Box>
                    <Avatar
                        name="Istvan Stefania"
                        src="/istvan-stefania.jpg"
                        size={{
                            base:"md",
                            md:"xl",
                        }}
                    />
                </Box>
            </Flex>

            <Text>aicia scrie despre el</Text>

            <Flex w={"full"} justifyContent={"space-between"}>
                <Flex gap={2} alignItems={"center"}>
                    <Text color={"gray.light"}>3032832 urmaritori</Text>
                    <Box w='1' h='1' bg={"gray.light"} borderRadius={"full"}></Box>
                    <Link color={"gray.light"}>instagram.com</Link>
                </Flex>
                <Flex>
                    <Box className='icon-container'>
                        <BsInstagram size={24} cursor={"pointer"} />
                    </Box>

                    <Box className="icon-container">
                        <Menu>
                            <MenuButton>
                                <CgMoreO size={24} cursor={"pointer"} />
                            </MenuButton>
                            <Portal>
                                <MenuList bg={"#d391db"}>
                                    <MenuItem bg={"#d391db"} onClick={copyUrl} >Copy Link</MenuItem>
                                    <MenuItem bg={"#d391db"}>Save ceva</MenuItem>

                                </MenuList>
                            </Portal>
                        </Menu>
                    </Box>
                </Flex>
            </Flex>

            <Flex w={"full"}>
                <Flex flex={1} borderBottom={"1.5px solid white"}
                    justifyContent={"center"}
                    pb="3"
                    cursor={"pointer"}>

                    <Text fontWeight={"bold"}>Threads</Text>
                </Flex>
                <Flex
                    flex={1}
                    borderBottom={"1px solid gray"}
                    justifyContent={"center"}
                    color={"gray.light"}
                    pb='3'
                    cursor={"pointer"}>

                    <Text fontWeight={"bold"}>Replies</Text>

                </Flex>
            </Flex>
        </VStack>
    );
};

export default UserHeader;