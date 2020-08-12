import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import API from "../../src/utils/workouts";

const styles = {
    container: {
        marginTop: 25,
    },
};



const CreateWorkout = () => {
    const [workouts, setWorkouts] = useState([]);
    const [formObject, setFormObject] = useState({
        name: "",
        description: "",
        location: "",
        date: ""
      })

      // Load all workouts and store them with setWorkouts
      useEffect(() => {
        loadWorkouts()
      }, [])
    
        // Loads all workouts and sets them to workouts
  function loadWorkouts() {
    API.getWorkouts()
      .then(res => 
        setWorkouts(res.data)
      )
      .catch(err => console.log(err));
  };

       // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };


  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.name && formObject.location) {
      API.saveWorkout({
        name: formObject.name,
        description: formObject.description,
        location: formObject.location,
        date: formObject.date
      })
        .then(() => setFormObject({
          name: "",
          location: "",
          description: "",
          date: ""
        }))
        .then(() => loadWorkouts())
        .catch(err => console.log(err));
    }
  };
    return (
        <div>
            <Container style={styles.container}>
                <Form>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name of Event" 
                        onChange={handleInputChange}
                        name="name"
                        placeholder="Name"
                        value={formObject.name}/>
                        <br /> 
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" placeholder="Where will the session be?" 
                        onChange={handleInputChange}
                        placeholder="Location"
                        name="location"
                        value={formObject.location}/>
                        <br />
                        <Form.Label>Date</Form.Label>
                            <Form.Check id="Sunday" label="Sunday" />
                            <Form.Check id="Monday" label="Monday" />
                            <Form.Check id="Tuesday" label="Tuesday" />
                            <Form.Check id="Wednesday" label="Wednesday" />
                            <Form.Check id="Thursday" label="Thursday" />
                            <Form.Check id="Friday" label="Friday" />
                            <Form.Check id="Saturday" label="Saturday" ></Form.Check>
                        <br />
                        <Button variant="success"
                        // disabled={!(formObject.name && formObject.description)}
                        onClick={handleFormSubmit}>Create</Button>{' '}      
                    </Form.Group>
                </Form>
            </Container>
        </div>
    );
};

export default CreateWorkout;