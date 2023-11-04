import { Flex } from "@chakra-ui/react";


const Actions = ({ liked, setLiked }) => {
	return (
		<Flex
			borderRadius={"10 px"} bgColor={"#ffffff"} gap={3} my={2} 
			onClick={(e) => e.preventDefault()}>
			<img
				src='/like.png'
				alt="Like"
				height="19"
				width="20"
				onClick={() => setLiked(!liked)}
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


		</Flex>
	)
}

export default Actions