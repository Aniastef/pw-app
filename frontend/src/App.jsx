import {Button} from "@chakra-ui/button";
import { Container } from "@chakra-ui/react";
import { Navigate,Route, Routes } from "react-router-dom";
import PostPage from "./pages/PostPage";
import UserPage from "./pages/UserPage";
import Header from "./components/Header";
import userAtom from "./atoms/userAtom";
import { useRecoilValue } from "recoil";
import HomePage from "./pages/HomePage";
import LogoutButton from "./components/LogoutButton";
import AuthPage from "./pages/AuthPage";
import UpdateProfilePage from "./pages/UpdateProfilePage";
function App() {

  const user=useRecoilValue(userAtom)
  console.log(user)

  return  (
   <>
   <Container >
    <Header />
   <Routes>
    <Route path='/' element={user ? <HomePage /> : <Navigate to='/auth' />} />
	 <Route path='/auth' element={!user ? <AuthPage /> : <Navigate to='/' />} /> 
   <Route path='/update' element={user ? <UpdateProfilePage /> : <Navigate to='/auth' />} />
    
    
    <Route path="/:username" element={<UserPage/>}/>
    <Route path="/:username/post/:pid" element={<PostPage/>}/>
   </Routes>

   {user && <LogoutButton/>}
   </Container>
   </>
  );
}

export default App;
