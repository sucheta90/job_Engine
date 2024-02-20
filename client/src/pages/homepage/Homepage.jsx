// eslint-disable-next-line no-unused-vars
import { React, useState, useEffect } from "react";
import { Container, Button, Card } from "react-bootstrap";
import axios from "axios";
import "./Homepage.css";
import JobDetail from "../../components/UI/JobDetail";

export default function Homepage() {
  const [searchInput, setSearchInput] = useState("");
  const [allJobs, setAllJobs] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");

  function handleChange(e) {
    const value = e.target.value;
    setSearchInput(value);
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    const formInput = document.getElementById("search_input");
    console.log(formInput.value);
    setSearchInput("");
  }
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
  const handleCloseDetails = () => {
    setShowDetails(false);
  };
  // Function to fetch all posted jobs
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
  return (
    <Container className=" p-0">
      <h1>Welcome to the Homepage</h1>
      {showDetails ? (
        <JobDetail job={selectedJob} handleCloseDetails={handleCloseDetails} />
      ) : (
        <section className="hero" style={{ float: "left" }}>
          <div className="hero_image_container w-50">
            <img
              src="../../../assets/distance-working-abstract-concept-vector-illustration-distance-office-working-from-home-remote-job-possibility-communication-technology-online-team-meeting-digital-nomad-abstract-metaphor_335657-2923.avif"
              alt=""
            />
          </div>
          <ul className="mt-5 w-50 p-3" style={{ overflowY: "scroll" }}>
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
                        <Button onClick={handleShowDetail}>Show Details</Button>
                      </Card.Footer>
                    </Card>
                  </li>
                );
              })
            ) : (
              <h4>No jobs found</h4>
            )}
          </ul>
        </section>
      )}
    </Container>
  );
}
