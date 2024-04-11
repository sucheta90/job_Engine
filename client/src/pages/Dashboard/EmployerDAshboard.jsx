/* eslint-disable no-inner-declarations */
import { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import JobPostForm from "../../components/Forms/JobPostForm";
// import AccountDetails from "../../components/EmployerHomepage/AccountDetails";
import JobsList from "../../components/EmployerHomepage/JobsList";
import auth from "../../utils/auth";
import axios from "axios";

// eslint-disable-next-line no-unused-vars
export default function EmployerDashboard(props) {
  const [toShow, setToShow] = useState("AllJobs"); // The state will be set to show the specific section on click events
  const [errorMessage, setErrorMessage] = useState(""); // The initial state of error message
  const [showErr, setShowErr] = useState(false); // Flag to dertermine wether to show or hide error message
  const [userProfile, setUserProfile] = useState({}); //current user/company
  const [allJobs, setAllJobs] = useState(""); //all jobs list - active, inactive, closed
  const [newJobData, setNewJobData] = useState({
    job_title: "",
    company_details: "",
    experience: "",
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

  /**
   *
   * @param {*} e
   */
  const handleCloseForm = () => {
    setToShow("AllJobs");
  };

  const handleNewJobFormFill = (e) => {
    const { name, value } = e.target;
    setNewJobData((prevVal) => ({ ...prevVal, [name]: value }));
  };

  // ** This funcion submits the new job post - form
  const handlePostFormSubmit = async (e) => {
    let userId = userProfile.id;
    let revisedFormData = {
      ...newJobData,
      application_received: 0,
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
        throw Error({ message: ["Something went wrong!!", response.error] });
      }
    } catch (err) {
      console.log(err.message);
      setErrorMessage(errorMessage);
      setShowErr(true);
    } finally {
      setToShow("AllJobs");
    }
  };
  // *********************************************************

  return (
    <div className="h-100 mb-3">
      <h2>Welcome Too Your Dashboard</h2>
      <Nav activeKey="1">
        <Nav.Item className="mr-3">
          <Nav.Link
            eventKey="3"
            id="AllJobs"
            onClick={(e) => {
              e.target.id === "AllJobs" ? setToShow("AllJobs") : "";
            }}
            className={toShow === "AllJobs" ? "bg-info text-white" : ""}
            style={{
              boxShadow: "-3px 5px 8px grey",
            }}
          >
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="mr-3">
          <Nav.Link
            eventKey="2"
            title="Item"
            id="jobPost"
            onClick={(e) => {
              e.target.id === "jobPost" ? setToShow("jobPost") : "";
            }}
            className={toShow === "jobPost" ? "bg-info text-white" : ""}
            style={{
              boxShadow: "-3px 5px 8px grey",
            }}
          >
            Post A Job
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <hr />
      <div id="canvas" className="">
        {toShow === "jobPost" ? (
          <JobPostForm
            newJobData={newJobData}
            handleNewJobFormFill={handleNewJobFormFill}
            handlePostFormSubmit={handlePostFormSubmit}
            showErr={showErr}
            errorMessage={errorMessage}
            handleCloseForm={handleCloseForm}
          />
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
