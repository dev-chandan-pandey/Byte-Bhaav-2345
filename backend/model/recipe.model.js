const mongoose = require("mongoose")
const RecipeSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    description: String,
    ingredients: [{
      name: {
        type: String,
        required: true
      },
      quantity: {
        type: Number,
        required: true
      },
      unit: String
    }],
    instructions: {
      type: String,
      required: true
    },
    prepTime: Number,
    cookTime: Number,
    totalTime: Number,
    servings: Number,
    cuisine: String,
    mealType: String,
    difficulty: {
      type: String,
      enum: ['Easy', 'Medium', 'Hard']
    },
    tags: [String],
    imageUrl: String,
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: Date
  });

  const Recipe = mongoose.model('Recipe', RecipeSchema);
  
  module.exports = {
	UserModel
}