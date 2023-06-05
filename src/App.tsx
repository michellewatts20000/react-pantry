import React, { useState, useEffect, useRef, KeyboardEvent } from "react";

import {
  Typography,
  Grid,
  TextField,
  InputAdornment,
  Button,
  Card,
  CardContent,
  CardActions,
  CardMedia,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear"

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState("")
  const [inputArray, setInputArray] = useState<string[]>([])
  const [recipes, setRecipes] = useState<any[]>([])
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);


  const handleClick = () => {
    setInputArray([...inputArray, inputValue]);
    setInputValue("");
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      handleClick();
    }
  };

  const clearRecipes = () => {
    setInputArray([]);
    setInputValue("");
    setRecipes([]);
  };

  const handleRemove = (item: string) => {
    const updatedArray = inputArray.filter((value) => value !== item);
    setInputArray(updatedArray);
  };

  const handleGetRecipes = () => {
    const ingredientList = inputArray.join("+")
    const apiKey = process.env.REACT_APP_RECIPE_API_KEY

    const apiUrl = `https://api.edamam.com/search?q=${ingredientList}&app_id=a708b654&app_key=${apiKey}`

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.hits);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Grid item style={{ margin: "100px", textAlign: "center" }}>
        <Typography variant="h1" align="center" style={{ fontFamily: "Geologica, sans-serif", fontWeight:'900' }} gutterBottom>
          What's in my pantry?
        </Typography>
        <Typography variant="h5" align="center">
          Search for recipes based on ingredients in your pantry.
        </Typography>
        <TextField
          id="outlined-basic"
          label="Add an ingredient"
          variant="outlined"
          inputRef={inputRef}
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={handleKeyDown}
          style={{ margin: "25px", width: "300px" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleClick}
                  style={{ backgroundColor: '#E81DCB' }}
                >
                  +
                </Button>
              </InputAdornment>
            ),
          }}
        />
        <Grid
          container
          justifyContent="center"
          spacing={1}
          style={{ marginTop: "10px" }}
        >
          {inputArray.map((item, index) => (
            <Grid item key={index}>
              <Button
                variant="outlined"
                style={{ color: '#E81DCB', border: '#E81DCB' }}
                startIcon={<ClearIcon />}
                onClick={() => handleRemove(item)}
              >
                {item}
              </Button>
            </Grid>
          ))}
        </Grid>
        <Grid
          container
          justifyContent="center"
          spacing={1}
          style={{ marginTop: "10px" }}
        >
          <Grid item>
            <Button size="large" variant="contained" style={{ backgroundColor: '#4b4efc' }} onClick={handleGetRecipes}>
              Get Recipes
            </Button>
          </Grid>
          <Grid item>
            <Button style={{ color: '#4b4efc', borderColor: '#4b4efc' }} variant="outlined" size="large" onClick={clearRecipes}>
              Clear
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="center"
          spacing={2}
          style={{ marginTop: "20px" }}
        >
          {recipes.map((recipe, index) => (
            <Grid item key={index}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={recipe.recipe.image}
                  title={recipe.recipe.label}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {recipe.recipe.label}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {recipe.recipe.healthLabels}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">
                    {" "}
                    <a
                      href={recipe.recipe.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      See Recipe
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
