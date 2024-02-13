import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import JobPostForm from "../../components/Forms/JobPostForm";
import AccountDetails from "../../components/Dashboard/AccountDetails";
import JobDrafts from "../../components/Dashboard/JobDrafts";
import PublishedJobs from "../../components/Dashboard/PublishedJobs";
import auth from "../../utils/auth";
import axios from "axios";

// eslint-disable-next-line no-unused-vars
export default function EmployerDashboard(props) {
  const [toShow, setToShow] = useState(""); // The state will be set to show the specific section on click events
  const [userProfile, setUserProfile] = useState({}); //current user/company
  const [newJobData, setNewJobData] = useState({
    job_title: "",
    company_details: "",
    experience_min: "",
    experience_max: "",
    run_until: "",
    description: "",
    responsibility: "",
    skills: "",
    salary_min: "",
    salary_max: "",
    benefits: "",
    location_city: "",
    location_state: "",
    job_type: "",
    application_received: "",
  }); // This is the initial state of the new job post form.

  useEffect(() => {
    if (auth.loggedIn()) {
      let user = auth.getProfile();
      setUserProfile(user.data);
    }
  }, []);

  const handleNewJobFormFill = (e) => {
    const { name, value } = e.target;
    setNewJobData((prevVal) => ({ ...prevVal, [name]: value }));
  };
  const handlePostFormSubmit = async (e) => {
    let userId = userProfile.id;
    let revisedFormData = {
      ...newJobData,
      company_id: userId,
      job_status: "inactive",
    };
    e.preventDefault();
    try {
      const response = await axios.post(
        `/api/company/${userId}/job`,
        revisedFormData
      );
      console.log("This is the response", response);
      if (response.status !== 200) {
        throw Error({ message: "Something went wrong!!" });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="h-100 mb-3">
      <h1>Welcome Too Your Dashboard</h1>
      <section className="d-flex justify-content-center">
        <aside className="">
          <ul className="w-100 d-flex flex-column justify-content-center p-2">
            <li className="mb-2 w-100">
              <Button
                variant="primary"
                size=""
                className="w-100"
                id="AccountDetails"
                onClick={(e) => {
                  e.target.id === "AccountDetails"
                    ? setToShow("AccountDetails")
                    : "";
                }}
              >
                Account Details
              </Button>
            </li>
            <li className="mb-2 w-100">
              <Button
                className="w-100"
                variant="primary"
                size=""
                id="jobPost"
                onClick={(e) => {
                  e.target.id === "jobPost" ? setToShow("jobPost") : "";
                }}
              >
                Post A Job
              </Button>
            </li>
            <li className="mb-2 w-100">
              <Button
                variant="primary"
                size=""
                className="w-100"
                id="PublishedJobs"
                onClick={(e) => {
                  e.target.id === "PublishedJobs"
                    ? setToShow("PublishedJobs")
                    : "";
                }}
              >
                Published Jobs
              </Button>
            </li>
            <li className="mb-2 w-100">
              <Button
                variant="primary"
                size=""
                className="w-100"
                id="draft"
                onClick={(e) => {
                  e.target.id === "draft" ? setToShow("draft") : "";
                }}
              >
                Draft
              </Button>
            </li>
          </ul>
        </aside>
        <div id="canvas" className="border border-dark p-5">
          {toShow === "jobPost" ? (
            <JobPostForm
              newJobData={newJobData}
              handleNewJobFormFill={handleNewJobFormFill}
              handlePostFormSubmit={handlePostFormSubmit}
            />
          ) : toShow === "AccountDetails" ? (
            <AccountDetails />
          ) : toShow === "PublishedJobs" ? (
            <PublishedJobs />
          ) : toShow === "draft" ? (
            <JobDrafts />
          ) : (
            ""
          )}
        </div>
      </section>
    </div>
  );
}
