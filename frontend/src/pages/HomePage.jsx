import { Button,Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const HomePage = () => {
	// const [posts, setPosts] = useRecoilState(postsAtom);
	// const [loading, setLoading] = useState(true);
	// const showToast = useShowToast();
	// useEffect(() => {
	// 	const getFeedPosts = async () => {
	// 		setLoading(true);
	// 		setPosts([]);
	// 		try {
	// 			const res = await fetch("/api/posts/feed");
	// 			const data = await res.json();
	// 			if (data.error) {
	// 				showToast("Error", data.error, "error");
	// 				return;
	// 			}
	// 			console.log(data);
	// 			setPosts(data);
	// 		} catch (error) {
	// 			showToast("Error", error.message, "error");
	// 		} finally {
	// 			setLoading(false);
	// 		}
	// 	};
	// 	getFeedPosts();
	// }, [showToast, setPosts]);

	return (
	<Link to={"/istvanstefania"}>
<Flex w={"full"}
justifyContent={"center"}>

	<Button mx={"auto"}>Visit profile page</Button>
</Flex>

	</Link>
	);
};

export default HomePage;