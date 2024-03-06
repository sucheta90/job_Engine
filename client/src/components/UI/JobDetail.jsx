/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// import axios from "axios";

export default function JobDetail(props) {
  const { handleCloseDetails, job } = props;

  return (
    <div className="p-3">
      <h2 className="mb-3">Job Details</h2>
      <Card
        data-id={job.id}
        style={{ boxShadow: "-3px 5px 8px grey" }}
        className="p-3"
      >
        <section>
          <Button
            style={{ float: "inline-end", boxShadow: "-3px 5px 8px grey" }}
            aria-label="Close"
            className="btn btn-dark btn-sm "
            onClick={handleCloseDetails}
          >
            X
          </Button>
        </section>
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title>
            {job.experience} {job.job_title}
          </Card.Title>
          <Card.Text>{job.company_details}</Card.Text>
          <Card.Text>
            <b>Description</b> <br />
            {job.description}
          </Card.Text>
          <Card.Text>
            <b>Exprerience required</b> <br /> {job.experience_min} -{" "}
            {job.experience_max} years
          </Card.Text>
          <Card.Text>
            <b>Skills Required</b> {job.skills}
          </Card.Text>

          <Card.Text>
            <b>Postion</b> {job.job_type}
          </Card.Text>
          <Card.Text>
            <b>Location</b> {job.location_city}, {job.location_state}
          </Card.Text>
          <Card.Text>
            <b>Responsibilities Include</b> {job.responsibility}
          </Card.Text>
          <Card.Text>
            <b>Estimated Annual Salary</b> ${job.salary_min} - ${job.salary_max}
          </Card.Text>
          <Card.Text>
            <b>Expiry Date</b>
          </Card.Text>

          <Button variant="primary" className="mr-3">
            Apply
          </Button>
          <Button onClick={handleCloseDetails}>Back to Jobs List</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
