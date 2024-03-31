import { Box, Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleLogin = async () => {
        try {
            const res = await axios.post(`http://localhost:8080/users/login`, { email, pass });
            if (res.data.token) {
                localStorage.setItem('token', res.data.token);
            }
            alert(res.data.msg);
        } catch (error) {
            console.log(error);
        }
    };

    return (
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
    );
};

export default Login;
