import UserHeader from "../components/UserHeader"
import UserPost from "../components/UserPost"

const UserPage = () => {
    return (
        <>
        <UserHeader/>
        <UserPost likes={1200} replies={2312} postImg="/four-cats." postTitle="ciauauau"/>
        <UserPost likes={123210} replies={2212} postImg="/1.jpg" postTitle="lalalal"/>
        <UserPost likes={110} replies={22} postImg="/2.jpg" postTitle="lalalsadal"/>
        <UserPost likes={120} replies={233212} postImg="/3.jpg" postTitle="lalalsdfgal"/>
        </>
    )
    
  };
  
  export default UserPage;
  
