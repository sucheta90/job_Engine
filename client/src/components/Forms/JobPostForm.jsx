/* eslint-disable react/prop-types */
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
  const { handleNewJobFormFill, newJobData, handlePostFormSubmit } = props;

  return (
    <Form>
      <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="">
        <Form.Label className="mr-3">Job Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter job title"
          name="job_title"
          value={newJobData.job_title}
          onChange={handleNewJobFormFill}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="">
        <Form.Label className="mr-3">About Us</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter about company"
          name="company_details"
          value={newJobData.company_details}
          onChange={handleNewJobFormFill}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="">
        <Form.Label className="mr-3">Minimum experience required</Form.Label>
        <Form.Control
          type="number"
          min={0}
          placeholder="Enter minimum experince in years"
          name="experience_min"
          value={newJobData.experience_min}
          onChange={handleNewJobFormFill}
          required
        />
        <Form.Text className="text-muted">
          The seniority level of the position will be set based on experience
          required for the position*
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="">
        <Form.Label className="mr-3">Maximum experience required</Form.Label>
        <Form.Control
          type="number"
          min={0}
          placeholder="Enter maximum experince in years"
          name="experience_max"
          value={newJobData.experience_max}
          onChange={handleNewJobFormFill}
          required
        />
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
          name="run_until"
          value={newJobData.run_until}
          onChange={handleNewJobFormFill}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="">
        <Form.Label className="mr-3">Job Description</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter job details"
          name="description"
          value={newJobData.description}
          onChange={handleNewJobFormFill}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="">
        <Form.Label className="mr-3">Job Responsibilities</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter Job Responsibilities"
          name="responsibility"
          value={newJobData.responsibility}
          onChange={handleNewJobFormFill}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="">
        <Form.Label className="mr-3">Skills Required</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter Requirements"
          className="mr-1"
          name="skills"
          value={newJobData.skills}
          onChange={handleNewJobFormFill}
          required
        />
        <Form.Text className="text-muted">
          Please keep skills comma (,) separated
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="">
        <Form.Label className="mr-3">Compensation minimum</Form.Label>
        <Form.Control
          type="number"
          placeholder="Compensation min"
          min={0}
          name="salary_min"
          value={newJobData.salary_min}
          onChange={handleNewJobFormFill}
          required
        />
        <Form.Label className="mr-3">Compensation maximum</Form.Label>
        <Form.Control
          type="text"
          placeholder="Compensation max"
          min={0}
          name="salary_max"
          value={newJobData.salary_max}
          onChange={handleNewJobFormFill}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="">
        <Form.Label className="mr-3">Benefits or Perks</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter benefits and perks"
          name="benefits"
          value={newJobData.benefits}
          onChange={handleNewJobFormFill}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="">
        <Form.Label className="mr-3">City</Form.Label>
        <Form.Control
          type="text"
          placeholder="Job located in city"
          name="location_city"
          value={newJobData.location_city}
          onChange={handleNewJobFormFill}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="">
        <Form.Label className="mr-3">State</Form.Label>
        <Form.Control
          type="text"
          placeholder="Job located in state"
          name="location_state"
          value={newJobData.location_state}
          onChange={handleNewJobFormFill}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="">
        <Form.Label className="mr-3">Job Type</Form.Label>
        <Form.Select
          aria-label="Default select example"
          name="job_type"
          value={newJobData.job_type}
          onChange={handleNewJobFormFill}
          required
        >
          <option>Select job type</option>
          <option value="In-person">In-person</option>
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
        </Form.Select>
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        className="mr-3"
        onClick={handlePostFormSubmit}
      >
        Save as Draft
      </Button>
      <Button variant="primary" type="">
        Back to Dashboard
      </Button>
    </Form>
  );
}

export default JobPostForm;
