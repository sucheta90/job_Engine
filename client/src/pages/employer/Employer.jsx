import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import Stack from "react-bootstrap/esm/Stack";
import "./Employer.css";
export default function Employer() {
  return (
    <Container fluid id="employer_dashboard">
      <h1>Posting Jobs Made Effortless!</h1>
      <div>
        <aside>
          <Stack direction="horizontal">
            <Button>Sign Up</Button>

            <Button>Log In</Button>
          </Stack>
        </aside>
      </div>
    </Container>
  );
}
