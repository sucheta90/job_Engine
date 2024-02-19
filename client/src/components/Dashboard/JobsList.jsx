/* eslint-disable react/prop-types */
// import CardComponent from "../UI/Card";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import JobPostForm from "../Forms/JobPostForm";
import axios from "axios";

export default function JobsList({ allJobs, userProfile }) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({}); //initial form state

  // The below function fetches  opens a form with pre-filled data
  const handleEditJob = async (e) => {
    const jobId = parseInt(
      e.target.parentElement.parentElement.getAttribute(`data-id`)
    );
    const userId = parseInt(userProfile.id);
    const job = await axios
      .get(`/api/company/${userId}/job/${jobId}`)
      .then((response) => {
        if (!response.status === 200) {
          return;
        }
        return response.data.result[0];
      });
    if (job) {
      setFormData({ ...job, jobId });
      setShowForm(true);
    }
  };
  // Function closes form
  const handleCancelEdit = () => {
    setShowForm(false);
  };

  // handler to change values of form fields
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevVal) => ({ ...prevVal, [name]: value }));
  };
  // Executes put request to save changes to the database
  // const handleEditFormSubmit = (e) => {
  //   e.preventDefault();
  //   const jobId =
  // };

  return (
    <div>
      <h1>All Jobs</h1>
      <div>
        {allJobs.length >= 1
          ? allJobs.map((job) => {
              return (
                <>
                  <Card key={job.id} className="mb-3" data-id={job.id}>
                    <Card.Img variant="top" />
                    <Card.Body>
                      <Card.Title>{job.job_title}</Card.Title>
                      <Card.Text>{job.company_details}</Card.Text>
                      <Button className="mr-3">Show Details</Button>
                      <Button
                        variant="primary"
                        className="mr-3"
                        onClick={handleEditJob}
                      >
                        Edit
                      </Button>
                      {job.job_status === "inactive" && (
                        <Button variant="primary" className="mr-3">
                          Publish
                        </Button>
                      )}
                      {job.job_status === "active" && (
                        <Button variant="primary" className="mr-3">
                          Go somewhere
                        </Button>
                      )}
                      <Button>Delete Post</Button>
                    </Card.Body>
                  </Card>
                </>
              );
            })
          : `Did not find a post`}
      </div>
      {showForm ? (
        <JobPostForm
          job={formData}
          handleCancelEdit={handleCancelEdit}
          handleFormChange={handleFormChange}
        />
      ) : (
        ""
      )}
    </div>
  );
}
