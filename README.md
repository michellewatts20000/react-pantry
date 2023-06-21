# Pantry Recipe Finder

This is a React component called App.ts that allows you to search for recipes based on the ingredients in your pantry. It provides a user interface where you can add ingredients, select dietary restrictions, and retrieve recipes from an external API. The component is built using Material-UI for the UI components and styling.

## Installation

To use this component in your React project, follow these steps:

1. Install the required dependencies by running the following command:
`npm install @mui/material react react-dom @mui/icons-material`

2. Copy the App.ts code and paste it into your project's component file.

3. Make sure to have the required environment variable `REACT_APP_RECIPE_API_KEY` set with your API key for the recipe data source.

4. Use the App component in your application by importing it and rendering it in a suitable location.
```jsx
import React from 'react';
import App from './App';

function MyPantryApp() {
  return <App />;
}

export default MyPantryApp;
```
5. Run your React application and navigate to the page where the App component is rendered. You should see the Pantry Recipe Finder interface.

## Usage
The Pantry Recipe Finder allows you to perform the following actions:

Add an ingredient to your pantry by entering it in the text field and clicking the "ADD" button.

Remove an ingredient from your pantry by clicking the "x" icon next to the ingredient.

Select a dietary restriction from the dropdown menu to filter recipes accordingly.

Click the "Get Recipes" button to retrieve recipes based on the ingredients in your pantry and the selected dietary restriction.

Click the "Clear" button to reset the pantry and remove all ingredients and selected options.

The retrieved recipes will be displayed as cards with the recipe name, meal type, and a link to view the full recipe.

Please note that this component relies on an external API (https://api.edamam.com/search) to fetch the recipe data. Make sure you have a valid API key and configure it in the component's code.

## Dependencies
The Pantry Recipe Finder component utilises the following dependencies:

React - JavaScript library for building user interfaces.
@mui/material - Material-UI library that provides pre-built React components and styling.
@mui/icons-material - Material-UI library that provides icons used in the component.
Make sure to include these dependencies in your project for the component to work correctly.

## Credits
The Pantry Recipe Finder component was developed by [your name] and is based on React and Material-UI. It utilizes the Edamam API to fetch recipe data.

## License
This component is released under the MIT License. Feel free to modify and use it in your projects.