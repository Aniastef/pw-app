import { Flex,Box,Text } from "@chakra-ui/react";
import userAtom from "../atoms/userAtom";
import useShowToast from "../hooks/useShowToast";
import { useState } from "react";
import {useRecoilValue} from "recoil"


const Actions = ({ post :post_}) => {
	const user=useRecoilValue(userAtom)
	const [liked,setLiked]=useState(post_.likes.includes(user?._id))


const showToast=useShowToast()
const [post,setPost]=useState(post_)

	const handleLikeAndUnlike = async () => {
		if (!user) return showToast("Error", "You must be logged in to like a post", "error");
		//if (isLiking) return;
		//setIsLiking(true);
		try {
			const res = await fetch("/api/posts/like/" + post._id, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
			});
			const data = await res.json();
			if (data.error) return showToast("Error", data.error, "error");
			console.log(data)
			 if (!liked) {
				setPost({...post,likes:[...post.likes,user._id]})}
				else{
				setPost({...post,likes:post.likes.filter(id=>id!==user._id)})
				}

				setLiked(!liked)
			// 	const updatedPosts = posts.map((p) => {
			// 		if (p._id === post._id) {
			// 			return { ...p, likes: [...p.likes, user._id] };
			// 		}
			// 		return p;
			// 	});
			// 	setPosts(updatedPosts);
			// } else {
			// 	// remove the id of the current user from post.likes array
			// 	const updatedPosts = posts.map((p) => {
			// 		if (p._id === post._id) {
			// 			return { ...p, likes: p.likes.filter((id) => id !== user._id) };
			// 		}
			// 		return p;
			// 	});
			// 	setPosts(updatedPosts);
			// }

			// setLiked(!liked);
		} catch (error) {
			showToast("Error", error.message, "error");
		// } finally {
		// 	setIsLiking(false);
		}
	};



	return (
		<Flex
			borderRadius={"10 px"} bgColor={"#ffffff"} gap={3} my={2} 
			onClick={(e) => e.preventDefault()}>
			<img
				src='/like.png'
				alt="Like"
				height="19"
				width="20"
				onClick={handleLikeAndUnlike}
				style={{ cursor: "pointer" }}
			/>

			<img
				src="/comment.png"
				alt="Comment"
				height="20"
				width="20"
			//aici o sa te trimita la comentariu
				style={{ cursor: "pointer" }}
			/>
<Flex gap={2} alignItems={"center"}>
				<Text fontSize='sm'>
					{post.replies.length} replies
				</Text>
				<Box w={0.5} h={0.5} borderRadius={"full"}></Box>
				<Text  fontSize='sm'>
					{post.likes.length} likes
				</Text>
			</Flex>

		</Flex>
	)
}

export default Actions