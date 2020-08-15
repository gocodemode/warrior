import React, { useEffect, useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import API from "../../utils/workouts";
import { Link } from "react-router-dom";
import "./CreateWorkout.css";


const styles = {
    container: {
        marginTop: 25,
        border: "10px solid #df6d3e",
        backgroundColor: "#dfab9e",
        padding: 20,
    },
};

const CreateWorkout = () => {
  const [workout, setWorkouts] = useState();
  const [formObject, setFormObject] = useState({
    name: "",
    location: "",
    description: "",
    Sunday: false,
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
  });

  // Load all workouts and store them with setWorkouts
  useEffect(() => {
    loadWorkouts();
  }, []);

  // Loads all workouts and sets them to workouts
  const loadWorkouts = () => {
    API.getWorkouts()
      .then((res) => setWorkouts(res.data))
      .catch((err) => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (formObject.name && formObject.location) {
      API.saveWorkout({
        name: formObject.name,
        location: formObject.location,
        description: formObject.description,
        daysArray: [
          { value: { isActive: formObject.Sunday, name: "Sunday" } },
          { value: { isActive: formObject.Monday, name: "Monday" } },
          { value: { isActive: formObject.Tuesday, name: "Tuesday" } },
          { value: { isActive: formObject.Wednesday, name: "Wednesday" } },
          { value: { isActive: formObject.Thursday, name: "Thursday" } },
          { value: { isActive: formObject.Friday, name: "Friday" } },
          { value: { isActive: formObject.Saturday, name: "Saturday" } }
        ],

      })
        .then(() =>
        window.location.reload("/viewworkouts")
          // setFormObject({
          //   name: "",
          //   location: "",
          //   description: "",
          //   date: "",
          // })
        )
        .then(() => loadWorkouts())
        .catch((err) => console.log(err));
    }
  };

  const handleCheckboxChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.checked);
    setFormObject({ ...formObject, [e.target.name]: e.target.checked });
  };

  return (
    <div>
      <Container style={styles.container}>
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name of Event"
              onChange={handleInputChange}
              name="name"
              value={formObject.name}
            />
            <br />
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              onChange={handleInputChange}
              placeholder="Location"
              name="location"
              value={formObject.location}
            />
            <br />
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              onChange={handleInputChange}
              placeholder="Description"
              name="description"
              value={formObject.description}
            />
            <br />
            <Form.Label>Date</Form.Label>
            <Form.Check
              id="Sunday"
              label="Sunday"
              onChange={handleCheckboxChange}
              name="Sunday"
              checked={formObject.Sunday}
            />
            <Form.Check
              id="Monday"
              label="Monday"
              onChange={handleCheckboxChange}
              name="Monday"
              checked={formObject.Monday}
            />
            <Form.Check
              id="Tuesday"
              label="Tuesday"
              onChange={handleCheckboxChange}
              name="Tuesday"
              checked={formObject.Tuesday}
            />
            <Form.Check
              id="Wednesday"
              label="Wednesday"
              onChange={handleCheckboxChange}
              name="Wednesday"
              checked={formObject.Wednesday}
            />
            <Form.Check
              id="Thursday"
              label="Thursday"
              onChange={handleCheckboxChange}
              name="Thursday"
              checked={formObject.Thursday}
            />
            <Form.Check
              id="Friday"
              label="Friday"
              onChange={handleCheckboxChange}
              name="Friday"
              checked={formObject.Friday}
            />
            <Form.Check
              id="Saturday"
              label="Saturday"
              onChange={handleCheckboxChange}
              name="Saturday"
              checked={formObject.Saturday}
            />
            <br />
            <Button
              variant="success"
              // disabled={!(formObject.name && formObject.description)}
              onClick={handleFormSubmit}
            >
              <Link to="/viewworkouts" id="white">
                  Create
              </Link>
            </Button>{" "}
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
};

export default CreateWorkout;
