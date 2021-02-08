import React from "react";
import FriendSuggestion from "./FriendSuggestion";

const masterSuggestionList = [
  {
    picture: "https://miro.medium.com/max/429/1*eeUIptAIAyof5LbQmsr1-Q.png",
    name: "Betty Boop",
    pronouns: "she/her",
  },
  {
    picture:
      "https://pbs.twimg.com/profile_images/1340495732885737479/HB9D5kGs_400x400.jpg",
    name: "RuPaul",
    pronouns: "mother",
  },
  {
    picture:
      "https://media.them.us/photos/5d7bcd8750f26c000856aba3/1:1/w_3164,h_3164,c_limit/sam-tout.jpg",
    name: "Sam Smith",
    pronouns: "they/them",
  },
];

function PeopleToFollow() {
  return (
    <React.Fragment>
      <h3>Suggestions for you:</h3>
      {masterSuggestionList.map((friendSuggestion, index) => (
        <FriendSuggestion
          picture={friendSuggestion.picture}
          name={friendSuggestion.name}
          pronouns={friendSuggestion.pronouns}
          key={index}
        />
      ))}
    </React.Fragment>
  );
}

export default PeopleToFollow;
