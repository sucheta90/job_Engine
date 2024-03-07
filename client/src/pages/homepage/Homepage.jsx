/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { React, useState, useEffect } from "react";
import { Container, Button, Card, Row, Col } from "react-bootstrap";
import axios from "axios";
import "./Homepage.css";
import JobDetail from "../../components/UI/JobDetail";

export default function Homepage() {
  // const [searchInput, setSearchInput] = useState("");
  const [allJobs, setAllJobs] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");

  useEffect(() => {
    const getAllPostedJobs = () => {
      const jobList = axios
        .get(`/api/jobs`)
        .then((response) => {
          if (!response.status === 200) {
            throw Error({ message: "No jobs found!" });
          }
          setAllJobs(response.data.result);
          return response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getAllPostedJobs();
  }, []);

  // This function opens a detailed info section of selected job
  function handleShowDetail(e) {
    const jobId = parseInt(
      e.target.parentElement.parentElement.getAttribute("data-id")
    );
    console.log(jobId);
    const job = allJobs.filter((job) => {
      if (job.id === jobId) {
        return job;
      }
    });
    setSelectedJob(job[0]);
    setShowDetails(true);
  }
  // This function closes the detailed info section of selected job
  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  return (
    <Container className="p-0">
      <Row>
        <h2 style={{ margin: "0 auto" }}>Welcome to the Homepage</h2>
      </Row>
      <hr />
      {showDetails ? (
        <JobDetail job={selectedJob} handleCloseDetails={handleCloseDetails} />
      ) : (
        <Row>
          <Col className="col-12 col-lg-6">
            <div className="hero_image_container">
              <img
                src="../../../assets/distance-working-abstract-concept-vector-illustration-distance-office-working-from-home-remote-job-possibility-communication-technology-online-team-meeting-digital-nomad-abstract-metaphor_335657-2923.avif"
                alt=""
              />
            </div>
          </Col>
          <Col className="col-12 col-lg-6">
            <Row>
              <ul className="mt-5" style={{ overflowY: "scroll" }}>
                <Col className="col-12">
                  {allJobs.length >= 1 ? (
                    allJobs.map((job) => {
                      return (
                        <li key={Math.random()}>
                          <Card
                            className="mb-3"
                            data-id={job.id}
                            key={Math.random()}
                            style={{ boxShadow: "-3px 5px 8px grey" }}
                          >
                            <Card.Body>
                              <Card.Title>{job.job_title}</Card.Title>
                              <Card.Text>{job.skills}</Card.Text>
                              <Card.Text>
                                {job.location_city}, {job.location_state}
                              </Card.Text>
                              <Card.Text>{job.job_type}</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                              <Button onClick={handleShowDetail}>
                                Show Details
                              </Button>
                            </Card.Footer>
                          </Card>
                        </li>
                      );
                    })
                  ) : (
                    <h4>No jobs found</h4>
                  )}
                </Col>
              </ul>
            </Row>
          </Col>
        </Row>
      )}
    </Container>
  );
}
