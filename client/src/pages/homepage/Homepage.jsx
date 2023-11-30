// eslint-disable-next-line no-unused-vars
import { React, useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import "./Homepage.css";

export default function Homepage() {
  const [searchInput, setSearchInput] = useState("");
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
  return (
    <Container>
      <section className="homepage_header">
        <h1>Welcome to the Homepage</h1>
      </section>
      <section className="hero">
        <div className="hero_image_container">
          <img
            src="../../../assets/distance-working-abstract-concept-vector-illustration-distance-office-working-from-home-remote-job-possibility-communication-technology-online-team-meeting-digital-nomad-abstract-metaphor_335657-2923.avif"
            alt=""
          />
        </div>
        <div className="hero_form_container">
          <form>
            <label htmlFor="">Search a job</label>
            <input
              onChange={handleChange}
              type="text"
              id="search_input"
              placeholder="Search by Keyword or Skill"
              name="searchInput"
              value={searchInput}
            />
            {/* <input
              onChange={handleChange}
              type="text"
              id="search_input"
              placeholder="Search by Keyword or Skill"
              name="searchInput"
              value={searchInput}
            />
            <input
              onChange={handleChange}
              type="text"
              id="search_input"
              placeholder="Search by Keyword or Skill"
              name="searchInput"
              value={searchInput}
            />
            <input
              onChange={handleChange}
              type="text"
              id="search_input"
              placeholder="Search by Keyword or Skill"
              name="searchInput"
              value={searchInput}
            /> */}
          </form>
          <Button onClick={handleFormSubmit}>Search</Button>
        </div>
      </section>
      <section className=""></section>
    </Container>
  );
}
