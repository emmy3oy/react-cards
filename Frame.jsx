import "./frame.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faClock,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";

const Frame = () => {
  return (
    <Container className="frame-container">
      <div className="frame">
        <div className="frame4-Container">
          <h4>
            <FontAwesomeIcon
              className="icon1"
              icon={faClipboardList}
              style={{ color: "#095cec" }}
            />
            Create Your Resume
          </h4>
          <hr className="line" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
            exercitationem.
          </p>
        </div>
        <div className="frame5-Container">
          <h4>
            <FontAwesomeIcon
              className="icon1"
              icon={faClock}
              style={{ color: "#085ae7" }}
            />
            Get Matched in Minutes
          </h4>
          <hr className="line" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptates, veniam!
          </p>
        </div>
        <div className="frame6-Container">
          <h4>
            <FontAwesomeIcon
              className="icon1"
              icon={faBell}
              style={{ color: "#065ff9" }}
            />
            Never Miss an Opportunity
          </h4>
          <hr className="line" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime,
            ipsam?
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Frame;
