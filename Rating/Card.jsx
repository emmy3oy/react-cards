import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie, faStar } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";

const Card = () => {
  return (
    <section className="card-container">
      <Container className="Rating">
        <section className="card-section-header">
          <h4 id="h4">What our User's think</h4>
          <h3 id="h3">Testimonials</h3>
        </section>
        <section className="card-section">
          <div>
            <h5>
              <FontAwesomeIcon
                className="icon1"
                icon={faUserTie}
                style={{ color: "#043995" }}
              />
              Jeremy Clarkson
            </h5>
            <p className="paragraph">United States</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut labore
              expedita cumque quisquam laborum quia saepe ducimus explicabo iure, in
              voluptates dicta atque et? Eos culpa voluptatum fugiat necessitatibus
              voluptates.
            </p>
            <FontAwesomeIcon
              className="icon1"
              icon={faStar}
              style={{ color: "#b9f514" }}
            />
            <FontAwesomeIcon
              className="icon1"
              icon={faStar}
              style={{ color: "#b9f514" }}
            />
            <FontAwesomeIcon
              className="icon1"
              icon={faStar}
              style={{ color: "#b9f514" }}
            />
            <FontAwesomeIcon
              className="icon1"
              icon={faStar}
              style={{ color: "#b9f514" }}
            />
            <FontAwesomeIcon
              className="icon1"
              icon={faStar}
              style={{ color: "#b9f514" }}
            />
          </div>

          <div>
            <h5>
              <FontAwesomeIcon
                className="icon1"
                icon={faUserTie}
                style={{ color: "#043995" }}
              />
              Emma Watson
            </h5>
            <p className="paragraph">United States</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut labore
              expedita cumque quisquam laborum quia saepe ducimus explicabo iure, in
              voluptates dicta atque et? Eos culpa voluptatum fugiat necessitatibus
              voluptates.
            </p>
            <FontAwesomeIcon
              className="icon1"
              icon={faStar}
              style={{ color: "#b9f514" }}
            />
            <FontAwesomeIcon
              className="icon1"
              icon={faStar}
              style={{ color: "#b9f514" }}
            />
            <FontAwesomeIcon
              className="icon1"
              icon={faStar}
              style={{ color: "#b9f514" }}
            />
            <FontAwesomeIcon
              className="icon1"
              icon={faStar}
              style={{ color: "#b9f514" }}
            />
            <FontAwesomeIcon
              className="icon1"
              icon={faStar}
              style={{ color: "#b9f514" }}
            />
          </div>

          <div>
            <h5>
              <FontAwesomeIcon
                className="icon1"
                icon={faUserTie}
                style={{ color: "#043995" }}
              />
              Jeremy Clarkson
            </h5>
            <p className="paragraph">United States</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut labore
              expedita cumque quisquam laborum quia saepe ducimus explicabo iure, in
              voluptates dicta atque et? Eos culpa voluptatum fugiat necessitatibus
              voluptates.
            </p>
            <FontAwesomeIcon
              className="icon1"
              icon={faStar}
              style={{ color: "#b9f514" }}
            />
            <FontAwesomeIcon
              className="icon1"
              icon={faStar}
              style={{ color: "#b9f514" }}
            />
            <FontAwesomeIcon
              className="icon1"
              icon={faStar}
              style={{ color: "#b9f514" }}
            />
            <FontAwesomeIcon
              className="icon1"
              icon={faStar}
              style={{ color: "#b9f514" }}
            />
            <FontAwesomeIcon
              className="icon1"
              icon={faStar}
              style={{ color: "#b9f514" }}
            />
          </div>
        </section>
      </Container>
    </section>
  );
};

export default Card;
