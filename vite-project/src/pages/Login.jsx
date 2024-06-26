import { Box, Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleLogin = async () => {
        try {
            const res = await axios.post(`https://byte-bhaav-2345.onrender.com/users/login`, { email, pass });
            if (res.data.token) {
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('username',res.data.username);
                localStorage.setItem('email',res.data.email);
                localStorage.setItem('membership',res.data.membership);
                localStorage.setItem('role',res.data.role);
                localStorage.setItem("isLoggedIn",true);
navigate("/")
                
            }
            alert(res.data.msg);
            
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Box
        style={{
            backgroundImage: `url('https://raw.githubusercontent.com/VishnurajKarockal/Resources/main/byte-bhaav-unit6-project-recipe_images/katie-smith-uQs1802D0CQ-unsplash.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
        >
            <Box
            width={{ base: '100%', md: '80%', lg: "60%" }}
            margin="auto"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
            
        >
            <Box
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                p="6"
                boxShadow="xl"
            >
                <Input
                    value={email}
                    placeholder="Enter your email here"
                    onChange={(e) => setEmail(e.target.value)}
                    mb="4"
                />
                <Input
                    value={pass}
                    type="password"
                    placeholder="Enter your password here"
                    onChange={(e) => setPass(e.target.value)}
                    mb="4"
                />
                <Button onClick={handleLogin} >
                    Login
                </Button>
            </Box>
        </Box>
        </Box>
    );
};

export default Login;
