import React from "react";
import { Container } from "react-bootstrap";
import "./Mission.css";

export default function Mission() {
  return (
    <section id="mission">
      <Container>
        <div className="content">
          <h1 className="title">
            our
            <br /> mission
          </h1>
          <p className="info">
            LGR aim to make online social media a better place through inspiring
            creators to curate authentic content. Regardless follower counts,
            all online creators deserve to know they own worth and be seen by
            the world. LGR is created to make that happen.
          </p>
        </div>
      </Container>
    </section>
  );
}
