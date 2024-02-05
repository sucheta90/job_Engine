/* ***************************************************
The below form will be used to post a new job. 
This from will be reused in case of editing of 
updating a job details and for drafting a job posting.
****************************************************** 
*/
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function JobPostForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default JobPostForm;
