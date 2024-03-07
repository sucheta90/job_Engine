import { Row, Col } from "react-bootstrap";

export default function About() {
  return (
    <div>
      <Row>
        <h2 style={{ margin: "0 auto" }} className="mb-3">
          About Us
        </h2>
      </Row>
      <Row className="border">
        <Col className="col-12 col-lg-6">
          <div className="">
            <img
              src="../../../assets/social-media-star-abstract-concept-vector-illustration-influencer-social-media-reach-engagement-celebrity-account-monetization-personal-blog-star-content-creation-abstract-metaphor_335657-4158.avif"
              alt=""
              className="img-fluid"
            />
          </div>
        </Col>
        <Col className="col-lg-6">
          <div className="p-3">
            <h1>Worknado: Where Careers Take Flight</h1>
            <p>
              Worknado is not just another job search platform; it&apos;s a
              dynamic, user-centric application designed to revolutionize how
              professionals navigate their careers. With a whirlwind of
              innovation and a commitment to empowering individuals, Worknado
              has swiftly become the go-to destination for job seekers and
              employers alike. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptatum, eum soluta amet accusantium expedita
              et sit totam earum dolorum omnis dolor eos rerum recusandae
              voluptates eveniet iste! Molestiae, deleniti earum.
            </p>

            <h2>Experience the Worknado Difference:</h2>
            <ol>
              <li>
                <h3>Seamless Navigation:</h3>
                <p>
                  Worknado boasts an intuitive interface that makes job
                  searching a breeze. Users can swiftly navigate through a vast
                  array of job listings, filter options, and personalized
                  recommendations, ensuring a tailored experience for every
                  individual.
                </p>
              </li>
              <li>
                <h3>Tailored Opportunities:</h3>
                <p>
                  Say goodbye to endless scrolling. Worknado utilizes
                  cutting-edge algorithms to match users with opportunities that
                  align not just with their skills but also with their
                  aspirations and values. It&apos;s about finding the right fit,
                  not just any job.
                </p>
              </li>
            </ol>
          </div>
        </Col>
      </Row>
    </div>
  );
}
