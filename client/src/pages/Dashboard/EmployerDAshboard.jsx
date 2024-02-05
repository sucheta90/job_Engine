import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import JobPostForm from "../../components/Forms/JobPostForm";
// eslint-disable-next-line no-unused-vars
export default function EmployerDashboard(props) {
  const [toShow, setToShow] = useState(""); // The state will be set to show the specific section on click events
  return (
    <>
      <h1>Welcome Too Your Dashboard</h1>
      <section className="d-flex">
        <aside>
          <ul>
            <li className="m-2">
              <Button variant="primary" size="lg">
                Account Details
              </Button>
            </li>
            <li className="m-2">
              <Button
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
            <li className="m-2">
              <Button variant="primary" size="lg">
                Published Jobs
              </Button>
            </li>
            <li className="m-2">
              <Button variant="primary" size="lg">
                Draft
              </Button>
            </li>
          </ul>
        </aside>
        <div id="canvas">{toShow === "jobPost" && <JobPostForm />}</div>
      </section>
    </>
  );
}
