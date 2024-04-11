/* eslint-disable react/prop-types */
// import CardComponent from "../UI/Card";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import JobPostForm from "../Forms/JobPostForm";
import axios from "axios";
import DetailCard from "../UI/DetailCard";

export default function JobsList({ allJobs, userProfile }) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({}); //initial form state
  const [showDetail, setShowDetail] = useState(false);
  const [details, setDetails] = useState("");

  // The below function fetches  opens a form with pre-filled data
  const handleEditJob = async (e) => {
    const jobId = parseInt(
      e.target.parentElement.parentElement.getAttribute(`data-id`)
    );
    console.log(jobId);
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

  const closeDetails = () => {
    // console.log("clicked");
    setShowDetail(false);
  };

  // handler to change values of form fields
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevVal) => ({ ...prevVal, [name]: value }));
  };
  // Executes put request to save changes to the database
  const handleEditFormSubmit = async (e) => {
    e.preventDefault();
    const userId = userProfile.id;
    const jobId = formData.jobId;
    console.log(jobId);
    try {
      const response = await axios.put(
        `/api/company/${userId}/job/${jobId}`,
        formData
      );
      if (!response.status === 200) {
        throw Error({ message: response.message });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeletePost = async (e) => {
    e.preventDefault();
    const userId = userProfile.id;
    const jobId = e.target.parentElement.parentElement.getAttribute("data-id");
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axios
        .delete(`/api/company/${userId}/job/${jobId}`)
        .then((result) => {
          if (!result.status === 200) {
            throw Error({ message: "Could not delete post at this time" });
          }
          return result;
        })
        .catch((err) => {
          console.log("Could not delete post at this time", err);
        });
    } catch (err) {
      console.log("Could not delete post at this time", err);
    }
  };

  const handleShowDetails = (e) => {
    setShowDetail(true);
    const jobId = parseInt(
      e.target.parentElement.parentElement.getAttribute(`data-id`)
    );
    const job = allJobs.filter((el) => {
      if (el.id === jobId) {
        return el;
      }
    });
    setDetails(job[0]);
    // return job[0];
  };

  return (
    <div className="">
      {showDetail ? (
        <DetailCard
          job={details}
          handleEditJob={handleEditJob}
          handleEditFormSubmit={handleEditFormSubmit}
          handleFormChange={handleFormChange}
          handleCancelEdit={handleCancelEdit}
          handleDeletePost={handleDeletePost}
          closeDetails={closeDetails}
          showForm={showForm}
          formData={formData}
          userId={userProfile.id}
        />
      ) : (
        <>
          <h3>All Jobs</h3>
          <div className="container" style={{ height: "80vh" }}>
            <div className="row">
              {allJobs.length >= 1
                ? allJobs.map((job) => {
                    return (
                      <Card
                        key={job.id}
                        className="m-3 col-lg-3"
                        data-id={job.id}
                        style={{
                          boxShadow: "-3px 5px 8px grey",
                        }}
                      >
                        <Card.Img variant="top" key={`img_${job.id}`} />
                        <Card.Body className="">
                          <Card.Title>
                            {job.experience} {job.job_title}
                          </Card.Title>
                          <Card.Text>
                            <b>{job.job_status}</b>
                          </Card.Text>
                          <Card.Text>{job.skills}</Card.Text>

                          <Button
                            className="mr-3 w-75"
                            onClick={handleShowDetails}
                          >
                            Show Details
                          </Button>
                        </Card.Body>
                      </Card>
                    );
                  })
                : `Did not find a post`}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
