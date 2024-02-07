import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import JobPostForm from "../../components/Forms/JobPostForm";
import AccountDetails from "../../components/Dashboard/AccountDetails";
import JobDrafts from "../../components/Dashboard/JobDrafts";
import PublishedJobs from "../../components/Dashboard/PublishedJobs";
// eslint-disable-next-line no-unused-vars
export default function EmployerDashboard(props) {
  const [toShow, setToShow] = useState(""); // The state will be set to show the specific section on click events
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
    company_id: "",
    application_received: "",
    job_status: "",
  }); // This is the initial state of the new job post form.

  const handleNewJobFormFill = (e) => {
    const { name, value } = e.target;
    setNewJobData((prevVal) => ({ ...prevVal, [name]: value }));
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
