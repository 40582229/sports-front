
import React, { Dispatch, SetStateAction, useState} from "react";
import { TextField, Button, Box, Typography, List, ListItem, ListItemText } from "@mui/material";

interface HomeScreenProps{
    setRoute:Dispatch<SetStateAction<string>>
}
const HomeScreen = ({setRoute}:HomeScreenProps) =>{
  const [formData, setFormData] = useState({
    name: "",
    reps: "",
    sets: "",
  });
  const [exercises, setExercises] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddExercise = () => {
    const { name, reps, sets } = formData;
    if (name && reps && sets) {
      setExercises([...exercises, formData]);
      // Clear the form
      setFormData({ name: "", reps: "", sets: "" });
    } else {
      alert("Please fill all fields!");
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
      sx={{ fontWeight: 'bold', display: 'block', marginBottom: 1 }}
    >
      Exercises
    </Typography>
    <Box
      sx={{
        width: "auto", // Set the width of the scroll area
        height: "400px", // Set the height of the scroll area
        overflowY: "auto", // Enable vertical scrolling
        border: "1px solid #ccc", // Optional: Add a border
        padding: 2, // Optional: Add some padding
        borderRadius: "8px", // Optional: Add rounded corners
      }}
    >
      {    <List>
        {exercises.map((exercise, index) => (
                <Typography
                variant="subtitle2"
                component="label"
                htmlFor="exercise-name"
                sx={{ fontWeight: 'bold', display: 'block', marginBottom: 1 }}
              >
                          <ListItem key={index}>
            <ListItemText
              primary={`${exercise.name}`}
              secondary={`Reps: ${exercise.reps}, Sets: ${exercise.sets}`}
            />
          </ListItem>
              </Typography>

        ))}
      </List>}
    </Box>


    </Box>
  );
}

export default HomeScreen
