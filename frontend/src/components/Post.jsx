import { Avatar, Box, Flex, Text, Image } from "@chakra-ui/react"
import { Link, useNavigate } from "react-router-dom"
import { BsThreeDots } from "react-icons/bs"
import Actions from "./Actions"
import { useState,useEffect } from "react"
import Comment from "./Comment"
import useShowToast from "../hooks/useShowToast"

const Post = ({ post,postedBy }) => {
    const [liked, setLiked] = useState(false)
    const [user,setUser]=useState(null)
    const showToast=useShowToast()
const navigate=useNavigate()

    useEffect(() => {
		const getUser = async () => {
			try {
				const res = await fetch("/api/users/profile/" + postedBy);
				const data = await res.json();
                console.log(data)
				if (data.error) {
					showToast("Error", data.error, "error");
			 	return;
				}
				setUser(data);
			} catch (error) {
				showToast("Error", error.message, "error");
				setUser(null);
			}
        }
            getUser()
		},[postedBy,showToast])

        if(!user) return null

    return (

        <Link to={`/${user.username}/post/${post._id}`}>
            <Flex gap={3} mb={10} py={5}>
                <Flex flexDirection={"column"} alignItems={"center"}>
                <Avatar
						size='md'
						name={user.name}
						src={user?.profilePic}
						onClick={(e) => {
							e.preventDefault();
							navigate(`/${user.username}`);
						}}
					/>           
   <Box w="1px" h={"full"} my={2}></Box>
 <Box position={"relative"} w={"full"}>
{post.replies.length===0 && <Text textAlign={"center"}>ups</Text>}
{post.replies[0] && (
<Avatar
	size='xs'
	name='John doe'
	src={post.replies[0].userProfilePic}
	position={"absolute"}
	top={"0px"}
	left='15px'
	padding={"2px"}
	/>
    )}
    {post.replies[1] && (
<Avatar
	size='xs'
	name='John doe'
	src={post.replies[1].userProfilePic}
	position={"absolute"}
	top={"0px"}
	left='15px'
	padding={"2px"}
	/>
    )}


                    </Box>
                </Flex>
                <Flex flex={1} flexDirection={"column"} gap={2}>
                    <Flex justifyContent={"space-between"} w={"full"}>
                        <Flex w={"full"} alignItems={"center"}>
                            <Text fontSize={"sm"} fontWeight={"bold"} 
                      
                         onClick={(e) => {
                             e.preventDefault();
                             navigate(`/${user.username}`);
                         }}
                            >{user?.username}</Text>
                            <Image src='/checkmark.png' w={4} h={4} ml={1} />
                        </Flex>
                        <Flex gap={4} alignItems={"center"}>
                            <Text fontStyle={"sm"} >1d</Text>
                            <BsThreeDots />
                        </Flex>
                    </Flex>
                    <Text fontSize={"sm"}>{post.text}</Text>
                    {post.img && (
                        <Box
                            borderRadius={6}
                            border={"5px solid "}
                        >
                            <Image src={post.img} w={"full"} />
                        </Box>
                    )}
                    <Flex gap={3} my={1}>
                        {/* o sa schimbam culoarea la like cand e vector */}
                        <Actions liked={liked} setLiked={setLiked} />
                    </Flex>
                    <Flex gap={2} alignItems={"center"}>
                        <Text
                            fontSize={"sm"} >
                            {post.replies.length} replies</Text>
                        <Text
                            fontSize={"sm"}>
                            {post.likes.length} likes
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Link>
    )
}

export default Post