import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import JobPostForm from "../../components/Forms/JobPostForm";
import AccountDetails from "../../components/Dashboard/AccountDetails";
import JobDrafts from "../../components/Dashboard/JobDrafts";
import PublishedJobs from "../../components/Dashboard/PublishedJobs";
// eslint-disable-next-line no-unused-vars
export default function EmployerDashboard(props) {
  const [toShow, setToShow] = useState(""); // The state will be set to show the specific section on click events
  return (
    <div className="h-100 mb-3">
      <h1>Welcome Too Your Dashboard</h1>
      <section className="d-flex">
        <aside>
          <ul>
            <li className="m-2 w-100">
              <Button
                variant="primary"
                size="lg"
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
            <li className="m-2 w-100">
              <Button
                className="w-100"
                variant="primary"
                size="lg"
                id="jobPost"
                onClick={(e) => {
                  e.target.id === "jobPost" ? setToShow("jobPost") : "";
                }}
              >
                Post A Job
              </Button>
            </li>
            <li className="m-2 w-100">
              <Button
                variant="primary"
                size="lg"
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
            <li className="m-2 w-100">
              <Button
                variant="primary"
                size="lg"
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
        <div id="canvas">
          {toShow === "jobPost" ? (
            <JobPostForm />
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
