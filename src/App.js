import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material"; // Ensure @mui/material is installed

import "./App.css"; // Make sure App.css exists in the src directory
import ExerciseDetail from "./pages/ExerciseDetail"; // Ensure this file exists
import Home from "./pages/Home"; // Ensure this file exists
import Navbar from "./components/Navbar"; // Ensure this file exists
import Footer from "./components/Footer"; // Ensure this file exists

const App = () => (
  <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
    </Routes>
    <Footer />
  </Box>
);

export default App;
