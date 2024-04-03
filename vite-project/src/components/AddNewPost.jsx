import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Stack, Textarea, useToast } from '@chakra-ui/react';
import axios from 'axios';

const AddNewPost = () => {
    const token = localStorage.getItem("token")
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: '',
    image: null,
    ingredients: [{ name: '', quantity: '' }]
  });

  const toast = useToast();

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    if (name === 'image') {
      setFormData({
        ...formData,
        [name]: e.target.files[0]
      });
    } else if (name === 'ingredientName' || name === 'ingredientQuantity') {
      const newIngredients = [...formData.ingredients];
      newIngredients[index][name.slice(9)] = value;
      setFormData({
        ...formData,
        ingredients: newIngredients
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleAddIngredient = () => {
    setFormData({
      ...formData,
      ingredients: [...formData.ingredients, { name: '', quantity: '' }]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = new FormData();
    postData.append('title', formData.title);
    postData.append('description', formData.description);
    postData.append('type', formData.type);
    postData.append('image', formData.image); // Append the file directly to FormData
    formData.ingredients.forEach((ingredient, index) => {
      postData.append(`ingredients[${index}][name]`, ingredient.name);
      postData.append(`ingredients[${index}][quantity]`, ingredient.quantity);
    });

    try {
      await axios.post('http://localhost:8080/posts/register', postData, {
        headers: {
            Authorization:`Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log("pppppppppppp",formData)
      toast({
        title: 'Success!',
        description: 'New post has been added.',
        status: 'success',
        duration: 3000,
        isClosable: true
      });
      // Reset form data
      setFormData({
        title: '',
        description: '',
        type: '',
        image: null,
        ingredients: [{ name: '', quantity: '' }]
      });
    } catch (error) {
      toast({
        title: 'Error!',
        description: 'An error occurred while adding the post.',
        status: 'error',
        duration: 3000,
        isClosable: true
      });
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input type="text" name="title" value={formData.title} onChange={handleInputChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Textarea name="description" value={formData.description} onChange={handleInputChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Type</FormLabel>
          <Input type="text" name="type" value={formData.type} onChange={handleInputChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Image</FormLabel>
          <Input type="file" name="image" onChange={handleInputChange} />
        </FormControl>
        <Stack spacing={4}>
        {formData.ingredients.map((ingredient, index) => (
            <Stack key={index} direction="row" spacing={4}>
                <FormControl>
                <FormLabel>Ingredient Name</FormLabel>
                <Input
                    type="text"
                    name={`ingredientName-${index}`} // Use dynamic name
                    // value={ingredient.name}
                    onChange={(e) => handleInputChange(e, index)}
                />
                </FormControl>
                <FormControl>
                <FormLabel>Quantity</FormLabel>
                <Input
                    type="text"
                    name={`ingredientQuantity-${index}`} // Use dynamic name
                    // value={ingredient.quantity}
                    onChange={(e) => handleInputChange(e, index)}
                />
                </FormControl>
            </Stack>
            ))}
        </Stack>
        <Button onClick={handleAddIngredient} mt={4}>
          +
        </Button>
        <Button mt={4} type="submit">
          Post
        </Button>
      </form>
    </Box>
  );
};

export default AddNewPost;
