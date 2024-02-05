import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
// eslint-disable-next-line no-unused-vars
export default function EmployerDashboard(props) {
  return (
    <>
      <h1>Welcome Too Your Dashboard</h1>
      <section>
        <aside>
          <ul>
            <li>
              <Button variant="primary" size="lg">
                Account Details
              </Button>
            </li>
            <li>
              <Button variant="primary" size="lg">
                Post A Job
              </Button>
            </li>
            <li>
              <Button variant="primary" size="lg">
                Published Jobs
              </Button>
            </li>
            <li>
              <Button variant="primary" size="lg">
                Draft
              </Button>
            </li>
          </ul>
        </aside>
        <div id="canvas"></div>
      </section>
    </>
  );
}
