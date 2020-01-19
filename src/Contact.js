import React from 'react';
import { Form, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap/'

const Contact = () => (
  <Form>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
    </Form.Text>
      <Col>
        <Form.Control placeholder="First name" />
      </Col>
      <Col>
        <Form.Control placeholder="Last name" />
      </Col>
    </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
)

export default Contact
