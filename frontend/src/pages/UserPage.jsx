import { useEffect,useState } from "react";
import UserHeader from "../components/UserHeader"
import UserPost from "../components/UserPost"
import { useParams } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";
import { Flex, Spinner } from "@chakra-ui/react";

const UserPage = () => {
    const [user,setUser]=useState(null)
    const {username}=useParams()
    const showToast=useShowToast()
    const [loading,setLoading]=useState(true)

    useEffect(() => {
		const getUser=async()=> {
            try{
                const res=await fetch(`/api/users/profile/${username}`)
                const data=await res.json()
                if(data.error){
                    showToast("Error",data.error,"error")
                    return
                }
            
            setUser(data)

        }catch(error){
         showToast("Error",error,"error")
        }finally{
           setLoading(false) 
        }
		}
        getUser()
	}, [username,showToast])

    if(!user && loading){
        return(
            <Flex justifyContent={"center"}>
            <Spinner size="xl"/>
            </Flex>
           
        )
    }

    
    if(!user && !loading)
        return
        <h1>User not found</h1>
   
    
 
    
    return (
        <>
            <UserHeader user={user} />
            <UserPost likes={1200} replies={2312} postImg="/four-cats.jpg" postTitle="ciauauau" />
            <UserPost likes={123210} replies={2212} postImg="/1.jpg" postTitle="lalalal" />
            <UserPost likes={110} replies={22} postImg="/2.jpg" postTitle="lalalsadal" />
            <UserPost likes={120} replies={233212} postImg="/3.jpg" postTitle="lalalsdfgal" />
        </>
    )

};

export default UserPage;

