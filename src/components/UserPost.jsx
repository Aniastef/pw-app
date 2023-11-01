import { Avatar, Box, Flex, Text, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { BsThreeDots } from "react-icons/bs"
import Actions from "./Actions"
import { useState } from "react"
import Comment from "./Comment"
const UserPost = ({ postImg, postTitle, likes, replies }) => {
    const [liked, setLiked] = useState(false)
    return (

        <Link to={"/istvanstefania/post/1"}>
            <Flex gap={3} mb={10} py={5}>
                <Flex flexDirection={"column"} alignItems={"center"}>
                    <Avatar size="md" name="Istvan Stefania" src="/istvan-stefania.jpg" />
                    <Box w="1px" h={"full"} my={2}></Box>
                    <Box position={"relative"} w={"full"}>
                    </Box>
                </Flex>
                <Flex flex={1} flexDirection={"column"} gap={2}>
                    <Flex justifyContent={"space-between"} w={"full"}>
                        <Flex w={"full"} alignItems={"center"}>
                            <Text fontSize={"sm"} fontWeight={"bold"} >istvanstefania</Text>
                            <Image src='/checkmark.png' w={4} h={4} ml={1} />
                        </Flex>
                        <Flex gap={4} alignItems={"center"}>
                            <Text fontStyle={"sm"} >1d</Text>
                            <BsThreeDots />
                        </Flex>
                    </Flex>
                    <Text fontSize={"sm"}>{postTitle}</Text>
                    {postImg && (
                        <Box
                            borderRadius={6}
                            border={"5px solid "}
                        >
                            <Image src={postImg} w={"full"} />
                        </Box>
                    )}
                    <Flex gap={3} my={1}>
                        {/* o sa schimbam culoarea la like cand e vector */}
                        <Actions liked={liked} setLiked={setLiked} />
                    </Flex>
                    <Flex gap={2} alignItems={"center"}>
                        <Text
                            fontSize={"sm"} >
                            {replies} replies</Text>
                        <Text
                            fontSize={"sm"}>
                            {likes} likes
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Link>
    )
}

export default UserPost