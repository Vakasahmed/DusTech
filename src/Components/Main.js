import React from "react";
import work from "../Images/work1.jpg";

function Main() {
  return (
    <div className="main">
      <div className="center flex">
        <img className="work" src={work} alt="work" />
        <h3 className="content">
          DusTech Pvt. Ltd. has emerged as a global leader in detailing zone. We
          have been breaking the boundaries of geographical limits and
          developing at lightning speed.
        </h3>
      </div>

      <div className="container">
        <h1 className="detail">
          With our deep-rooted establishment in India (Navi Mumbai) we have
          stretched across globally having international operations from USA
          thus giving a thrust to the detailing industry. Our commitment to
          quality standards have resulted in client’s absolute trust. Clients
          through out the world have believed and entrusted us with their most
          challenging and complex structures for error free project execution.
          DusTech has accepted the challenge and has “stood up” to the client’s
          expectation and strengthened its business relationship with its
          customers. Our project list includes some of the most renowned,
          admired structures, requiring some of the most unique composition of
          tasks ever found. Be it, commercial project or an industrial one, our
          creation is flawless. Our Clients are based across the world to whom
          we offer our finest services. No challenge is big enough to hinder the
          zeal of our expert detailers Techflow hold 300+ of Tekla BIM software
          license as one the largest user of Trimble Solution globally Our Teams
          are very well conversant with the latest technology of detailing and
          has efficiently carried out each and every task delegated to them.
          They are continuously trained for error free project execution.
          Projects of any size and complexity can not encumber the vigor of our
          extremely professional teams. Updated original software, extremely
          talented, trained and motivated teams and infrastructure at its best
          have resulted in best quality services offered. Cost effective, timely
          delivery and adherence to commitment is achieved even at the toughest
          situations.
        </h1>
      </div>
    </div>
  );
}

export default Main;
