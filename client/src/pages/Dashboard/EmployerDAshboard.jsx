/* eslint-disable no-inner-declarations */
import { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import JobPostForm from "../../components/Forms/JobPostForm";
import AccountDetails from "../../components/Dashboard/AccountDetails";
import JobsList from "../../components/Dashboard/JobsList";
import auth from "../../utils/auth";
import axios from "axios";

// eslint-disable-next-line no-unused-vars
export default function EmployerDashboard(props) {
  const [toShow, setToShow] = useState("AccountDetails"); // The state will be set to show the specific section on click events
  const [userProfile, setUserProfile] = useState({}); //current user/company
  const [allJobs, setAllJobs] = useState(""); //all jobs list - active, inactive, closed
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
      let userid = auth.getProfile().data.id;
      let getUser = async (userid) => {
        const response = await axios.get(`/api/company/${userid}`);
        if (response.status !== 200) {
          throw Error({ message: "Could not find user!" });
        }
        setUserProfile(response.data[0]);
        return response.data;
      };
      const getAlljobs = async (userid) => {
        const jobsResponse = await axios.get(`/api/company/${userid}/jobs`);
        setAllJobs(jobsResponse.data.result);
      };
      getUser(userid);
      getAlljobs(userid);
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
      setToShow("AllJobs");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="h-100 mb-3">
      <h1>Welcome Too Your Dashboard</h1>
      {/* <section className="d-flex justify-content-center"> */}
      <Nav activeKey="1">
        <Nav.Item>
          <Nav.Link
            eventKey="1"
            id="AccountDetails"
            onClick={(e) => {
              e.target.id === "AccountDetails"
                ? setToShow("AccountDetails")
                : "";
            }}
          >
            Account Details
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="2"
            title="Item"
            id="jobPost"
            onClick={(e) => {
              e.target.id === "jobPost" ? setToShow("jobPost") : "";
            }}
          >
            Post A Job
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="3"
            id="AllJobs"
            onClick={(e) => {
              e.target.id === "AllJobs" ? setToShow("AllJobs") : "";
            }}
          >
            All Jobs
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div id="canvas" className="border border-dark p-5">
        {toShow === "jobPost" ? (
          <JobPostForm
            newJobData={newJobData}
            handleNewJobFormFill={handleNewJobFormFill}
            handlePostFormSubmit={handlePostFormSubmit}
          />
        ) : toShow === "AccountDetails" ? (
          <AccountDetails userProfile={userProfile} />
        ) : toShow === "AllJobs" ? (
          <JobsList
            allJobs={allJobs}
            handleNewJobFormFill={handleNewJobFormFill}
            newJobData={newJobData}
            userProfile={userProfile}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
