/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import JobPostForm from "../Forms/JobPostForm";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CardComponent(props) {
  const {
    job,
    handleEditJob,
    handleEditFormSubmit,
    handleFormChange,
    handleCancelEdit,
    handleDeletePost,
    showForm,
    formData,
    closeDetails,
    userId,
  } = props;
  const [experience, setExperience] = useState("");

  useEffect(() => {
    const experienceReq = (job) => {
      const exp = job.experience;
      switch (exp) {
        case "Entry-level":
          setExperience("Little to NO Experince Required");
          break;
        case "Junior":
          setExperience("0 to 2 years");
          break;
        case "Associate":
          setExperience("2 to 5 years");
          break;
        case "Mid-level":
          setExperience("5 to 10 years");
          break;
        case "Senior":
          setExperience("10 years and above");
          break;
      }
    };
    experienceReq(job);
  }, [job]);

  /**
   *
   * @param {*} e
   */
  const handlePublishJob = async (e) => {
    e.preventDefault();
    const jobId = job.id;
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axios
        .put(`/api/company/${userId}/job/${jobId}/activate`, {
          job_status: "active",
        })
        .then((data) => {
          if (!data.status === 200) {
            throw Error({ message: "Could not complete request" });
          }
          return data;
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h2 className="mb-3">Job Details</h2>
      <Card data-id={job.id} style={{ boxShadow: "-3px 5px 8px grey" }}>
        <section>
          <Button
            style={{ float: "inline-end", boxShadow: "-3px 5px 8px grey" }}
            aria-label="Close"
            onClick={closeDetails}
            className="btn btn-dark btn-sm "
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
            <b>Exprerience required</b> <br />
            {experience}
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
          {/* <Card.Text>
            <b>Expiry Date</b> {job.description}
          </Card.Text> */}

          <Button variant="primary" className="mr-3" onClick={handleEditJob}>
            Edit
          </Button>
          <Button variant="primary" className="mr-3" onClick={handleDeletePost}>
            Delete Post
          </Button>
          <Button onClick={closeDetails}>Back to Jobs List</Button>
        </Card.Body>
      </Card>
      {showForm && (
        <div className="p-5" style={{ width: "100%", padding: "8em" }}>
          <section>
            <Button
              style={{ float: "inline-end", boxShadow: "-3px 5px 8px grey" }}
              aria-label="Close"
              onClick={handleCancelEdit}
              className="btn btn-dark btn-sm "
            >
              X
            </Button>
          </section>
          <h1>Edit Job Post</h1>

          <JobPostForm
            job={formData}
            handleCancelEdit={handleCancelEdit}
            handleFormChange={handleFormChange}
            handleEditFormSubmit={handleEditFormSubmit}
            handlePublishJob={handlePublishJob}
          />
        </div>
      )}
    </>
  );
}
