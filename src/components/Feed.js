import React from "react";
import SocialQ from "./SocialQ";

const masterSocialQs = [
  {
    name: "Patty Mayo",
    socialQPost: "Don't touch me",
  },
  {
    name: "Frank Coffee",
    socialQPost: "Vaccinated",
  },
  {
    name: "Jackson Galaxy",
    socialQPost: "Get those nuts outta my face. (Peanut Allergy)",
  },
];

function Feed() {
  return (
    <React.Fragment>
      <hr />
      {masterSocialQs.map((socialQ, index) => (
        <SocialQ
          name={socialQ.name}
          socialQPost={socialQ.socialQPost}
          key={index}
        />
      ))}
    </React.Fragment>
  );
}

export default Feed;
