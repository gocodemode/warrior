import React, { useEffect, useState } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

function Workouts() {
  // Setting our component's initial state
  const [books, setWorkouts] = useState([])
  const [formObject, setFormObject] = useState({
    name: "",
    instructor: "",
    description: ""
  })

  // Load all books and store them with setBooks
  useEffect(() => {
    loadWorkouts()
  }, [])

  // Loads all books and sets them to books
  function loadWorkouts() {
    API.getWorkouts()
      .then(res => 
        setWorkouts(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteWorkout(id) {
    API.deleteWorkout(id)
      .then(res => loadWorkout())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveWorkout method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.name && formObject.Instructor) {
      API.saveWorkout({
        name: formObject.name,
        location: formObject.location,
        description: formObject.description
      })
        .then(() => setFormObject({
          name: "",
          location: "",
          description: ""
        }))
        .then(() => loadWorkouts())
        .catch(err => console.log(err));
    }
  };
};