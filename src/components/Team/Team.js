import React from "react";
import { Container } from "react-bootstrap";
import "./Team.css";
import member1 from "../../assets/member1.png";
import member2 from "../../assets/member2.png";
import member3 from "../../assets/member3.png";

export default function Team() {
  return (
    <article id="team">
      <Container className="container">
        <div className="content">
          <h1 className="title">Meet the Team</h1>
          <div className="teamGrid">
            <div xs={4} className="member">
              <img
                src={member1}
                alt="Emma"
                data-aos="slide-right"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay="1"
                data-aos-duration="400"
              />
              <h3 className="memberInfo">
                Emma Xia
                <br />
                CEO, WTB Influencer
                <br />
                bukiemma000@gmail.com
              </h3>
            </div>
            <div className="member">
              <img src={member2} alt="Manesh" />
              <h3 className="memberInfo">
                Manesh Jhawar
                <br />
                CTO, Skydiver
                <br />
                manesh.jhawar@gmail.com
              </h3>
            </div>
            <div className="member">
              <img
                src={member3}
                alt="Nick"
                data-aos="slide-left"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay="1"
                data-aos-duration="400"
              />
              <h3 className="memberInfo">
                Nick Zhang
                <br />
                CTO, Nerdy kid
                <br />
                nzhang.jiahui@gmail.com
              </h3>
            </div>
          </div>
        </div>
      </Container>
    </article>
  );
}
