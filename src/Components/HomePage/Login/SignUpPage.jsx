import React, { useState } from "react";
import { Card, Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './SignUpPage.css'

const SignupPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("User Registered:", form);

    // redirect after signup
    navigate("/");
  };

  return (
    <Container fluid='lg' className="sign-up mt-5 d-flex justify-content-center py-5">
      <Card style={{ width: "400px" }} className="p-3 shadow">
        <Card.Body>
          <h3 className="text-center mb-3">Create Your Account</h3>
          <p className="text-center text-muted">
            Sign up to get started with Fast Fuel
          </p>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 text-start">
              <Form.Label >Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter full name"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3 text-start">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="tel"
                name="mobile"
                placeholder="Enter mobile number"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3 text-start">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3  text-start">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Create password"
                onChange={handleChange}
                required
              />
            </Form.Group>
 
            <Form.Group className="mb-3 text-start">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Check
              type="checkbox"
              label="I agree to the Terms & Conditions"
              className="mb-3"
              required
            />

            <Button type="submit" className="w-100">
              Sign Up
            </Button>
          </Form>

          <p className="text-center mt-3">
            Already have an account?{" "}
            <span
              style={{ color: "#ff6b00", cursor: "pointer" }}
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SignupPage;