import { Avatar, Flex, Image, Text, Box, Divider, Button } from "@chakra-ui/react";

import { BsThreeDots } from "react-icons/bs";
import Actions from "../components/Actions";
import { useState } from 'react'
import Comment from "../components/Comment";

const PostPage = () => {
    const [liked, setLiked] = useState(false)
    return (
        <>
            <Flex>
                <Flex w={"full"} alignItems={"center"} gap={3}>
                    <Avatar src="/four-cats.jpg" size={"md"} name='Istvan Stefania' />
                    <Flex>

                        <Text fontSize={"sm"} fontWeight={"bold"}>
                            istvanstefania
                        </Text>

                        {/* <Image src='checkmark.png' w='4' h={4} ml={4} /> */}
                    </Flex>

                </Flex>
                <Flex gap={4} alignItems={"center"}>
                    <Text fontSize={"sm"}>
                        1d
                    </Text>

                    <BsThreeDots />
                </Flex>
            </Flex>
            <Text my={3}>pisici!</Text>
            <Box>
                <Image border={"5px solid #000000"} src={"/four-cats.jpg"} />
            </Box>
            <Flex borderRadius={"10 px"} bgColor={"#ffffff"} my={3}>
                <Actions liked={liked} setLiked={setLiked} />
            </Flex>
            <Flex gap={2} alignItems={"center"}>
                <Text fontSize={"sm"}>234 replies</Text>
                <Text fontSize={"sm"}>{200 + (liked ? 1 : 0)} likes</Text>
            </Flex>
            <Flex justifyContent={"space-between"}>
            </Flex>

            <Comment comment="edfsd"
                createdAt="acum 3 ore"
                likes={100}
                username="user1"
            />

            <Comment comment="dsf"
                createdAt="acum 2 ore"
                likes={10320}
                username="user2"

            />
            <Comment comment="dsfds"
                createdAt="acum 2 zile"
                likes={10230}
                username="user3"

            />


        </>
    );
};

export default PostPage;