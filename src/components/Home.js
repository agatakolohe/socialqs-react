import React from "react";
import Bio from "./Bio";
// import QBar from "./QBar";
import Feed from "./Feed";
// import PeopleToFollow from "./PeopleToFollow";

function Home() {
  return (
    <React.Fragment>
      <Bio />
      {/* <QBar /> */}
      <Feed />
      {/* <PeopleToFollow /> */}
    </React.Fragment>
  );
}

export default Home;
