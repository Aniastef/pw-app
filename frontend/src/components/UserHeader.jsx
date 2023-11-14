import { Box, Link, Flex,Text, VStack } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import { CgMoreO } from "react-icons/cg"
import { Menu,MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Portal } from "@chakra-ui/portal";
import { useToast,Button } from '@chakra-ui/react'
import User from "../../../backend/models/userModel";
import {useRecoilValue} from 'recoil'
import userAtom from "../atoms/userAtom";
import { FaCrown } from "react-icons/fa";


import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import useShowToast from "../hooks/useShowToast";

const UserHeader=({user}) =>{

    const toast = useToast()
    const currentUser = useRecoilValue(userAtom)
    const [following,setFollowing]=useState(user.followers.includes(currentUser?._id)) 
 console.log(user.followers)

 const [updating,setUpdating]=useState(false)
  const showToast=useShowToast()

  const copyURL = () => {
    const currentURL = window.location.href;
    navigator.clipboard.writeText(currentURL).then(() => {
        toast({
            title: "Success.",
            status: "success",
            description: "Profile link copied.",
            duration: 3000,
            isClosable: true,
        });
    });
};


const handleFollowUnfollow=async()=>{
    if(!currentUser){
    showToast("Error","Pls login to follow", "error")
return
}

if(updating) return
setUpdating(true)
    try{
const res=await fetch(`/api/users/follow/${user._id}`,{
method: "POST",
headers: {
    "Content-Type": "application/json",
},
})

const data=await res.json()

if(data.error){
    showToast("Error",data.error,"error")
    return
}

if(following){
    showToast("Success",`Unfollowed ${user.name}`,"success")
    user.followers.pop()
}else{
    showToast("Success",`Followed ${user.name}`,"success")
    user.followers.push(currentUser?._id)
}

setFollowing(!following)


    }catch(error){
        showToast("Error",error,"error")
    } finally{
        setUpdating(false)
    }
}
  
return (
    <VStack gap={4} alignItems={"start"}>
        <Flex justifyContent={"space-between"} w={"full"}>
            <Box>
                <Text fontSize={"2xl"} fontWeight={"bold"}>
                    {user.name}
      
                </Text>
                {user.isAdmin && (
                    <Flex alignItems="center">
                    <FaCrown color="pink" />
                    <Text fontSize="sm" ml={1}>
                      ADMIN
                    </Text>
                  </Flex>
            
                )

                }
                <Flex gap={2} alignItems={"center"}>
                    <Text fontSize={"sm"}>{user.username}</Text>
                   
                </Flex>
            </Box>
            <Box>
                {user.profilePic && (
                    <Avatar
                        name={user.name}
                        src={user.profilePic}
                        size={{
                            base: "md",
                            md: "xl",
                        }}
                    />
                )}
                {!user.profilePic && (
                    <Avatar
                        name={user.name}
                        src='https://bit.ly/broken-link'
                        size={{
                            base: "md",
                            md: "xl",
                        }}
                    />
                )}
            </Box>
        </Flex>

        <Text>{user.bio}</Text>

        {currentUser?._id === user._id && (
            <Link as={RouterLink} to='/update'>
                <Button size={"sm"}>Update Profile</Button>
            </Link>
        )}
        {currentUser?._id !== user._id && 
            <Button size={"sm"} 
            onClick={handleFollowUnfollow} 
            isLoading={updating}>
                {following ? "Unfollow" : "Follow"}
            </Button>
        }
        <Flex w={"full"} justifyContent={"space-between"}>
            <Flex gap={2} alignItems={"center"}>
                <Text >{user.followers.length} followers</Text>
                <Box w='1' h='1'  borderRadius={"full"}></Box>
             
            </Flex>
            <Flex>
             
                <Box className='icon-container'>
                    <Menu>
                        <MenuButton>
                            <CgMoreO size={24} cursor={"pointer"} />
                        </MenuButton>
                        <Portal>
                            <MenuList >
                                <MenuItem onClick={copyURL}>
                                    Copy Link 
                                </MenuItem>
                            </MenuList>
                        </Portal>
                    </Menu>
                </Box>
            </Flex>
        </Flex>

        
            <Flex borderBottom={"1.5px solid white"}  pb='3'>
                <Text fontWeight={"bold"} >Posts</Text>
            </Flex>
        
                
            
       
    </VStack>
);
};

export default UserHeader;