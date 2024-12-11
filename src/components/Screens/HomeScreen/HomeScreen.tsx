import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { handleExcersise, handleGetExcersise, verifyToken } from "Methods/methods";

interface HomeScreenProps {
  setRoute: Dispatch<SetStateAction<string>>;
}
const HomeScreen = ({ setRoute }: HomeScreenProps) => {


  const [formData, setFormData] = useState({
    name: "",
    weight:"",
    reps: "",
    sets: "",
    date:""
  });

  const [exercises, setExercises] = useState([]);
  
  const getUserExcersises = async ()=>{
    const excersises = await handleGetExcersise();
    if(excersises['error']){
      console.log(excersises)
      setRoute('login')
    }
    console.log(excersises)
    setExercises(excersises['excersises'])
  }
  useEffect(()=>{
    getUserExcersises();
  },[])
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddExercise = async () => {
    const { name, weight ,reps, sets, } = formData;
    const currentDate = new Date().toISOString().slice(0, 10);
     if (name && reps && sets ) {

      const excersise = {
        name: name,
        weight: weight,
        reps: reps,
        sets: sets,
        date: currentDate
      };
      const handleAddExerciseResponse = await handleExcersise(excersise);
      console.log(handleAddExerciseResponse);
      if (!handleAddExerciseResponse["error"]) {
        
        setExercises([...exercises, {...formData, date:currentDate}]);
        setFormData({ name: "", weight:"" ,reps: "", sets: "", date:""});
      }
    }
  };

  return (
    <Box
      component="form"
      sx={{
        maxWidth: 400,
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: 2,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h6" textAlign="center">
        Add New Exercise
      </Typography>

      <TextField
        label="Exercise Name"
        variant="outlined"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <TextField
        label="Weight"
        variant="outlined"
        type="number"
        name="weight"
        value={formData.weight}
        onChange={handleChange}
        required
        inputProps={{ min: 0 }}
      />

      <TextField
        label="Reps"
        variant="outlined"
        type="number"
        name="reps"
        value={formData.reps}
        onChange={handleChange}
        required
        inputProps={{ min: 1 }}
      />

      <TextField
        label="Sets"
        variant="outlined"
        type="number"
        name="sets"
        value={formData.sets}
        onChange={handleChange}
        required
        inputProps={{ min: 1 }}
      />
      <Button variant="contained" color="primary" onClick={handleAddExercise}>
        Add Exercise
      </Button>
      <Typography
        variant="subtitle1"
        component="label"
        htmlFor="exercises"
        sx={{ fontWeight: "bold", display: "block", marginBottom: 1 }}
      >
        Exercises
      </Typography>
      <Box
        sx={{
          width: "auto", 
          height: "400px", 
          overflowY: "auto", 
          border: "1px solid #ccc", 
          padding: 2, 
          borderRadius: "8px", 
        }}
      >
        {
          <List>
            {exercises.slice().reverse().map((exercise, index) => (
              <Typography 
                variant="subtitle2"
                component="label"
                htmlFor="exercise-name"
                sx={{ fontWeight: "bold", display: "block", marginBottom: 1 }}
              >
                <ListItem key={index}>
                  <ListItemText
                    primary={`${exercise.name}`}
                    secondary={ `Weight:${exercise.weight}kg, Reps: ${exercise.reps}, Sets: ${exercise.sets}, Date: ${exercise.date}`}
                  />
                </ListItem>
              </Typography>
            ))}
          </List>
        }
      </Box>
    </Box>
  );
};

export default HomeScreen;
