/* ***************************************************
The below form will be used to post a new job. 
This from will be reused in case of editing of 
updating a job details and for drafting a job posting.
****************************************************** 
*/
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// eslint-disable-next-line no-unused-vars
function JobPostForm(props) {
  return (
    <Form>
      <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="">
        <Form.Label className="mr-3">Job Title</Form.Label>
        <Form.Control type="text" placeholder="Enter job title" />
      </Form.Group>
      <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="">
        <Form.Label className="mr-3">About Us</Form.Label>
        <Form.Control as="textarea" placeholder="Enter about company" />
      </Form.Group>
      <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="">
        <Form.Label className="mr-3">Minimum experience required</Form.Label>
        <Form.Control
          type="number"
          min={0}
          placeholder="Enter minimum experince in years"
        />
      </Form.Group>
      <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="">
        <Form.Label className="mr-3">Maximum experience required</Form.Label>
        <Form.Control
          type="number"
          min={0}
          placeholder="Enter maximum experince in years"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Text className="text-muted">
          The seniority level of the position will be set based on experience
          required for the position*
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="">
        <Form.Label className="mr-3">Position Open for days</Form.Label>
        <Form.Control
          type="number"
          placeholder="How long do you wish to run this position for?"
          min={0}
        />
      </Form.Group>
      <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="">
        <Form.Label className="mr-3">Job Description</Form.Label>
        <Form.Control as="textarea" placeholder="Enter job details" />
      </Form.Group>
      <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="">
        <Form.Label className="mr-3">Job Responsibilities</Form.Label>
        <Form.Control as="textarea" placeholder="Enter Job Responsibilities" />
      </Form.Group>
      <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="">
        <Form.Label className="mr-3">Requirements</Form.Label>
        <Form.Control as="textarea" placeholder="Enter Requirements" />
        <Form.Text className="text-muted">
          The seniority level of the position will be set based on experience
          required for the position*
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="">
        <Form.Label className="mr-3">Compensation minimum</Form.Label>
        <Form.Control type="text" placeholder="Compensation min" />
        <Form.Label className="mr-3">Compensation maximum</Form.Label>
        <Form.Control type="text" placeholder="Compensation max" />
      </Form.Group>
      <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="">
        <Form.Label className="mr-3">Benefits or Perks</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="How long do you wish to run this position for?"
        />
      </Form.Group>
      <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="">
        <Form.Label className="mr-3">City</Form.Label>
        <Form.Control type="text" placeholder="Job located in city" />
      </Form.Group>
      <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="">
        <Form.Label className="mr-3">State</Form.Label>
        <Form.Control type="text" placeholder="Job located in state" />
      </Form.Group>
      <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="">
        <Form.Label className="mr-3">Job Type</Form.Label>
        <Form.Select aria-label="Default select example">
          <option>Select job type</option>
          <option value="In-person">In-person</option>
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
        </Form.Select>
      </Form.Group>

      <Button variant="primary" type="submit">
        Save as Draft
      </Button>
      <Button variant="primary" type="">
        Back to Dashboard
      </Button>
    </Form>
  );
}

export default JobPostForm;
