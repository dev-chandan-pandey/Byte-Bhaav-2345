import React from 'react';
import { Box, Image, Badge, Flex, Text, Button } from '@chakra-ui/react';

const PostCard = (ele) => {
  const { title, description, type, ingredients, cookingTime, like, image } = ele;
  console.log(ingredients);
  return (
    <Box maxW="80%" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" mb={4}>
      <Image src={image} alt={title} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {type}
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {cookingTime} min
          </Box>
        </Box>

        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
          {title}
        </Box>

        <Text mt="2" color="gray.600">
          {description}
        </Text>

        <Flex mt="2" alignItems="center">
          <Text fontSize="sm" mr="2">
            Ingredients:
          </Text>
          <Text fontSize="sm">{ingredients.map(ingredient => ingredient.name + " " + ingredient.quantity).join(', ')}</Text>
        </Flex>

        <Flex mt="2" justifyContent="space-between" alignItems="center">
          <Button colorScheme="teal" size="sm" leftIcon={<i className="fas fa-thumbs-up"></i>} variant="outline">
            Like ({like})
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default PostCard;
