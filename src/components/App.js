import React from "react";
import Home from "./Home";
import Header from "./Header";
// import SearchBar from "./SearchBar";
// import Notifications from "./Notifications";
// import Messages from "./Messages";

function App() {
  return (
    <React.Fragment>
      <Header />

      <div class="container mt-6">
        <Home />
        {/* <SearchBar />
        <Notifications />
        <Messages /> */}
      </div>
    </React.Fragment>
  );
}

export default App;
