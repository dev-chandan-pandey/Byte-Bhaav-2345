import { Box, Button, Input, Select } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [membership, setMembership] = useState("regular");

    const handleSignup = async () => {
        try {
            const res = await axios.post(`http://localhost:8080/users/register`, { username, email, pass, membership });
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
                        value={username}
                        placeholder="Enter your username here"
                        onChange={(e) => setUsername(e.target.value)}
                        mb="4"
                    />
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
                    <Select
                        value={membership}
                        onChange={(e) => setMembership(e.target.value)}
                        mb="4"
                    >
                        <option value="regular">Regular</option>
                        <option value="silver">Silver</option>
                        <option value="premium">Premium</option>
                    </Select>
                    <Button onClick={handleSignup}>
                        Register
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Signup;
