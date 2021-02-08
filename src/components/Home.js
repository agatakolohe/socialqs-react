import React from "react";
import Bio from "./Bio";
import QBar from "./QBar";
import Feed from "./Feed";
import PeopleToFollow from "./PeopleToFollow";

function Home() {
  return (
    <React.Fragment>
      <div class="row pt-5">
        <div class="col-4">
          <Bio />
        </div>
        <div class="col-4">
          <QBar />
          <Feed />
        </div>
        <div class="col-4">
          <PeopleToFollow />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
