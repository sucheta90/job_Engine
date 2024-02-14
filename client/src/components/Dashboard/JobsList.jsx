/* eslint-disable react/prop-types */
// import CardComponent from "../UI/Card";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function JobsList({ allJobs }) {
  console.log("This is alljobs", allJobs);
  return (
    <div>
      <h1>All Jobs</h1>
      <div>
        {allJobs.length >= 1
          ? allJobs.map((job) => {
              return (
                <Card key={job.id} className="mb-3">
                  <Card.Img variant="top" />
                  <Card.Body>
                    <Card.Title>{job.job_title}</Card.Title>
                    <Card.Text>
                      <p>{job.company_details}</p>
                    </Card.Text>
                    <Button variant="primary" className="mr-3">
                      Edit
                    </Button>
                    {job.job_status === "inactive" && (
                      <Button variant="primary">Publish</Button>
                    )}
                    {job.job_status === "active" && (
                      <Button variant="primary">Go somewhere</Button>
                    )}
                  </Card.Body>
                </Card>
              );
            })
          : `Did not find a post`}
      </div>
    </div>
  );
}
