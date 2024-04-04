import { Box } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PostCard from './PostCard';

const ViewPosts = () => {
    const [posts, setPosts] = useState([]);
    const token = localStorage.getItem('token');

    const fetchAllPosts = async () => {
        try {
            const res = await axios.get(`https://byte-bhaav-2345.onrender.com/posts/`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            // Reverse the order of posts before setting state
            setPosts(res.data.posts.reverse());
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchAllPosts();
    }, [posts]);

    return (
        <Box margin={"auto"}>
            {posts.map((ele, i) => (
                <PostCard key={i} {...ele} />
            ))}
        </Box>
    );
};

export default ViewPosts;
